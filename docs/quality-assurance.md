# Qualitätssicherung

Stand: 1. September 2026

Der Release wurde mit folgenden reproduzierbaren Prüfungen abgesichert:

- Inhaltsvalidierung: 10 eindeutige Leistungsseiten und 13 eindeutige Wissensbeiträge
- TypeScript-Prüfung ohne Fehler
- vollständiger Next.js-Produktionsbuild ohne Fehler
- Generierung von 42 statischen und dynamischen Routen
- automatisierter Abruf aller intern verlinkten Seiten ohne fehlerhafte Route
- Prüfung von ungültigem Formularinhalt und sicherem Vorschauverhalten bei fehlendem Versandkonto
- Prüfung von `robots.txt`, Sitemap, RSS, Manifest, OpenGraph-Endpunkt und Security-Text
- standardmäßige Sperre der Suchmaschinenindexierung bis zur bewussten Livefreigabe

Der Workflow `.github/workflows/quality.yml` wiederholt Inhaltsprüfung, TypeScript-Prüfung und Produktionsbuild bei künftigen Änderungen.

## Vor dem Livegang

Eine technische Prüfung ersetzt nicht die erforderliche rechtliche und betriebliche Prüfung von Marke, Anbieterkennzeichnung, Datenschutz, Verträgen, Versicherungen und den tatsächlich angebotenen Leistungen. Ebenso müssen responsive Darstellung und Browserkompatibilität auf den realen Zielgeräten im veröffentlichten Vorschaustand abschließend abgenommen werden.
