import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "../../../components/icons";
import { JsonLd } from "../../../components/json-ld";
import { getArticle, getService, knowledgeArticles } from "../../../lib/content";
import { absoluteUrl } from "../../../lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/kommunalwissen/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.summary, url: `/kommunalwissen/${article.slug}`, modifiedTime: article.updated },
  };
}

export default async function KnowledgeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const service = article.serviceSlug ? getService(article.serviceSlug) : undefined;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      dateModified: article.updated,
      datePublished: article.updated,
      inLanguage: "de-DE",
      author: { "@type": "Organization", name: "KommunalRoutine" },
      publisher: { "@type": "Organization", name: "KommunalRoutine" },
      mainEntityOfPage: absoluteUrl(`/kommunalwissen/${article.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ];

  const formattedDate = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${article.updated}T12:00:00Z`));

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <article>
        <header className="article-hero">
          <div className="container article-hero-inner">
            <nav className="breadcrumbs" aria-label="Brotkrümelnavigation"><Link href="/">Start</Link><span>/</span><Link href="/kommunalwissen">Kommunalwissen</Link><span>/</span><span>{article.eyebrow}</span></nav>
            <span className="eyebrow">{article.eyebrow}</span>
            <h1>{article.title}</h1>
            <p>{article.summary}</p>
            <div className="article-byline"><span>KommunalRoutine Redaktion</span><i /><span>{article.readingMinutes} Minuten Lesezeit</span><i /><span>Aktualisiert: {formattedDate}</span></div>
          </div>
        </header>

        <div className="container article-layout">
          <aside className="article-toc">
            <span>In diesem Beitrag</span>
            <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#abschnitt-${index + 1}`}>{section.heading}</a></li>)}</ol>
            {service ? <Link className="toc-service-link" href={`/leistungen/${service.slug}`}>Passende Leistung <ArrowIcon /></Link> : null}
          </aside>

          <div className="article-body">
            {article.sections.map((section, index) => (
              <section id={`abschnitt-${index + 1}`} key={section.heading}>
                <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}

            <section className="article-faq">
              <span className="section-number">FAQ</span>
              <h2>Häufige Fragen</h2>
              {article.faq.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
            </section>

            {article.sources?.length ? (
              <section className="sources-box">
                <h2>Weiterführende offizielle Hinweise</h2>
                <ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      <section className="section section-sand compact-cta-section">
        <div className="container compact-cta">
          <div><span className="eyebrow">Von der Information zum Pilot</span><h2>{service ? service.shortTitle : "Kommunale Routine"} praktisch testen.</h2></div>
          <div><p>Ein abgegrenzter Realtest zeigt mehr als ein theoretischer Prozessentwurf.</p><Link className="button" href={service ? `/anfrage?leistung=${service.slug}` : "/anfrage"}>Pilot beschreiben <ArrowIcon /></Link></div>
        </div>
      </section>
    </main>
  );
}
