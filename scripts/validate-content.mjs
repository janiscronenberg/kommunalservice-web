import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = readFileSync(fileURLToPath(new URL("../lib/content.ts", import.meta.url)), "utf8");
const servicesSource = source.match(/export const services:[\s\S]*?export const knowledgeArticles:/)?.[0] || "";
const articlesSource = source.match(/export const knowledgeArticles:[\s\S]*?export function getService/)?.[0] || "";

const serviceSlugs = [...servicesSource.matchAll(/\n\s+slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);
const articleSlugs = [...articlesSource.matchAll(/\n\s+slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(serviceSlugs.length === 10, `Expected 10 services, found ${serviceSlugs.length}`);
assert(articleSlugs.length === 13, `Expected 13 knowledge articles, found ${articleSlugs.length}`);
assert(new Set(serviceSlugs).size === serviceSlugs.length, "Duplicate service slug found");
assert(new Set(articleSlugs).size === articleSlugs.length, "Duplicate article slug found");
assert(!source.includes("kontakt@example.de"), "Placeholder contact address must not be rendered");
assert(!source.includes("filebin.net"), "Temporary external bootstrap reference found");

console.log(`Content valid: ${serviceSlugs.length} services, ${articleSlugs.length} knowledge articles.`);
