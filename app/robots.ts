import type { MetadataRoute } from "next";
import { absoluteUrl, siteIsLive } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteIsLive) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl(),
  };
}
