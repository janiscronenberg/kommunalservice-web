# Deployment

## Empfohlener Ablauf

1. Repository in Vercel oder einem vergleichbaren Next.js-Host importieren.
2. Node.js 22 verwenden; Buildbefehl `npm run build` und Installationsbefehl `npm ci`.
3. Variablen aus `.env.example` im Hostingprojekt hinterlegen.
4. Zunächst `NEXT_PUBLIC_SITE_LIVE=false` belassen.
5. Vorschau, Formular, Betreiberangaben und alle Rechtstexte prüfen.
6. Domain verbinden und `NEXT_PUBLIC_SITE_URL` auf die kanonische HTTPS-Adresse setzen.
7. Erst nach Freigabe `NEXT_PUBLIC_SITE_LIVE=true` setzen und neu deployen.

## Anfrageformular

Der Serverendpunkt `/api/anfrage` erwartet:

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL`

Die Absenderadresse muss beim Versanddienst freigegeben sein. Ohne vollständige Konfiguration liefert das Formular bewusst einen verständlichen Fehler und verwirft keine Anfrage stillschweigend.

## Nach dem Livegang

- Sitemap in Google Search Console und Bing Webmaster Tools anmelden.
- Formular mit einer realen dienstlichen Adresse testen.
- Server- und Versandprotokolle auf Fehlermeldungen prüfen.
- keine Analyse- oder Marketingdienste ohne vorherige Datenschutz- und Einwilligungsprüfung aktivieren.
