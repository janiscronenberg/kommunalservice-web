import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Arbeitsweise",
  description: "So wird aus einer kommunalen Routine ein klar abgegrenzter, messbarer Pilot und ein verlässlicher Leistungsprozess.",
  alternates: { canonical: "/arbeitsweise" },
};

const phases = [
  { n: "01", title: "Routine verstehen", text: "Nicht das Wunschprodukt, sondern der heutige Ablauf ist unser Ausgangspunkt: Wer macht was, wann, womit und für welche interne Weiterverwendung?", result: "Ergebnis: Prozessskizze und klare Problemdefinition" },
  { n: "02", title: "Grenze festlegen", text: "Wir trennen beobachtbare oder organisatorische Schritte von fachlicher, technischer und hoheitlicher Entscheidung.", result: "Ergebnis: Leistungs- und Ausschlusskatalog" },
  { n: "03", title: "Pilot bemessen", text: "Ein Ortsteil, eine Route, eine Objektart oder ein befristeter Backoffice-Zeitraum wird vollständig durchgespielt.", result: "Ergebnis: transparentes Pilotangebot" },
  { n: "04", title: "Daten abstimmen", text: "Pflichtfelder, Fotos, Statuswerte, Rückfragen und Sofortmeldungen werden so definiert, dass die Fachstelle direkt weiterarbeiten kann.", result: "Ergebnis: Kriterien- und Übergabematrix" },
  { n: "05", title: "Real testen", text: "Der Pilot läuft unter echten Bedingungen. Ausnahmen und unklare Fälle werden dokumentiert, nicht improvisiert entschieden.", result: "Ergebnis: vollständige Pilotauswertung" },
  { n: "06", title: "Bewusst skalieren", text: "Nur bei nachweisbarer Entlastung folgen weitere Gebiete, Module oder ein fester Turnus.", result: "Ergebnis: belastbarer Routineauftrag" },
];

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow">Arbeitsweise</span><h1>Erst verstehen.<br />Dann vereinfachen.<br /><em>Danach erst skalieren.</em></h1></div>
          <div className="page-hero-aside"><p>Ein sauberer Routineauftrag braucht weniger Folien und mehr Klarheit: Was wird beobachtet, was wird geliefert, wer entscheidet – und was passiert bei Ausnahmen?</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container phase-list">
          {phases.map((phase) => (
            <article key={phase.n}>
              <span className="phase-number">{phase.n}</span>
              <div><h2>{phase.title}</h2><p>{phase.text}</p><strong><CheckIcon /> {phase.result}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-green">
        <div className="container principle-grid">
          <div><span className="eyebrow eyebrow-light">Drei Arbeitsprinzipien</span><h2>Pragmatisch heißt nicht<br /><em>unkontrolliert.</em></h2></div>
          <div className="principle-cards">
            <article><span>01</span><h3>Ausnahmen bleiben sichtbar</h3><p>Unklare Fälle werden nicht passend gemacht, sondern getrennt und mit Rückfrage übergeben.</p></article>
            <article><span>02</span><h3>Daten gehören der Kommune</h3><p>Formate, Zugriffe, Rückgabe und Löschung werden vor der Bearbeitung vereinbart.</p></article>
            <article><span>03</span><h3>Kein Wachstum um jeden Preis</h3><p>Ein Modul wird nur erweitert, wenn der reale Pilot die versprochene Entlastung zeigt.</p></article>
          </div>
        </div>
      </section>

      <section className="section closing-section"><div className="container closing-card"><div><span className="eyebrow">Pilot starten</span><h2>Welche Routine sollen wir gemeinsam in sechs klare Schritte bringen?</h2><p>Eine kurze Prozessbeschreibung genügt für die erste Einordnung.</p></div><div className="closing-actions"><Link className="button" href="/anfrage">Aufgabe beschreiben <ArrowIcon /></Link></div></div></section>
    </main>
  );
}
