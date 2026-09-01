import type { Metadata } from "next";
import { LegalMissing } from "../../components/legal-missing";
import { legalConfig } from "../../lib/site";

export const metadata: Metadata = { title: "Datenschutzerklärung", alternates: { canonical: "/datenschutz" } };

export default function PrivacyPage() {
  const configured = Boolean(legalConfig.operator && legalConfig.street && legalConfig.city && legalConfig.contactEmail && legalConfig.hostingProvider);
  return (
    <main id="main-content" className="legal-page">
      <div className="container legal-wrap">
        <span className="eyebrow">Rechtliches</span>
        <h1>Datenschutzerklärung</h1>
        {!configured ? <LegalMissing /> : null}
        <section><h2>1. Verantwortlicher</h2>{configured ? <p>{legalConfig.operator}{legalConfig.legalForm ? ` ${legalConfig.legalForm}` : ""}<br />{legalConfig.street}<br />{legalConfig.city}<br />E-Mail: {legalConfig.contactEmail}</p> : <p>[Betreiber, ladungsfähige Anschrift und Kontakt]</p>}</section>
        <section><h2>2. Hosting und Server-Protokolle</h2><p>Beim Aufruf dieser Website verarbeitet der Hostinganbieter technisch erforderliche Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, angeforderte Ressource, Referrer, Browser- und Systeminformationen. Die Verarbeitung dient dem sicheren und stabilen Betrieb der Website.</p><p>Hostinganbieter: {legalConfig.hostingProvider || "[Hostinganbieter, Sitz und Datenschutzinformationen ergänzen]"}</p><p>Rechtsgrundlage und konkrete Speicherdauer sind vor Veröffentlichung anhand des tatsächlich eingesetzten Hostings zu ergänzen.</p></section>
        <section><h2>3. Anfrageformular</h2><p>Wenn Sie das Anfrageformular verwenden, verarbeiten wir die von Ihnen eingegebenen Angaben zur Bearbeitung und Beantwortung Ihrer Anfrage. Pflichtangaben sind Organisation, Einsatzort, Name, E-Mail-Adresse, Beschreibung und Einwilligungsbestätigung. Telefon und ausgewählte Leistung sind freiwillig.</p><p>Die Daten werden über einen serverseitigen Endpunkt an die konfigurierte dienstliche Empfängeradresse gesendet. Für den Versand ist technisch der Dienst Resend vorbereitet. Betreiber, Vertragsgrundlage, Datenstandort, Speicherdauer und gegebenenfalls Auftragsverarbeitung sind vor Aktivierung abschließend zu prüfen und hier konkret zu ergänzen.</p></section>
        <section><h2>4. Schutz vor automatisierten Anfragen</h2><p>Das Formular verwendet ein unsichtbares Honeypot-Feld, eine Herkunftsprüfung und eine einfache serverseitige Mengenbegrenzung. Dabei können zur Abwehr missbräuchlicher Anfragen kurzfristig IP-bezogene Zugriffsdaten verarbeitet werden.</p></section>
        <section><h2>5. Cookies und Reichweitenmessung</h2><p>In der ausgelieferten Grundkonfiguration setzt die Website keine eigenen Marketing- oder Analyse-Cookies ein und lädt keine externen Schriftarten. Wird später eine Reichweitenmessung, ein Karten- oder Medienanbieter ergänzt, muss dieser Abschnitt vor Aktivierung angepasst und gegebenenfalls eine Einwilligungslösung eingerichtet werden.</p></section>
        <section><h2>6. Externe Links</h2><p>Einzelne Wissensbeiträge können auf offizielle Informationsangebote verlinken. Erst beim Anklicken wird die externe Website aufgerufen; für deren Datenverarbeitung ist der jeweilige Betreiber verantwortlich.</p></section>
        <section><h2>7. Ihre Rechte</h2><p>Betroffene Personen können – abhängig von den gesetzlichen Voraussetzungen – Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch verlangen sowie erteilte Einwilligungen für die Zukunft widerrufen. Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.</p></section>
        <section><h2>8. Speicherdauer</h2><p>Anfragedaten werden nur so lange gespeichert, wie dies zur Bearbeitung, Anbahnung einer Zusammenarbeit und Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist. Konkrete Fristen sind vor Veröffentlichung anhand des tatsächlichen Betriebsprozesses zu ergänzen.</p></section>
        <section><h2>9. Stand und Änderungen</h2><p>Entwicklungsstand: 1. September 2026. Die Erklärung ist vor dem Livegang an Betreiber, Hosting, E-Mail-Versand und alle tatsächlich aktivierten Dienste anzupassen.</p></section>
        <p className="legal-review-note">Diese technische Vorlage ersetzt keine datenschutzrechtliche Prüfung des tatsächlichen Website- und Geschäftsprozesses.</p>
      </div>
    </main>
  );
}
