import { knowledgeArticles } from "../../lib/content";
import { absoluteUrl } from "../../lib/site";

function xml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character] || character);
}

export function GET() {
  const items = knowledgeArticles.map((article) => `
    <item>
      <title>${xml(article.title)}</title>
      <link>${absoluteUrl(`/kommunalwissen/${article.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/kommunalwissen/${article.slug}`)}</guid>
      <description>${xml(article.summary)}</description>
      <pubDate>${new Date(`${article.updated}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`).join("");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>KommunalRoutine – Kommunalwissen</title>
      <link>${absoluteUrl("/kommunalwissen")}</link>
      <description>Praxiswissen zu kommunalen Routinedienstleistungen</description>
      <language>de-DE</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
