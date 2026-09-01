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
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `/leistungen/${service.slug}`,
    },
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
            <div>
              <span className="icon-tile icon-tile-large"><Icon name={service.icon} size={30} /></span>
              <span className="eyebrow">{service.eyebrow}</span>
              <h1>{service.title}</h1>
              <p>{service.summary}</p>
              <div className="hero-actions">
                <Link className="button" href={`/anfrage?leistung=${service.slug}`}>Pilot anfragen <ArrowIcon /></Link>
                <Link className="button button-ghost" href="#lieferumfang">Lieferumfang ansehen</Link>
              </div>
            </div>
            <aside className="pilot-card">
              <span>Geeigneter Pilot</span>
              <h2>Klein beginnen, Aufwand real messen.</h2>
              <p>{service.pilot}</p>
              <ul>
                <li><CheckIcon /> klar begrenzter Umfang</li>
                <li><CheckIcon /> vollständige Ergebnisübergabe</li>
                <li><CheckIcon /> Entscheidung erst nach dem Test</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section service-story-section">
        <div className="container service-story-grid">
          <div><span className="eyebrow">Kommunale Ausgangslage</span><h2>Das Problem ist selten die Fachlichkeit.<br /><em>Es ist die verfügbare Zeit.</em></h2></div>
          <div className="story-copy"><p>{service.problem}</p><p className="benefit-copy"><strong>Der konkrete Nutzen:</strong> {service.benefit}</p></div>
        </div>
      </section>

      <section className="section section-sand" id="lieferumfang">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Leistungsergebnis</span><h2>Was Ihre Fachstelle<br /><em>zurückbekommt.</em></h2></div>
            <div><p>Das Übergabeformat wird vor dem Pilot festgelegt. So entstehen keine Datensammlung und kein Fotopaket, das intern erst mühsam sortiert werden muss.</p></div>
          </div>
          <div className="deliverable-grid">
            {service.deliverables.map((item, index) => (
              <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-list">
          <div>
            <span className="eyebrow">Typische Einsatzfälle</span>
            <h2>Wann das Modul sinnvoll wird.</h2>
            <ul className="check-list">{service.useCases.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul>
          </div>
          <div className="dark-list-card">
            <span className="eyebrow eyebrow-light">Bewusste Abgrenzung</span>
            <h2>Was nicht Teil der Leistung ist.</h2>
            <ul>{service.boundaries.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
            <Link className="text-link text-link-light" href="/leistungsgrenzen">Alle Leistungsgrenzen <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section-green service-process-section">
        <div className="container">
          <div className="section-heading split-heading light-heading">
            <div><span className="eyebrow eyebrow-light">Projektablauf</span><h2>Vier klare Schritte.<br /><em>Keine Überraschungen.</em></h2></div>
            <div><p>Der Ablauf schützt beide Seiten vor unklarer Verantwortung und verhindert, dass aus einer Routine unbemerkt eine Fachprüfung wird.</p></div>
          </div>
          <div className="service-process-grid">
            {service.process.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div><span className="eyebrow">Häufige Fragen</span><h2>Vor dem Pilot<br /><em>klar beantwortet.</em></h2></div>
          <div className="faq-list">
            {service.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section section-sand">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="eyebrow">Passendes Kommunalwissen</span><h2>Mehr zum<br /><em>praktischen Ablauf.</em></h2></div><div><Link className="text-link" href="/kommunalwissen">Alle Beiträge <ArrowIcon /></Link></div></div>
            <div className="article-grid">{related.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>
          </div>
        </section>
      ) : null}

      <section className="section closing-section">
        <div className="container closing-card">
          <div><span className="eyebrow">Pilotprojekt</span><h2>Passt dieses Modul zu Ihrer aktuellen Aufgabe?</h2><p>Schicken Sie Gebiet, groben Umfang und gewünschte Übergabe. Wir grenzen einen ersten Test nachvollziehbar ab.</p></div>
          <div className="closing-actions"><Link className="button" href={`/anfrage?leistung=${service.slug}`}>Pilot beschreiben <ArrowIcon /></Link><Link className="quiet-link" href="/leistungen">Andere Leistung wählen</Link></div>
        </div>
      </section>
    </main>
  );
}
