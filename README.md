# KommunalRoutine Website

Website und organische Lead-Engine für klar abgegrenzte kommunale Routine-, Erfassungs-, Dokumentations- und Backoffice-Dienstleistungen.

## Enthalten

- responsive Startseite und vollständiger Leistungskatalog
- zehn ausführliche Leistungsseiten
- dreizehn Kommunalwissen-Beiträge
- Seiten zu Arbeitsweise, Einsatzgebiet und Leistungsgrenzen
- Anfrageformular mit Validierung, Honeypot, Herkunftsprüfung und Mengenbegrenzung
- vorbereiteter E-Mail-Versand über Resend
- Sitemap, Robots, RSS, Manifest, OpenGraph-Bild und strukturierte Daten
- Impressum und Datenschutz mit konfigurierbaren Betreiberangaben
- automatische Inhalts-, TypeScript- und Buildprüfung

## Lokal starten

Voraussetzung: Node.js 22 oder neuer.

```bash
npm ci
npm run dev
```

Danach `http://localhost:3000` öffnen.

Der vollständige Qualitätscheck läuft mit:

```bash
npm run check
```

## Konfiguration

`.env.example` nach `.env.local` kopieren und die realen Angaben eintragen. Geheimnisse wie `RESEND_API_KEY` niemals committen.

Solange `NEXT_PUBLIC_SITE_LIVE` nicht exakt `true` ist, setzt die Website `noindex` und sperrt Crawler zusätzlich über `robots.txt`. Das schützt den unfertigen rechtlichen Stand vor versehentlicher Indexierung.

## Vor dem Livegang zwingend

- Betreiber, Rechtsform, ladungsfähige Anschrift und Kontaktdaten eintragen
- Domain und Markenverfügbarkeit abschließend prüfen
- Hostinganbieter und E-Mail-Versand konfigurieren
- Impressum, Datenschutz, Vertrags- und Leistungsbeschreibungen rechtlich prüfen
- tatsächliche Versicherungs-, Vergabe- und Qualifikationsanforderungen je Auftrag prüfen
- `NEXT_PUBLIC_SITE_LIVE=true` erst nach Abschluss dieser Punkte setzen

Weitere Hinweise stehen in [docs/deployment.md](docs/deployment.md) und [docs/content-and-positioning.md](docs/content-and-positioning.md).
