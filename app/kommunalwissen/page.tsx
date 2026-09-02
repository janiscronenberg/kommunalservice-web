import type { Metadata } from "next";
import { ArticleCard } from "../../components/article-card";
import { knowledgeArticles } from "../../lib/content";

export const metadata: Metadata = {
  title: "Kommunalwissen",
  description:
    "Praxiswissen zu kommunalen Routinen, Außendienstdokumentation, Backoffice und Bestandsdaten.",
  alternates: { canonical: "/kommunalwissen" },
};

export default function KnowledgePage() {
  const topics = [...new Set(knowledgeArticles.map((article) => article.eyebrow))];

  return (
    <main id="main-content">
      <section className="page-hero knowledge-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow">Kommunalwissen</span><h1>Praxiswissen für<br /><em>kommunale Routinen.</em></h1></div>
          <div className="page-hero-aside"><p>Konkrete Hinweise, Checklisten und Entscheidungshilfen für wiederkehrende Außendienst-, Dokumentations- und Backoffice-Aufgaben.</p></div>
        </div>
        <div className="container topic-row" aria-label="Themen">
          {topics.map((topic) => <span key={topic}>{topic}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalog-intro"><span>{knowledgeArticles.length} Fachbeiträge</span><p>Für Hauptamt, Bauamt, Tiefbau, Ordnungsamt, Klimaanpassung und kommunale Betriebe.</p></div>
          <div className="article-grid knowledge-grid">
            {knowledgeArticles.map((article, index) => <ArticleCard article={article} featured={index === 0} key={article.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
