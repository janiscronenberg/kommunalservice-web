import { absoluteUrl, legalConfig } from "../../../lib/site";

export function GET() {
  const contact = legalConfig.contactEmail ? `mailto:${legalConfig.contactEmail}` : absoluteUrl("/anfrage");
  const body = `Contact: ${contact}\nPreferred-Languages: de, en\nExpires: 2027-09-01T00:00:00.000Z\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
