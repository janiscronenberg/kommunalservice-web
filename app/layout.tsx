import type { Metadata, Viewport } from "next";
import { JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { siteConfig } from "../lib/content";
import { absoluteUrl, legalConfig, siteIsLive, siteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Kommunale Routinedienstleistungen`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Kommunale Dienstleistungen",
  alternates: { canonical: "/" },
  robots: siteIsLive
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true, nocache: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.claim}`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} – ${siteConfig.claim}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.claim}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123f35",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl(),
    slogan: siteConfig.claim,
    description: siteConfig.description,
    ...(legalConfig.contactEmail
      ? {
          email: legalConfig.contactEmail,
          contactPoint: {
            "@type": "ContactPoint",
            email: legalConfig.contactEmail,
            contactType: "sales",
            availableLanguage: "German",
          },
        }
      : {}),
  };

  return (
    <html lang="de">
      <body>
        <JsonLd data={organization} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
