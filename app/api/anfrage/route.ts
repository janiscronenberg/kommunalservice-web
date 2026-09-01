import { NextResponse } from "next/server";
import { getService } from "../../../lib/content";

type InquiryPayload = {
  organization?: unknown;
  municipality?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
};

const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const forwardedHost = request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (origin && forwardedHost) {
    try {
      if (new URL(origin).host !== forwardedHost) {
        return NextResponse.json({ message: "Die Anfrage wurde aus Sicherheitsgründen abgelehnt." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: "Ungültige Anfragequelle." }, { status: 403 });
    }
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Zu viele Anfragen. Bitte versuchen Sie es in einigen Minuten erneut." }, { status: 429 });
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ message: "Die Formulardaten sind ungültig." }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ message: "Vielen Dank. Ihre Anfrage wurde übermittelt." });
  }

  const organization = clean(payload.organization, 120);
  const municipality = clean(payload.municipality, 120);
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180).toLowerCase();
  const phone = clean(payload.phone, 60);
  const serviceSlug = clean(payload.service, 120);
  const message = clean(payload.message, 4000);
  const consent = clean(payload.consent, 10);

  if (!organization || !municipality || !name || message.length < 20 || consent !== "yes") {
    return NextResponse.json({ message: "Bitte füllen Sie alle Pflichtfelder vollständig aus." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { message: "Der E-Mail-Versand ist in dieser Vorschau noch nicht eingerichtet. Bitte tragen Sie vor Veröffentlichung die Versanddaten ein." },
      { status: 503 },
    );
  }

  const service = getService(serviceSlug);
  const serviceLabel = service?.shortTitle || "Andere / noch offene Routine";
  const html = `
    <h1>Neue Pilotanfrage</h1>
    <p><strong>Kommune / Organisation:</strong> ${escapeHtml(organization)}</p>
    <p><strong>Ort / Einsatzgebiet:</strong> ${escapeHtml(municipality)}</p>
    <p><strong>Ansprechperson:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || "–")}</p>
    <p><strong>Leistung:</strong> ${escapeHtml(serviceLabel)}</p>
    <h2>Beschreibung</h2>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Pilotanfrage: ${organization} – ${serviceLabel}`, html }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut." }, { status: 502 });
  }

  return NextResponse.json({ message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt." });
}
