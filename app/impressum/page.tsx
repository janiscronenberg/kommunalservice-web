import type { Metadata } from "next";
import { LegalMissing } from "../../components/legal-missing";
import { legalConfig } from "../../lib/site";

export const metadata: Metadata = { title: "Impressum", alternates: { canonical: "/impressum" } };

export default function ImprintPage() {
  const configured = Boolean(legalConfig.operator && legalConfig.street && legalConfig.city && legalConfig.contactEmail);
  return (
    <main id="main-content" className="legal-page">
      <div className="container legal-wrap">
        <span className="eyebrow">Rechtliches</span>
        <h1>Impressum</h1>
        {!configured ? <LegalMissing /> : null}
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          {configured ? <address><strong>{legalConfig.operator}{legalConfig.legalForm ? ` ${legalConfig.legalForm}` : ""}</strong><br />{legalConfig.street}<br />{legalConfig.city}</address> : <p>[Betreibername und Rechtsform]<br />[Straße und Hausnummer]<br />[PLZ und Ort]</p>}
        </section>
        <section>
          <h2>Vertreten durch</h2>
          <p>{legalConfig.representedBy || "[Vertretungsberechtigte Person]"}</p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>Telefon: {legalConfig.phone || "[Telefonnummer]"}<br />E-Mail: {legalConfig.contactEmail || "[E-Mail-Adresse]"}</p>
        </section>
        {legalConfig.register ? <section><h2>Registereintrag</h2><p>{legalConfig.register}</p></section> : null}
        {legalConfig.vatId ? <section><h2>Umsatzsteuer-ID</h2><p>{legalConfig.vatId}</p></section> : null}
        <section>
          <h2>Redaktionell verantwortlich</h2>
          <p>{legalConfig.representedBy || "[Name und Anschrift der verantwortlichen Person]"}</p>
        </section>
        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Der konkrete Hinweis zur Bereitschaft oder Verpflichtung zur Teilnahme an Streitbeilegungsverfahren ist vor Veröffentlichung passend zum Betreiber zu ergänzen und rechtlich zu prüfen.</p>
        </section>
        <p className="legal-review-note">Die Anbieterkennzeichnung ist vor dem Livegang durch den tatsächlichen Betreiber zu vervollständigen und rechtlich zu prüfen.</p>
      </div>
    </main>
  );
}
