import Link from "next/link";
import { services, siteConfig } from "../lib/content";
import { ArrowIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <span className="eyebrow eyebrow-light">Einfach mit einer Routine anfangen</span>
          <h2>Welche kleine Aufgabe kostet Ihr Team gerade zu viel Zeit?</h2>
        </div>
        <Link className="button button-light" href="/anfrage">
          Pilot beschreiben <ArrowIcon />
        </Link>
      </div>

      <div className="container footer-grid">
        <div className="footer-intro">
          <Link className="brand brand-inverse" href="/">
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
          <p>{siteConfig.description}</p>
          <p className="footer-boundary">
            Keine hoheitlichen Entscheidungen, keine technischen Abnahmen und keine Sachverständigenprüfungen.
          </p>
        </div>

        <div>
          <h3>Leistungen</h3>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/leistungen/${service.slug}`}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Unternehmen</h3>
          <ul>
            <li><Link href="/arbeitsweise">Arbeitsweise</Link></li>
            <li><Link href="/einsatzgebiet">Einsatzgebiet</Link></li>
            <li><Link href="/leistungsgrenzen">Leistungsgrenzen</Link></li>
            <li><Link href="/kommunalwissen">Kommunalwissen</Link></li>
            <li><Link href="/anfrage">Anfrage</Link></li>
          </ul>
        </div>

        <div>
          <h3>Rechtliches</h3>
          <ul>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/rss.xml">RSS-Feed</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Entwickelt für klare kommunale Abläufe.</span>
      </div>
    </footer>
  );
}
