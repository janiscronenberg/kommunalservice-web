import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "../../../lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="shell">
      <div className="topbar">
        <div className="container"><span>Für Städte, Gemeinden & kommunale Betriebe</span><span>Erfassung · Dokumentation · Routineentlastung</span></div>
      </div>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/"><span className="brandmark" aria-hidden="true"/><span>Kommunalservice</span></a>
          <div className="nav-links"><a href="/#leistungen">Leistungen</a><a href="/#abgrenzung">Abgrenzung</a><a href="/#ablauf">Ablauf</a></div>
          <a className="btn btn-primary" href="#kontakt">Pilot anfragen →</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container" style={{maxWidth: 980}}>
          <span className="kicker">{service.eyebrow}</span>
          <h1 style={{fontSize: "clamp(46px,7vw,74px)"}}>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#kontakt">Pilotprojekt besprechen →</a><a className="btn btn-secondary" href="/#leistungen">Alle Leistungen</a></div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth: 980}}>
          <div className="section-head">
            <div><span className="kicker">Warum auslagern?</span><h2>Routine statt Zusatzprojekt.</h2></div>
            <p>{service.problem}</p>
          </div>
          <div className="service-grid" style={{gridTemplateColumns: "1fr 1fr"}}>
            <article className="card">
              <span className="tag">Lieferumfang</span>
              <h3>Was Sie erhalten</h3>
              <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="card">
              <span className="tag">Abgrenzung</span>
              <h3>Was bewusst bei Ihnen bleibt</h3>
              <ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="kontakt">
        <div className="container cta" style={{maxWidth: 980}}>
          <div><span className="kicker">Klein anfangen</span><h2>Erst Pilot. Dann Routine.</h2><p>Schicken Sie uns kurz Gebiet, Umfang und gewünschte Dokumentation. Wir grenzen die Leistung so ab, dass Sie sie ohne unnötige Projektkomplexität testen können.</p></div>
          <a className="btn btn-primary" href={`mailto:kontakt@example.de?subject=Pilot%20${encodeURIComponent(service.title)}`}>Pilot anfragen →</a>
        </div>
      </section>

      <footer className="footer"><div className="container"><div className="footer-bottom">© 2026 · Entwicklungsfassung · Markenname, Domain, Impressum und Datenschutz werden vor Veröffentlichung finalisiert.</div></div></footer>
    </main>
  );
}
