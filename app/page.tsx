const services = [
  {
    tag: "Außendienst",
    title: "Starkregen-Bereitschaftscheck",
    text: "Kritische Einläufe, Rechen, Durchlässe und Abflusswege nach kommunalem Kriterienkatalog erfassen, fotografieren und auffällige Punkte priorisiert melden.",
  },
  {
    tag: "Außendienst",
    title: "Lichtraum- & Überwuchserfassung",
    text: "Sichtbare Vegetation im Verkehrsraum strukturiert erfassen – mit Foto, Standort und nachvollziehbarer Dokumentation für die weitere Bearbeitung durch die Verwaltung.",
  },
  {
    tag: "Backoffice",
    title: "Mängelmelder-Backoffice",
    text: "Eingehende Meldungen sichten, Dubletten erkennen, Kategorien vorbereiten, personenbezogene Inhalte kennzeichnen und an die zuständige Stelle vorsortieren.",
  },
  {
    tag: "Krisenvorsorge",
    title: "Notfalltreffpunkt-Inventur",
    text: "Bestände, Beschilderung, Unterlagen und dokumentierte Wartungsstände nach Ihrer Checkliste aufnehmen – ohne technische Prüfung oder hoheitliche Bewertung.",
  },
  {
    tag: "Dokumentation",
    title: "Aufbruch-Fotodokumentation",
    text: "Vorher-, Zwischen- und Abschlusszustände kommunaler Aufbruchstellen standardisiert dokumentieren und für die fachliche Bewertung Ihrer Mitarbeitenden aufbereiten.",
  },
  {
    tag: "Routine-Service",
    title: "Kommunale Rundgänge",
    text: "Wiederkehrende, frei definierbare Erfassungsrouten für Stadtmobiliar, Aushänge, Beschilderung oder andere einfache Sicht- und Dokumentationsaufgaben.",
  },
];

