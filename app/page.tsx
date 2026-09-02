import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "../components/article-card";
import { ArrowIcon, CheckIcon, Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { ServiceCard } from "../components/service-card";
import { knowledgeArticles, services, siteConfig } from "../lib/content";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Kommunale Dienstleistungen, die zuverlässig erledigt werden",
  description:
    "KommunalRoutine übernimmt wiederkehrende Außendienst-, Dokumentations- und Backoffice-Aufgaben für Städte, Gemeinden und kommunale Betriebe.",
  alternates: { canonical: "/" },
};

const reasons = [
  { icon: "route" as const, title: "Kapazität, wenn sie gebraucht wird", text: "Für saisonale Spitzen, verteilte Kleinstaufgaben oder wiederkehrende Routen, die intern zu viel Zeit binden." },
  { icon: "camera" as const, title: "Einheitlich dokumentiert", text: "Jeder Vorgang folgt denselben Feldern, Fotovorgaben und Statuswerten. Damit Ergebnisse direkt weiterverarbeitet werden können." },
  { icon: "database" as const, title: "Passend zu Ihren Abläufen", text: "Übergabe als PDF, Excel/CSV oder in einer abgestimmten Struktur – ohne unnötigen Systemwechsel." },
  { icon: "inbox" as const, title: "Ein Auftrag, ein Ansprechpartner", text: "Mehrere kleine Aufgaben lassen sich bündeln. Das reduziert Abstimmung, Einzelwege und verstreute Dokumentation." },
];

