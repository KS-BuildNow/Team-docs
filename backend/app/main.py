from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI-Nunchi Backend")


class AnalyzeRequest(BaseModel):
    chat: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    # Placeholder inference logic — replace with real model calls
    text = req.chat or ""
    # simple mock: length-based heuristic
    risk = min(95, max(5, len(text) % 100))
    coffee_bonus = 23
    sentiment = "neutral"
    if "화" in text or "짜증" in text:
        sentiment = "negative"
    elif "좋다" in text or "감사" in text:
        sentiment = "positive"

    return {
        "input_summary": text[:200],
        "risk_percent": risk,
        "coffee_delta": coffee_bonus,
        "manager_sentiment": sentiment,
        "advice": "Consider approaching with a short summary and offer help."
    }
