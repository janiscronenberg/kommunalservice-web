import type { Metadata } from "next";
import { CheckIcon } from "../../components/icons";
import { InquiryForm } from "../../components/inquiry-form";
import { getService } from "../../lib/content";

export const metadata: Metadata = {
  title: "Kommunale Leistung anfragen",
  description: "Fragen Sie Außendienst-, Dokumentations- oder Backoffice-Leistungen für Ihre Kommune unverbindlich an.",
  alternates: { canonical: "/anfrage" },
};

type PageProps = { searchParams: Promise<{ leistung?: string }> };

export default async function InquiryPage({ searchParams }: PageProps) {
  const { leistung = "" } = await searchParams;
  const selected = getService(leistung);

  return (
    <main id="main-content">
      <section className="inquiry-hero">
        <div className="container inquiry-layout">
          <div className="inquiry-copy">
            <span className="eyebrow eyebrow-light">Leistung anfragen</span>
            <h1>Beschreiben Sie kurz, was erledigt werden soll.</h1>
            <p>Für eine erste Einschätzung brauchen wir keine fertige Leistungsbeschreibung. Einsatzort, grober Umfang und gewünschter Zeitraum genügen.</p>
            <ul>
              <li><CheckIcon /> konkrete Rückmeldung zur Umsetzbarkeit</li>
              <li><CheckIcon /> offene Punkte und benötigte Unterlagen</li>
              <li><CheckIcon /> Grundlage für ein passendes Angebot</li>
            </ul>
            {selected ? <div className="selected-service"><span>Ausgewählte Leistung</span><strong>{selected.shortTitle}</strong><p>{selected.typicalScope}</p></div> : null}
          </div>
          <div className="form-card">
            <div className="form-card-head"><span>Unverbindliche Anfrage</span><h2>Eckdaten übermitteln</h2><p>Je genauer Menge und Zeitraum sind, desto konkreter kann die erste Rückmeldung ausfallen.</p></div>
            <InquiryForm defaultService={selected?.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