const workflow = [
  { number: "01", title: "Sie nennen Aufgabe und Umfang", text: "Gebiet, Anzahl der Standorte oder Vorgänge, gewünschter Termin und vorhandene Unterlagen genügen für den Einstieg." },
  { number: "02", title: "Sie erhalten ein klares Angebot", text: "Mit beschriebenem Leistungsumfang, Übergabeformat, Turnus, Zuständigkeiten und nachvollziehbarer Kalkulation." },
  { number: "03", title: "Wir erledigen und übergeben", text: "Zum vereinbarten Termin erhalten Sie eine vollständige, sortierte und unmittelbar nutzbare Ergebnisdokumentation." },
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
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Dienstleistungen für Städte und Gemeinden</span>
            <h1>Mehr erledigen.<br /><em>Ohne mehr Personal.</em></h1>
            <p className="hero-lead">
              KommunalRoutine übernimmt wiederkehrende Außendienst-, Dokumentations- und Backoffice-Aufgaben – verbindlich terminiert, einheitlich bearbeitet und so übergeben, dass Ihre Verwaltung direkt weiterarbeiten kann.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/anfrage">Leistung anfragen <ArrowIcon /></Link>
              <Link className="button button-ghost" href="#leistungen">Leistungen ansehen</Link>
            </div>
            <ul className="hero-proof" aria-label="Leistungsmerkmale">
              <li><CheckIcon /> Einmalig oder im festen Turnus</li>
              <li><CheckIcon /> Klarer Leistungsumfang</li>
              <li><CheckIcon /> Nutzbare Ergebnisübergabe</li>
            </ul>
          </div>

          <div className="result-preview" aria-label="Beispiel einer kommunalen Ergebnisübergabe">
            <div className="result-preview__top">
              <div><span>Beispiel · Ergebnisübergabe</span><strong>Dokumentationsrunde Nord</strong></div>
              <span className="result-status"><i /> vollständig</span>
            </div>
            <div className="result-preview__stats">
              <div><strong>37</strong><span>Standorte</span></div>
              <div><strong>6</strong><span>Auffälligkeiten</span></div>
              <div><strong>4</strong><span>priorisiert</span></div>
            </div>
            <div className="result-preview__record">
              <div className="record-photo"><Icon name="camera" size={28} /></div>
              <div className="record-copy"><span>Standort 18 · 09:42 Uhr</span><strong>Straßeneinlauf teilweise bedeckt</strong><small>Foto · GPS · Status · Notiz</small></div>
              <span className="record-priority">Priorität 2</span>
            </div>
            <div className="result-preview__files">
              <span><Icon name="database" size={18} /> Ergebnisliste.xlsx</span>
              <span><Icon name="camera" size={18} /> Fotodokumentation.pdf</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Einsatz und Übergabe">
        <div className="container trust-grid">
          <div><span>VOR ORT</span><p><strong>Region Stuttgart & Baden-Württemberg</strong><br />weitere Gebiete nach Vereinbarung</p></div>
          <div><span>DIGITAL</span><p><strong>Backoffice deutschlandweit</strong><br />in vorhandenen Systemen und Formaten</p></div>
          <div><span>ERGEBNIS</span><p><strong>PDF, Excel/CSV oder Systemübergabe</strong><br />vor Auftrag eindeutig abgestimmt</p></div>
        </div>
      </section>

      <section className="section" id="leistungen">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Leistungen</span><h2>Konkrete Aufgaben.<br /><em>Verlässlich ausgeführt.</em></h2></div>
            <div><p>Vom einzelnen Erfassungstermin bis zum regelmäßigen Service: Sie bestimmen Gebiet, Umfang, Turnus und gewünschtes Ergebnis.</p><Link className="text-link" href="/leistungen">Alle Leistungen ansehen <ArrowIcon /></Link></div>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
          </div>
          <div className="section-bottom-link"><Link className="button button-outline" href="/leistungen">Vollständigen Leistungskatalog öffnen <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container reasons-layout">
          <div className="reasons-intro">
            <span className="eyebrow eyebrow-light">Der Unterschied im Alltag</span>
            <h2>Die Aufgabe ist erst erledigt, wenn das Ergebnis intern nutzbar ist.</h2>
            <p>Deshalb beginnt jeder Auftrag mit der späteren Weiterverwendung: Welche Angaben braucht die Fachabteilung, wie werden Auffälligkeiten sortiert und wann muss sofort gemeldet werden?</p>
            <Link className="button button-light" href="/arbeitsweise">So arbeiten wir <ArrowIcon /></Link>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => <article key={reason.title}><span className="reason-icon"><Icon name={reason.icon} /></span><h3>{reason.title}</h3><p>{reason.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="eyebrow">Von der Anfrage zur Durchführung</span>
            <h2>Einfach beauftragbar.<br /><em>Sauber nachvollziehbar.</em></h2>
            <p>Keine Produktvorführung und kein Beratungsprojekt. Entscheidend sind ein klarer Auftrag, ein brauchbares Ergebnis und verlässliche Termine.</p>
          </div>
          <div className="process-grid process-grid-three">
            {workflow.map((step) => <article className="process-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
          <div className="process-cta"><p><strong>Für eine erste Einschätzung genügen:</strong> Aufgabe, Einsatzort, ungefährer Umfang und gewünschter Zeitpunkt.</p><Link className="button" href="/anfrage">Aufgabe beschreiben <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container use-case-layout">
          <div><span className="eyebrow">Wann externe Unterstützung sinnvoll ist</span><h2>Wenn wichtige Routinen regelmäßig gegen dringendere Aufgaben verlieren.</h2></div>
          <div className="use-case-list">
            <article><span>01</span><div><h3>Saisonale Arbeitsspitzen</h3><p>Überwuchs, Starkregen, Aushänge oder Bestandsaufnahmen fallen in kurzer Zeit gebündelt an.</p></div></article>
            <article><span>02</span><div><h3>Viele kleine, verteilte Aufgaben</h3><p>Einzelne Vorgänge sind zu klein für eigene Ressourcen, ergeben zusammen aber einen planbaren Auftrag.</p></div></article>
            <article><span>03</span><div><h3>Rückstände und Vertretungsbedarf</h3><p>Ein klar abgrenzbarer Bestand soll strukturiert abgearbeitet werden, ohne dauerhafte Personalbindung.</p></div></article>
            <article><span>04</span><div><h3>Einheitliche Datengrundlage</h3><p>Standorte, Fotos und Statusangaben sollen erstmals oder erneut in einer verwertbaren Struktur vorliegen.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section knowledge-teaser">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Kommunalwissen</span><h2>Praxiswissen für<br /><em>kommunale Abläufe.</em></h2></div>
            <div><p>Checklisten, Entscheidungshilfen und konkrete Hinweise zur Organisation wiederkehrender Außendienst- und Backoffice-Aufgaben.</p><Link className="text-link" href="/kommunalwissen">Alle Beiträge <ArrowIcon /></Link></div>
          </div>
          <div className="article-grid home-article-grid">
            {knowledgeArticles.slice(0, 3).map((article, index) => <ArticleCard article={article} featured={index === 0} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section closing-section">
        <div className="container closing-card">
          <div><span className="eyebrow">Konkreten Bedarf klären</span><h2>Welche Aufgabe sollen wir Ihrer Verwaltung abnehmen?</h2><p>Nennen Sie uns Einsatzort, groben Umfang und gewünschten Zeitraum. Sie erhalten eine klare Rückmeldung zum möglichen Leistungsumfang und den nächsten Schritten.</p></div>
          <div className="closing-actions"><Link className="button" href="/anfrage">Leistung anfragen <ArrowIcon /></Link><span>Unverbindliche Erstanfrage</span></div>
        </div>
      </section>
    </main>
  );
}