export default function Home() {
  return (
    <main className="shell">
      <div className="topbar">
        <div className="container">
          <span>Für Städte, Gemeinden & kommunale Betriebe</span>
          <span>Erfassung · Dokumentation · Routineentlastung</span>
        </div>
      </div>

      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Startseite">
            <span className="brandmark" aria-hidden="true" />
            <span>Kommunalservice</span>
          </a>
          <div className="nav-links">
            <a href="#leistungen">Leistungen</a>
            <a href="#abgrenzung">Abgrenzung</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#kontakt">Pilotprojekt</a>
          </div>
          <a className="btn btn-primary" href="#kontakt">Pilot anfragen →</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <span className="kicker">Externe Routineentlastung für Kommunen</span>
            <h1>Die kleinen Aufgaben, für die im Rathaus niemand Zeit hat.</h1>
            <p>
              Wir übernehmen klar abgegrenzte Erfassungs-, Dokumentations- und Routinetätigkeiten für Städte und Gemeinden – ohne neue Software, ohne unnötige Beratungsschleifen und ohne Eingriff in hoheitliche Entscheidungen.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#kontakt">Pilotprojekt anfragen →</a>
              <a className="btn btn-secondary" href="#leistungen">Leistungen ansehen</a>
            </div>
            <div className="proofline">
              <span>Leistung nach Kriterienkatalog</span>
              <span>Foto- & Standortdokumentation</span>
              <span>Auch als wiederkehrende Route</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Beispiel einer kommunalen Kontrollroute">
            <small>Beispiel · Gemeinderundgang</small>
            <h2>Eine Fahrt. Mehrere Routinen erledigt.</h2>
            {[
              ["01", "Starkregenpunkt", "Einlauf frei", "dokumentiert"],
              ["02", "Verkehrsraum", "Überwuchs sichtbar", "melden"],
              ["03", "Stadtmobiliar", "Bank beschädigt", "melden"],
              ["04", "Aushangstelle", "Bestand aufgenommen", "dokumentiert"],
            ].map(([n, title, detail, status]) => (
              <div className="route-item" key={n}>
                <span className="route-num">{n}</span>
                <div><b>{title}</b><span>{detail}</span></div>
                <span className="route-status">{status}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section" id="leistungen">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">Leistungspakete</span><h2>Einfach einkaufbare Entlastung.</h2></div>
            <p>
              Kein neues Großprojekt: Die Kommune definiert Kriterien und Entscheidungsgrenzen. Wir übernehmen die wiederkehrende Erhebung und liefern verwertbare Ergebnisse zurück.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <span className="tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="card-link" href="#kontakt">Pilot besprechen →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="abgrenzung">
        <div className="container promise">
          <div className="promise-copy">
            <span className="kicker" style={{color: "#f3b399"}}>Klare Leistungsgrenze</span>
            <h2>Wir dokumentieren. Ihre Kommune entscheidet.</h2>
            <p>
              Die Leistungen sind bewusst so konzipiert, dass fachliche, technische und hoheitliche Entscheidungen dort bleiben, wo sie hingehören: bei der zuständigen Stelle Ihrer Kommune oder deren Fachpartnern.
            </p>
          </div>
          <div className="promise-list">
            {[
              ["01", "Keine hoheitlichen Entscheidungen", "Keine Verfügungen, Bußgelder oder behördlichen Bewertungen."],
              ["02", "Keine Sachverständigenprüfung", "Wir erfassen sichtbare Zustände nach vereinbartem Kriterienkatalog."],
              ["03", "Keine technische Abnahme", "Fachliche Freigaben bleiben bei Ihren zuständigen Mitarbeitenden oder Fachfirmen."],
              ["04", "Keine unnötige Systemmigration", "Ergebnisse liefern wir in einem vereinbarten, weiterverwendbaren Format."],
            ].map(([n, title, text]) => (
              <div className="promise-row" key={n}>
                <strong>{n}</strong><div><b>{title}</b><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ablauf">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">Pilot statt Großprojekt</span><h2>Vom Problem zur ersten Route.</h2></div>
            <p>Wir starten bewusst klein. So sehen Sie vor einem längerfristigen Auftrag, ob die Leistung Ihre Verwaltung tatsächlich entlastet.</p>
          </div>
          <div className="process">
            <div className="process-item"><h3>Aufgabe abgrenzen</h3><p>Sie nennen die wiederkehrende Aufgabe und die gewünschte Dokumentation.</p></div>
            <div className="process-item"><h3>Kriterien festlegen</h3><p>Gemeinsam definieren wir, was erfasst wird und wann lediglich eine Meldung erfolgt.</p></div>
            <div className="process-item"><h3>Pilot durchführen</h3><p>Eine erste Route oder ein abgegrenzter Backoffice-Zeitraum zeigt den realen Aufwand.</p></div>
            <div className="process-item"><h3>Routine daraus machen</h3><p>Nur wenn der Pilot funktioniert, wird daraus ein wiederkehrender Leistungsbaustein.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="kontakt">
        <div className="container cta">
          <div>
            <span className="kicker">Unverbindlicher Pilot</span>
            <h2>Welche Routine kostet Ihre Verwaltung gerade unnötig Zeit?</h2>
            <p>Beschreiben Sie uns die Aufgabe in zwei Sätzen. Wir prüfen, ob sie sich sinnvoll als klar abgegrenzte externe Leistung organisieren lässt.</p>
          </div>
          <a className="btn btn-primary" href="mailto:kontakt@example.de?subject=Pilotprojekt%20Kommunalservice">Pilot anfragen →</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div><a className="brand" href="#top"><span className="brandmark"/><span>Kommunalservice</span></a><p>Routineentlastung für Städte und Gemeinden. Der Markenname ist in dieser Entwicklungsfassung noch ein Arbeitstitel.</p></div>
            <div><h4>Leistungen</h4><p>Außendienst-Routinen<br/>Dokumentation<br/>Backoffice-Unterstützung<br/>Pilotprojekte</p></div>
            <div><h4>Hinweis</h4><p>Keine Rechtsberatung, keine Sachverständigenleistungen und keine hoheitlichen Entscheidungen.</p></div>
          </div>
          <div className="footer-bottom">© 2026 · Entwicklungsfassung · Impressum und Datenschutz werden vor Veröffentlichung mit den finalen Unternehmensdaten ergänzt.</div>
        </div>
      </footer>
    </main>
  );
}
