export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const siteIsLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export const legalConfig = {
  operator: process.env.NEXT_PUBLIC_LEGAL_NAME || "",
  legalForm: process.env.NEXT_PUBLIC_LEGAL_FORM || "",
  street: process.env.NEXT_PUBLIC_LEGAL_STREET || "",
  city: process.env.NEXT_PUBLIC_LEGAL_CITY || "",
  representedBy: process.env.NEXT_PUBLIC_LEGAL_REPRESENTATIVE || "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  vatId: process.env.NEXT_PUBLIC_VAT_ID || "",
  register: process.env.NEXT_PUBLIC_REGISTER || "",
  hostingProvider: process.env.NEXT_PUBLIC_HOSTING_PROVIDER || "",
};

export function absoluteUrl(path = "") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
