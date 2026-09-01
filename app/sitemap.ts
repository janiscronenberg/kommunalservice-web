import type { MetadataRoute } from "next";
import { knowledgeArticles, services } from "../lib/content";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-01T12:00:00Z");
  const staticPages = [
    ["", 1, "weekly"],
    ["/leistungen", 0.9, "weekly"],
    ["/kommunalwissen", 0.9, "weekly"],
    ["/arbeitsweise", 0.7, "monthly"],
    ["/einsatzgebiet", 0.7, "monthly"],
    ["/leistungsgrenzen", 0.8, "monthly"],
    ["/anfrage", 0.8, "monthly"],
    ["/impressum", 0.2, "yearly"],
    ["/datenschutz", 0.2, "yearly"],
  ] as const;

  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified: updated, changeFrequency, priority })),
    ...services.map((service) => ({ url: absoluteUrl(`/leistungen/${service.slug}`), lastModified: updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...knowledgeArticles.map((article) => ({ url: absoluteUrl(`/kommunalwissen/${article.slug}`), lastModified: new Date(`${article.updated}T12:00:00Z`), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
