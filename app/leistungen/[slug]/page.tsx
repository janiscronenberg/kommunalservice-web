import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "../../../components/article-card";
import { ArrowIcon, CheckIcon, Icon } from "../../../components/icons";
import { JsonLd } from "../../../components/json-ld";
import { getRelatedArticles, getService, services } from "../../../lib/content";
import { absoluteUrl } from "../../../lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, url: `/leistungen/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = getRelatedArticles(service);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: { "@type": "Organization", name: "KommunalRoutine", url: absoluteUrl() },
      areaServed: { "@type": "Country", name: "Deutschland" },
      audience: { "@type": "Audience", audienceType: "Städte, Gemeinden und kommunale Betriebe" },
      url: absoluteUrl(`/leistungen/${service.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: absoluteUrl("/leistungen") },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: absoluteUrl(`/leistungen/${service.slug}`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <main id="main-content">
      <JsonLd data={schema} />

      <section className="detail-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
            <Link href="/">Start</Link><span>/</span><Link href="/leistungen">Leistungen</Link><span>/</span><span>{service.shortTitle}</span>
          </nav>
          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <span className="icon-tile icon-tile-large"><Icon name={service.icon} size={30} /></span>
              <span className="eyebrow">{service.eyebrow}</span>
              <h1>{service.title}</h1>
              <p>{service.summary}</p>
              <div className="hero-actions">
                <Link className="button" href={`/anfrage?leistung=${service.slug}`}>Leistung anfragen <ArrowIcon /></Link>
                <Link className="button button-ghost" href="#leistungsumfang">Leistungsumfang</Link>
              </div>
            </div>
            <aside className="scope-card">
              <span>Typischer Auftragsumfang</span>
              <h2>{service.typicalScope}</h2>
              <dl>
                <div><dt>Beauftragung</dt><dd>einmalig, regelmäßig oder auf Abruf</dd></div>
                <div><dt>Übergabe</dt><dd>PDF, Excel/CSV oder abgestimmtes Systemformat</dd></div>
                <div><dt>Kalkulation</dt><dd>nach Gebiet, Menge, Turnus und gewünschtem Ergebnis</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section service-story-section">
        <div className="container service-story-grid">
          <div><span className="eyebrow">Ihre Ausgangslage</span><h2>Wichtige Arbeit, für die im Tagesgeschäft oft die Zeit fehlt.</h2></div>
          <div className="story-copy"><p>{service.problem}</p><p className="benefit-copy"><strong>Unsere Leistung:</strong> {service.benefit}</p></div>
        </div>
      </section>

      <section className="section section-soft" id="leistungsumfang">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Lieferumfang</span><h2>Was Sie nach der Durchführung erhalten.</h2></div>
            <div><p>Aufbau, Pflichtfelder und Dateiformat werden vor Beginn festgelegt. So passt die Übergabe zu Ihrem tatsächlichen Verwaltungsablauf.</p></div>
          </div>
          <div className="deliverable-grid">
            {service.deliverables.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-list service-fit-grid">
          <div>
            <span className="eyebrow">Typische Einsatzfälle</span>
            <h2>Wann diese Leistung besonders sinnvoll ist.</h2>
            <ul className="check-list">{service.useCases.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul>
          </div>
          <div className="request-card">
            <span className="eyebrow">Für Ihre Anfrage</span>
            <h2>Diese vier Angaben genügen zunächst.</h2>
            <ol>
              <li><span>01</span><p>Einsatzgebiet oder betroffener Datenbestand</p></li>
              <li><span>02</span><p>ungefähre Anzahl der Standorte oder Vorgänge</p></li>
              <li><span>03</span><p>gewünschter Termin oder Turnus</p></li>
              <li><span>04</span><p>gewünschtes Ergebnis- und Dateiformat</p></li>
            </ol>
            <Link className="button" href={`/anfrage?leistung=${service.slug}`}>Angaben übermitteln <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section-blue service-process-section">
        <div className="container">
          <div className="section-heading split-heading light-heading">
            <div><span className="eyebrow eyebrow-light">Durchführung</span><h2>Ein klarer Ablauf vom Auftrag bis zur Übergabe.</h2></div>
            <div><p>Sie wissen vor Beginn, welche Angaben erhoben werden, wann Ergebnisse vorliegen und wie dringende Auffälligkeiten gemeldet werden.</p></div>
          </div>
          <div className="service-process-grid">
            {service.process.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div><span className="eyebrow">Häufige Fragen</span><h2>Was Sie vor einer Anfrage wissen möchten.</h2></div>
          <div className="faq-list">
            {service.faq.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section section-soft">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="eyebrow">Passendes Kommunalwissen</span><h2>Hinweise zum praktischen Ablauf.</h2></div><div><Link className="text-link" href="/kommunalwissen">Alle Beiträge <ArrowIcon /></Link></div></div>
            <div className="article-grid">{related.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>
          </div>
        </section>
      ) : null}

      <section className="section closing-section">
        <div className="container closing-card">
          <div><span className="eyebrow">Leistung anfragen</span><h2>Sie kennen Gebiet und ungefähren Umfang?</h2><p>Dann können wir den möglichen Leistungsumfang, offene Rückfragen und eine passende Kalkulationsgrundlage konkret einordnen.</p></div>
          <div className="closing-actions"><Link className="button" href={`/anfrage?leistung=${service.slug}`}>Anfrage senden <ArrowIcon /></Link><Link className="quiet-link" href="/leistungen">Andere Leistung wählen</Link></div>
        </div>
      </section>
    </main>
  );
}
