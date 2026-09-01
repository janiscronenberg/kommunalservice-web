import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Einsatzgebiet",
  description: "Kommunale Routinedienstleistungen für Städte, Gemeinden und kommunale Betriebe – regionaler Außendienst und deutschlandweites Backoffice.",
  alternates: { canonical: "/einsatzgebiet" },
};

export default function AreaPage() {
  return (
    <main id="main-content">
      <section className="page-hero area-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow">Einsatzgebiet</span><h1>Regional vor Ort.<br /><em>Digital bundesweit.</em></h1></div>
          <div className="page-hero-aside"><p>Außendienstrouten starten in Baden-Württemberg und wachsen in wirtschaftlich sinnvollen Clustern. Backoffice- und Datenleistungen können deutschlandweit erbracht werden.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container area-layout">
          <div className="area-map" aria-label="Stilisierte Karte des Startgebiets Baden-Württemberg">
            <svg viewBox="0 0 480 520" aria-hidden="true">
              <path d="M171 29 253 42l39 43 72 13 28 52-28 58 29 55-39 45 18 66-54 26-24 71-68 16-44-47-64 12-31-57 18-65-33-51 29-52-20-63 48-38-4-63Z" />
              <circle cx="240" cy="171" r="10" /><circle cx="240" cy="171" r="28" className="map-pulse" />
              <text x="260" y="169">Region Stuttgart</text>
            </svg>
            <div className="map-legend"><span><i className="legend-core" /> Startregion</span><span><i className="legend-cluster" /> weitere Cluster nach Auftrag</span></div>
          </div>
          <div className="area-copy">
            <span className="eyebrow">Außendienst</span>
            <h2>Routen brauchen kurze Wege.</h2>
            <p>Erfassungs- und Dokumentationsleistungen werden dort wirtschaftlich, wo mehrere Punkte oder Kommunen sinnvoll gebündelt werden können.</p>
            <ul className="check-list"><li><CheckIcon /> Startregion Stuttgart und Baden-Württemberg</li><li><CheckIcon /> Pilotgebiete nach Entfernung und Routendichte</li><li><CheckIcon /> Ausbau über feste regionale Leistungspartner möglich</li><li><CheckIcon /> keine leeren bundesweiten Verfügbarkeitsversprechen</li></ul>
            <span className="eyebrow area-second-eyebrow">Backoffice & Daten</span>
            <h2>Digitale Routinen kennen keine Kreisgrenze.</h2>
            <p>Mängelmelder-Backoffice, Checklisten- und Datenpflege können nach sicherer Prozess- und Zugriffsabstimmung deutschlandweit starten.</p>
          </div>
        </div>
      </section>

      <section className="section section-sand compact-cta-section"><div className="container compact-cta"><div><span className="eyebrow">Liegt Ihre Kommune außerhalb der Startregion?</span><h2>Fragen kostet keine Anfahrt.</h2></div><div><p>Wir prüfen offen, ob ein Vor-Ort-Pilot wirtschaftlich darstellbar ist oder ob zunächst ein digitales Modul besser passt.</p><Link className="button" href="/anfrage">Einsatzort nennen <ArrowIcon /></Link></div></div></section>
    </main>
  );
}
