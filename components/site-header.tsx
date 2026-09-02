import Link from "next/link";
import { siteConfig } from "../lib/content";
import { ArrowIcon } from "./icons";

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/arbeitsweise", label: "So arbeiten wir" },
  { href: "/kommunalwissen", label: "Kommunalwissen" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Für Städte, Gemeinden und kommunale Betriebe</span>
          <span className="utility-detail">Außendienst · Dokumentation · Backoffice</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={`${siteConfig.name} Startseite`}>
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-copy">
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.claim}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-small header-cta" href="/anfrage">
            Leistung anfragen <ArrowIcon />
          </Link>

          <details className="mobile-menu">
            <summary aria-label="Navigation öffnen">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile Navigation">
              {nav.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="button" href="/anfrage">
                Leistung anfragen <ArrowIcon />
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
