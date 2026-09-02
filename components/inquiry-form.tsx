"use client";

import { useState } from "react";
import { services } from "../lib/content";
import { ArrowIcon } from "./icons";

type FormState = { type: "idle" | "sending" | "success" | "error"; message: string };

export function InquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, setState] = useState<FormState>({ type: "idle", message: "" });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ type: "sending", message: "Anfrage wird übermittelt …" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht übermittelt werden.");
      }

      form.reset();
      setState({ type: "success", message: result.message || "Vielen Dank. Ihre Anfrage wurde übermittelt." });
    } catch (error) {
      setState({
        type: "error",
        message: error instanceof Error ? error.message : "Die Anfrage konnte nicht übermittelt werden.",
      });
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>Kommune / Organisation *</span>
          <input name="organization" autoComplete="organization" required maxLength={120} placeholder="z. B. Gemeinde Musterstadt" />
        </label>
        <label>
          <span>Ort / Einsatzgebiet *</span>
          <input name="municipality" autoComplete="address-level2" required maxLength={120} placeholder="Ort oder Landkreis" />
        </label>
        <label>
          <span>Vor- und Nachname *</span>
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          <span>Dienstliche E-Mail *</span>
          <input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="name@kommune.de" />
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
        <label>
          <span>Interessante Leistung</span>
          <select name="service" defaultValue={defaultService}>
            <option value="">Noch offen / andere Routine</option>
            {services.map((service) => <option value={service.slug} key={service.slug}>{service.shortTitle}</option>)}
          </select>
        </label>
      </div>

      <label className="form-full">
        <span>Aufgabe und gewünschtes Ergebnis *</span>
        <textarea name="message" required minLength={20} maxLength={4000} rows={6} placeholder="Was soll an welchen Standorten oder Vorgängen erledigt und in welcher Form übergeben werden?" />
      </label>

      <div className="form-grid">
        <label>
          <span>Ungefährer Umfang</span>
          <input name="scope" maxLength={180} placeholder="z. B. 45 Standorte oder 200 Meldungen/Monat" />
        </label>
        <label>
          <span>Gewünschter Zeitraum</span>
          <input name="timing" maxLength={120} placeholder="z. B. ab Oktober oder vierteljährlich" />
        </label>
      </div>

      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-row">
        <input name="consent" type="checkbox" value="yes" required />
        <span>Ich habe die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *</span>
      </label>

      <div className="form-submit-row">
        <button className="button" type="submit" disabled={state.type === "sending"}>
          {state.type === "sending" ? "Wird gesendet …" : "Anfrage unverbindlich senden"} <ArrowIcon />
        </button>
        <span>Pflichtfelder sind mit * gekennzeichnet.</span>
      </div>

      {state.type !== "idle" && state.type !== "sending" ? (
        <p className={`form-message form-message-${state.type}`} role="status">{state.message}</p>
      ) : null}
    </form>
  );
}
