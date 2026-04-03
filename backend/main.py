import os
import sqlite3
from contextlib import contextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

DB_PATH = Path(__file__).resolve().parent / "leads.db"


@contextmanager
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db() -> None:
    with get_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                company TEXT NOT NULL,
                email TEXT NOT NULL,
                created_at TEXT DEFAULT (datetime('now'))
            )
            """
        )


def _cors_origins() -> list[str]:
    """Локальная разработка + домены из CORS_ORIGINS (через запятую)."""
    defaults = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]
    raw = os.environ.get("CORS_ORIGINS", "").strip()
    if not raw:
        return defaults
    extra = [o.strip().rstrip("/") for o in raw.split(",") if o.strip()]
    seen: set[str] = set()
    merged: list[str] = []
    for o in defaults + extra:
        if o not in seen:
            seen.add(o)
            merged.append(o)
    return merged


def _cors_origin_regex() -> str | None:
    """
    По умолчанию разрешаем любой хост *.vercel.app (прод и превью).
    Отключить: CORS_ORIGIN_REGEX=0
    Свой шаблон: CORS_ORIGIN_REGEX=https://.*\\.example\\.com
    """
    r = os.environ.get("CORS_ORIGIN_REGEX", "").strip()
    if r.lower() in ("0", "false", "off", "none", "disable"):
        return None
    if r:
        return r
    return r"https://.*\.vercel\.app"


app = FastAPI(title="IS UTO API", version="1.0.0")
init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins(),
    allow_origin_regex=_cors_origin_regex(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class VehicleStatus(BaseModel):
    vehicle_id: str
    coordinates: str
    status: str
    fuel_optimization_pct: float
    path_label: str = "CURRENT PATH"
    eta_label: str = "ETA OPTIMIZATION"


class FeatureItem(BaseModel):
    id: str
    title: str
    description: str
    icon: str


class StatItem(BaseModel):
    value: str
    label: str


class FeaturesResponse(BaseModel):
    features: list[FeatureItem]
    stats: list[StatItem]


class ContactIn(BaseModel):
    name: str
    company: str
    email: EmailStr


class ContactOut(BaseModel):
    ok: bool
    message: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/api/v1/vehicle/status", response_model=VehicleStatus)
def vehicle_status():
    return VehicleStatus(
        vehicle_id="A 777 AA 77",
        coordinates="55.7558° N, 37.6173° E",
        status="Active Mission",
        fuel_optimization_pct=-14.2,
    )


@app.get("/api/v1/features", response_model=FeaturesResponse)
def features():
    return FeaturesResponse(
        features=[
            FeatureItem(
                id="road-graph",
                title="Дорожный граф",
                description=(
                    "Собственный граф дорог месторождений, включающий временные проезды "
                    "и зимники, недоступные в обычных картах."
                ),
                icon="map",
            ),
            FeatureItem(
                id="wialon",
                title="Интеграция Wialon",
                description=(
                    "Прямое соединение с телематическими терминалами. Сбор данных о топливе, "
                    "скорости и оборотах двигателя в реальном времени."
                ),
                icon="radio",
            ),
            FeatureItem(
                id="analytics",
                title="Аналитика и КПЭ",
                description=(
                    "Наглядные дашборды для руководителей. Мониторинг эффективности каждого "
                    "водителя и общего здоровья автопарка."
                ),
                icon="chart",
            ),
            FeatureItem(
                id="api",
                title="REST API",
                description=(
                    "Гибкие возможности интеграции с SAP, 1С и внутренними системами "
                    "управления ресурсами заказчика."
                ),
                icon="diamond",
            ),
        ],
        stats=[
            StatItem(value="52+", label="ЕДИНИЦ СПЕЦТЕХНИКИ"),
            StatItem(value="14.2%", label="ЭКОНОМИЯ ТОПЛИВА"),
            StatItem(value="28 мин", label="СРЕДНЕЕ ВРЕМЯ (ETA)"),
        ],
    )


@app.post("/api/v1/contact", response_model=ContactOut)
def contact(body: ContactIn):
    name = body.name.strip()
    company = body.company.strip()
    if not name or not company:
        raise HTTPException(status_code=400, detail="Имя и компания обязательны")
    with get_db() as conn:
        conn.execute(
            "INSERT INTO leads (name, company, email) VALUES (?, ?, ?)",
            (name, company, str(body.email)),
        )
    return ContactOut(ok=True, message="Заявка принята. Мы свяжемся с вами.")
