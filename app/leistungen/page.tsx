import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";
import { ServiceCard } from "../../components/service-card";
import { services } from "../../lib/content";

export const metadata: Metadata = {
  title: "Leistungen für Städte und Gemeinden",
  description:
    "Zehn klar abgegrenzte kommunale Routinedienstleistungen: Außendienst, Dokumentation, Backoffice und Bestandsdaten.",
  alternates: { canonical: "/leistungen" },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-services">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Leistungskatalog</span>
            <h1>Entlastung, die man<br /><em>konkret beauftragen kann.</em></h1>
          </div>
          <div className="page-hero-aside">
            <p>Keine diffuse „Unterstützung nach Bedarf“. Jedes Modul hat einen klaren Eingang, eine nachvollziehbare Bearbeitung und ein verwertbares Ergebnis.</p>
            <ul>
              <li><CheckIcon /> individuell kombinierbar</li>
              <li><CheckIcon /> als Pilot testbar</li>
              <li><CheckIcon /> ohne Systemwechsel startbar</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalog-intro">
            <span>10 Leistungsmodule</span>
            <p>Außendienst und Backoffice lassen sich einzeln testen oder zu einer kommunalen Routine kombinieren.</p>
          </div>
          <div className="service-grid catalog-grid">
            {services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section section-sand compact-cta-section">
        <div className="container compact-cta">
          <div><span className="eyebrow">Keine passende Schublade?</span><h2>Die beste Routine beginnt oft mit einer Aufgabe, die intern niemand benannt hat.</h2></div>
          <div><p>Beschreiben Sie uns den heutigen Ablauf. Wir prüfen, ob er sich klar, zulassungsfrei und wirtschaftlich als Pilot abgrenzen lässt.</p><Link className="button" href="/anfrage">Aufgabe beschreiben <ArrowIcon /></Link></div>
        </div>
      </section>
    </main>
  );
}
