import Link from "next/link";
import type { KnowledgeArticle } from "../lib/content";
import { ArrowIcon } from "./icons";

export function ArticleCard({ article, featured = false }: { article: KnowledgeArticle; featured?: boolean }) {
  return (
    <article className={`article-card${featured ? " article-card-featured" : ""}`}>
      <div className="article-meta">
        <span>{article.eyebrow}</span>
        <span>{article.readingMinutes} Min.</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <Link className="text-link" href={`/kommunalwissen/${article.slug}`} aria-label={`${article.title} lesen`}>
        Beitrag lesen <ArrowIcon />
      </Link>
    </article>
  );
}
