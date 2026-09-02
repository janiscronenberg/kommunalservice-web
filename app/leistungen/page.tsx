import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../../components/icons";
import { ServiceCard } from "../../components/service-card";
import { services } from "../../lib/content";

export const metadata: Metadata = {
  title: "Leistungen für Städte und Gemeinden",
  description:
    "Zehn konkrete kommunale Dienstleistungen für Außendienst, Dokumentation, Backoffice und Bestandsdaten.",
  alternates: { canonical: "/leistungen" },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-services">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Leistungskatalog</span>
            <h1>Aufgaben, die wir<br /><em>für Sie erledigen.</em></h1>
          </div>
          <div className="page-hero-aside">
            <p>Jede Leistung wird nach Gebiet, Menge, Termin und gewünschter Übergabe angeboten – einmalig, regelmäßig oder auf Abruf.</p>
            <ul>
              <li><CheckIcon /> Leistungen kombinierbar</li>
              <li><CheckIcon /> transparenter Lieferumfang</li>
              <li><CheckIcon /> vorhandene Formate nutzbar</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalog-intro">
            <span>10 Leistungsmodule</span>
            <p>Außendienst und Backoffice lassen sich einzeln beauftragen oder zu einem wiederkehrenden kommunalen Service kombinieren.</p>
          </div>
          <div className="service-grid catalog-grid">
            {services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section section-sand compact-cta-section">
        <div className="container compact-cta">
          <div><span className="eyebrow">Ihre Aufgabe fehlt?</span><h2>Auch andere klar beschreibbare Routinearbeiten können übernommen werden.</h2></div>
          <div><p>Nennen Sie uns den heutigen Ablauf, den groben Umfang und das gewünschte Ergebnis. Wir geben Ihnen eine konkrete Rückmeldung zur Umsetzbarkeit.</p><Link className="button" href="/anfrage">Aufgabe anfragen <ArrowIcon /></Link></div>
        </div>
      </section>
    </main>
  );
}
