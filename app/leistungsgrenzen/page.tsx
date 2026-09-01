import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Leistungsgrenzen",
  description: "Klare Trennung zwischen sichtbarer Erfassung, organisatorischer Unterstützung und fachlicher, technischer oder hoheitlicher Entscheidung.",
  alternates: { canonical: "/leistungsgrenzen" },
};

const comparisons = [
  { yes: "sichtbaren Zustand fotografieren", no: "Verkehrssicherheit bestätigen" },
  { yes: "Merkmale nach Vorgabe erfassen", no: "technische Ursache feststellen" },
  { yes: "mögliche Fälle vorsortieren", no: "Rechtsverstoß feststellen" },
  { yes: "Bestand und Nachweise aufnehmen", no: "Funktionsfähigkeit freigeben" },
  { yes: "Daten und Rückfragen vorbereiten", no: "hoheitliche Entscheidung treffen" },
];

export default function BoundariesPage() {
  return (
    <main id="main-content">
      <section className="page-hero boundary-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow">Leistungsgrenzen</span><h1>Gute Entlastung beginnt<br /><em>mit einem klaren Nein.</em></h1></div>
          <div className="page-hero-aside"><p>Wir übernehmen Routinen – keine Zuständigkeiten. Die Grenze zwischen dokumentieren und entscheiden ist Bestandteil jedes Angebots, Kriterienkatalogs und Ergebnisformats.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container comparison-wrap">
          <div className="comparison-head"><span>Das übernehmen wir</span><span>Das bleibt bei Fachstelle oder Fachbetrieb</span></div>
          {comparisons.map((item) => <div className="comparison-row" key={item.yes}><p><CheckIcon /> {item.yes}</p><p><span className="cross-icon">×</span>{item.no}</p></div>)}
        </div>
      </section>

      <section className="section section-green">
        <div className="container boundary-reasons">
          <div><span className="eyebrow eyebrow-light">Warum das wichtig ist</span><h2>Leistungsgrenzen sind<br /><em>kein Kleingedrucktes.</em></h2></div>
          <div className="reason-grid">
            <article><span>01</span><h3>Verantwortung bleibt eindeutig</h3><p>Fachliche und hoheitliche Entscheidungen werden von den dafür zuständigen Personen getroffen.</p></article>
            <article><span>02</span><h3>Daten bleiben neutral</h3><p>Ergebnisse beschreiben Beobachtungen, ohne Ursachen, Rechtslage oder Sicherheit vorwegzunehmen.</p></article>
            <article><span>03</span><h3>Angebote bleiben vergleichbar</h3><p>Ein klarer Lieferumfang verhindert versteckte Beratung, spontane Zusatzaufgaben und falsche Erwartungen.</p></article>
            <article><span>04</span><h3>Piloten bleiben kontrollierbar</h3><p>Unklare Fälle werden eskaliert und verbessern den Kriterienkatalog, statt stillschweigend entschieden zu werden.</p></article>
          </div>
        </div>
      </section>

      <section className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow">Einordnung</span><h2>Was „zulassungsfrei“<br /><em>nicht bedeutet.</em></h2></div><div className="boundary-explanation"><p>Es bedeutet nicht, dass jede Tätigkeit ohne Regeln, Fachwissen oder Verantwortung ausgeführt werden kann. Der konkrete Auftrag muss so beschrieben und tatsächlich gelebt werden, dass keine erlaubnis-, sachkunde- oder fachprüfungsgebundene Leistung übernommen wird.</p><p>Auch Kommunen können in Vergaben Qualifikationen, Referenzen, Datenschutzmaßnahmen oder Versicherungen verlangen. Deshalb wird jeder Pilot nach Tätigkeit, örtlichen Vorgaben und Vergabekontext einzeln abgegrenzt.</p><p className="legal-note"><strong>Hinweis:</strong> Diese Seite beschreibt die gewählte Leistungspositionierung und ist keine Rechtsberatung. Verträge und konkrete Tätigkeiten sind vor Aufnahme rechtlich und versicherungsseitig zu prüfen.</p></div></div></section>

      <section className="section closing-section"><div className="container closing-card"><div><span className="eyebrow">Sauber abgrenzen</span><h2>Sie haben eine Routine, sind aber bei der Grenze unsicher?</h2><p>Beschreiben Sie den heutigen Ablauf. Wir markieren offen, welche Teile sich als Erfassung oder Organisation eignen und welche intern bleiben müssen.</p></div><div className="closing-actions"><Link className="button" href="/anfrage">Aufgabe einordnen <ArrowIcon /></Link></div></div></section>
    </main>
  );
}
