import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "../components/article-card";
import { ArrowIcon, CheckIcon, Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { ServiceCard } from "../components/service-card";
import { knowledgeArticles, services, siteConfig } from "../lib/content";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Kommunale Routinedienstleistungen",
  description:
    "Erfassung, Dokumentation und Backoffice für Städte und Gemeinden: klar abgegrenzte Routinen, Pilotprojekte und verwertbare Ergebnisse.",
  alternates: { canonical: "/" },
};

const workflow = [
  { number: "01", title: "Aufgabe abgrenzen", text: "Sie nennen die Routine, das Gebiet und das Ergebnis, das Ihrer Fachstelle wirklich weiterhilft." },
  { number: "02", title: "Kriterien festlegen", text: "Wir übersetzen den Ablauf in beobachtbare Merkmale, klare Meldewege und ein nutzbares Datenformat." },
  { number: "03", title: "Pilot durchführen", text: "Eine kleine Route oder ein begrenzter Backoffice-Zeitraum zeigt den realen Aufwand und die Datenqualität." },
  { number: "04", title: "Routine daraus machen", text: "Nur wenn der Pilot entlastet, entsteht ein wiederkehrender Turnus mit transparentem Leistungsumfang." },
];

export default function HomePage() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl(),
    description: siteConfig.description,
    inLanguage: "de-DE",
  };

  return (
    <main id="main-content">
      <JsonLd data={webSiteSchema} />

      <section className="hero-home">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Externe Routineentlastung für Kommunen</span>
            <h1>Routine raus.<br /><em>Verwaltung frei.</em></h1>
            <p className="hero-lead">
              Wir übernehmen klar abgegrenzte Erfassungs-, Dokumentations- und Backoffice-Aufgaben für Städte und Gemeinden. Nach Ihrem Kriterienkatalog. Ohne Eingriff in fachliche oder hoheitliche Entscheidungen.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/anfrage">Pilotprojekt anfragen <ArrowIcon /></Link>
              <Link className="button button-ghost" href="/leistungen">Leistungen entdecken</Link>
            </div>
            <ul className="hero-proof" aria-label="Leistungsmerkmale">
              <li><CheckIcon /> Foto & Standort</li>
              <li><CheckIcon /> Verwertbare Daten</li>
              <li><CheckIcon /> Klare Grenze</li>
            </ul>
          </div>

          <div className="route-board" aria-label="Beispiel einer dokumentierten kommunalen Route">
            <div className="route-board-head">
              <div><span className="route-kicker">Gemeinderunde · Süd</span><strong>12 Punkte dokumentiert</strong></div>
              <span className="live-pill"><i /> abgeschlossen</span>
            </div>
            <div className="route-map" aria-hidden="true">
              <svg viewBox="0 0 600 260" preserveAspectRatio="none">
                <path className="map-street" d="M-20 210C80 175 80 95 180 110S320 220 410 168 500 48 630 66" />
                <path className="map-street map-street-thin" d="M100-20c30 75 10 132-35 188M310-20c-15 70 0 125 70 190M520 280c-45-80-30-140 0-205" />
                <path className="map-route" d="M42 198c78-26 72-95 151-82s117 94 197 54 90-92 166-102" />
              </svg>
              <span className="map-point point-one"><b>01</b></span>
              <span className="map-point point-two"><b>02</b></span>
              <span className="map-point point-three point-alert"><b>03</b></span>
              <span className="map-point point-four"><b>04</b></span>
              <div className="map-note">
                <span className="icon-tile icon-tile-small"><Icon name="leaf" size={18} /></span>
                <div><small>Punkt 03</small><strong>Überwuchs sichtbar</strong></div>
                <span className="status-dot">melden</span>
              </div>
            </div>
            <div className="route-summary">
              <div><span>9</span><small>ohne Befund</small></div>
              <div><span>2</span><small>dokumentiert</small></div>
              <div className="summary-alert"><span>1</span><small>Auffälligkeit</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Grundsätze der Zusammenarbeit">
        <div className="container trust-grid">
          <div><span>01</span><p><strong>Kein neues Großprojekt</strong><br />Klein starten, real prüfen.</p></div>
          <div><span>02</span><p><strong>Keine Blackbox</strong><br />Kriterien und Daten sind sichtbar.</p></div>
          <div><span>03</span><p><strong>Keine Kompetenzverschiebung</strong><br />Ihre Fachstelle entscheidet.</p></div>
        </div>
      </section>

      <section className="section" id="leistungen">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Leistungsmodule</span><h2>Kleine Aufgaben.<br /><em>Sauber erledigt.</em></h2></div>
            <div><p>Jedes Modul ist so zugeschnitten, dass die Kommune fachliche und hoheitliche Entscheidungen behält – und trotzdem spürbar operative Zeit gewinnt.</p><Link className="text-link" href="/leistungen">Alle 10 Leistungen <ArrowIcon /></Link></div>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
          </div>
          <div className="section-bottom-link">
            <Link className="button button-outline" href="/leistungen">Vollständigen Leistungskatalog ansehen <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container boundary-layout">
          <div className="boundary-copy">
            <span className="eyebrow eyebrow-light">Die wichtigste Leistungszusage</span>
            <h2>Wir dokumentieren.<br /><em>Ihre Kommune entscheidet.</em></h2>
            <p>Klare Grenzen machen externe Routinearbeit verlässlich. Deshalb schreiben wir nicht nur auf, was wir tun – sondern ebenso deutlich, was bei Ihren Fachstellen und Fachpartnern bleibt.</p>
            <Link className="button button-light" href="/leistungsgrenzen">Leistungsgrenzen ansehen <ArrowIcon /></Link>
          </div>
          <div className="boundary-panel">
            {[
              ["01", "Keine hoheitlichen Entscheidungen", "Keine Verfügungen, Bußgelder oder behördlichen Bewertungen."],
              ["02", "Keine Sachverständigenprüfung", "Sichtbare Merkmale nach Ihrem bestätigten Kriterienkatalog."],
              ["03", "Keine technische Abnahme", "Fachliche Freigaben bleiben bei qualifizierten Verantwortlichen."],
              ["04", "Keine Bewachung", "Dokumentation und organisatorische Unterstützung, kein Sicherheitsdienst."],
            ].map(([number, title, text]) => (
              <article className="boundary-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="eyebrow">Pilot statt Großprojekt</span>
            <h2>In vier Schritten zur<br /><em>funktionierenden Routine.</em></h2>
            <p>Keine langwierige Systemeinführung. Erst ein begrenzter realer Ablauf, dann eine belastbare Entscheidung.</p>
          </div>
          <div className="process-grid">
            {workflow.map((step) => <article className="process-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
          <div className="process-note"><span>Ergebnis</span><p>Ein Auftrag, den beide Seiten verstehen – mit klarer Leistung, klarer Übergabe und klarer Verantwortung.</p></div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Kommunalwissen</span><h2>Praxiswissen für<br /><em>klare Entscheidungen.</em></h2></div>
            <div><p>Konkrete Leitfäden zu wiederkehrenden Aufgaben, Leistungsgrenzen und pragmatischer externer Unterstützung.</p><Link className="text-link" href="/kommunalwissen">Alle Beiträge <ArrowIcon /></Link></div>
          </div>
          <div className="article-grid home-article-grid">
            {knowledgeArticles.slice(0, 3).map((article, index) => <ArticleCard article={article} featured={index === 0} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section closing-section">
        <div className="container closing-card">
          <div><span className="eyebrow">Der einfachste nächste Schritt</span><h2>Zeigen Sie uns eine Routine, die liegen bleibt.</h2><p>Sie beschreiben Aufgabe, Gebiet und bisherigen Ablauf. Wir sagen klar, ob daraus ein sinnvoller Pilot werden kann – und wo die Leistungsgrenze liegen muss.</p></div>
          <div className="closing-actions"><Link className="button" href="/anfrage">Pilot beschreiben <ArrowIcon /></Link><span>Unverbindlich · Ohne Systemwechsel</span></div>
        </div>
      </section>
    </main>
  );
}
