# Qualitätssicherung

Stand: 1. September 2026

Die vollständige Website-Fassung wurde vor der Übergabe mit folgenden Prüfungen abgesichert:

- Inhaltsvalidierung: 10 eindeutige Leistungsseiten und 12 eindeutige Wissensbeiträge
- TypeScript-Prüfung ohne Fehler
- Next.js-Produktionsbuild ohne Fehler
- automatisierter Abruf sämtlicher intern verlinkter Seiten ohne fehlerhafte interne Route
- visuelle Prüfung repräsentativer Desktop- und Mobilansichten
- automatisierter Axe-Scan der zentralen Seitentypen ohne schwerwiegende oder kritische Befunde
- Formularprüfung für ungültige Eingaben und sicheren, noch nicht konfigurierten Vorabmodus
- Prüfung von `robots.txt`, Sitemap, RSS, 404-Seite und Security-Text

## Dauerhafter Qualitätsprozess

Der Workflow `.github/workflows/quality.yml` führt bei künftigen Änderungen Inhaltsprüfung, TypeScript-Prüfung und Produktionsbuild aus. Die Website bleibt standardmäßig nicht indexierbar, bis Betreiberangaben vollständig sind und `NEXT_PUBLIC_SITE_LIVE=true` gesetzt wird.

## Grenzen dieser Prüfung

Die technische Prüfung ersetzt nicht die vor dem Livegang erforderliche juristische Prüfung von Marke, Anbieterkennzeichnung, Datenschutz, Vertragsunterlagen und den tatsächlich angebotenen Leistungsumfängen. Ebenso wurden keine erfundenen Referenzen oder nicht belegten Leistungsversprechen ergänzt.
