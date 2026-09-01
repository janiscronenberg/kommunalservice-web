import type { Metadata } from "next";
import { CheckIcon } from "../../components/icons";
import { InquiryForm } from "../../components/inquiry-form";
import { getService } from "../../lib/content";

export const metadata: Metadata = {
  title: "Pilotprojekt anfragen",
  description: "Beschreiben Sie eine kommunale Routine und erhalten Sie eine klare Einordnung für einen abgegrenzten Pilot.",
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
            <span className="eyebrow eyebrow-light">Unverbindlicher Pilot</span>
            <h1>Welche Routine kostet Ihr Team gerade unnötig Zeit?</h1>
            <p>Ein paar Eckdaten genügen. Sie erhalten keine Standardpräsentation, sondern eine ehrliche erste Einordnung: geeignet, anders abgrenzen oder bewusst intern belassen.</p>
            <ul>
              <li><CheckIcon /> klare Rückmeldung zum Leistungsumfang</li>
              <li><CheckIcon /> Vorschlag für einen überschaubaren Piloten</li>
              <li><CheckIcon /> keine Verpflichtung und kein Systemwechsel</li>
            </ul>
            {selected ? <div className="selected-service"><span>Ausgewählte Leistung</span><strong>{selected.shortTitle}</strong><p>{selected.pilot}</p></div> : null}
          </div>
          <div className="form-card">
            <div className="form-card-head"><span>Projektanfrage</span><h2>Routine kurz beschreiben</h2><p>Wir melden uns nach Sichtung mit den sinnvollsten nächsten Fragen.</p></div>
            <InquiryForm defaultService={selected?.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
