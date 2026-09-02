import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Arbeitsweise",
  description: "So werden kommunale Außendienst-, Dokumentations- und Backoffice-Aufgaben verlässlich beauftragt, bearbeitet und übergeben.",
  alternates: { canonical: "/arbeitsweise" },
};

const phases = [
  { n: "01", title: "Bedarf aufnehmen", text: "Sie nennen Aufgabe, Gebiet oder Datenbestand, ungefähre Menge, gewünschten Zeitraum und vorhandene Unterlagen.", result: "Ergebnis: vollständige Kalkulationsgrundlage" },
  { n: "02", title: "Leistung beschreiben", text: "Wir legen fest, welche Arbeitsschritte enthalten sind, welche Angaben erhoben werden und welche Termine gelten.", result: "Ergebnis: eindeutiger Leistungsumfang" },
  { n: "03", title: "Übergabe definieren", text: "Pflichtfelder, Fotos, Statuswerte, Dateiformat, Rückfragen und Sofortmeldungen werden verbindlich abgestimmt.", result: "Ergebnis: direkt nutzbares Übergabeformat" },
  { n: "04", title: "Angebot erstellen", text: "Sie erhalten ein nachvollziehbares Angebot auf Grundlage von Gebiet, Menge, Turnus und gewünschter Bearbeitungstiefe.", result: "Ergebnis: klare Kosten- und Terminbasis" },
  { n: "05", title: "Auftrag durchführen", text: "Die vereinbarte Leistung wird termingerecht ausgeführt. Ausnahmen und Rückfragen bleiben nachvollziehbar dokumentiert.", result: "Ergebnis: vollständig bearbeiteter Auftrag" },
  { n: "06", title: "Ergebnisse übergeben", text: "Ihre Ansprechperson erhält die sortierte Dokumentation und – bei wiederkehrenden Aufgaben – den vereinbarten Folgetermin.", result: "Ergebnis: verlässlicher Serviceprozess" },
];

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow">Arbeitsweise</span><h1>Klar beauftragt.<br />Verlässlich erledigt.<br /><em>Nutzbar übergeben.</em></h1></div>
          <div className="page-hero-aside"><p>Ein guter Dienstleistungsauftrag beantwortet vor Beginn vier Fragen: Was wird gemacht, bis wann, in welchem Format und für welchen Preis?</p></div>
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

      <section className="section section-blue">
        <div className="container principle-grid">
          <div><span className="eyebrow eyebrow-light">Drei Arbeitsprinzipien</span><h2>Verlässlichkeit entsteht<br /><em>durch klare Abläufe.</em></h2></div>
          <div className="principle-cards">
            <article><span>01</span><h3>Einheitliche Bearbeitung</h3><p>Alle Standorte und Vorgänge werden nach denselben vereinbarten Merkmalen bearbeitet.</p></article>
            <article><span>02</span><h3>Nachvollziehbare Ergebnisse</h3><p>Fotos, Zeiten, Statusangaben und Änderungen bleiben eindeutig einem Vorgang zugeordnet.</p></article>
            <article><span>03</span><h3>Fester Meldeweg</h3><p>Für Rückfragen, Ausnahmen und dringende Auffälligkeiten stehen die Wege vor Beginn fest.</p></article>
          </div>
        </div>
      </section>

      <section className="section closing-section"><div className="container closing-card"><div><span className="eyebrow">Angebotsgrundlage schaffen</span><h2>Welche Aufgabe dürfen wir für Ihre Kommune kalkulieren?</h2><p>Einsatzort, ungefährer Umfang, gewünschter Zeitpunkt und Ergebnisformat genügen für die erste Einordnung.</p></div><div className="closing-actions"><Link className="button" href="/anfrage">Leistung anfragen <ArrowIcon /></Link></div></div></section>
    </main>
  );
}
