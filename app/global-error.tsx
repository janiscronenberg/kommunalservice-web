"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", color: "#142a25", background: "#f1ede3" }}>
        <main style={{ minHeight: "100vh", padding: 24, display: "grid", placeItems: "center", textAlign: "center" }}>
          <div style={{ maxWidth: 620 }}>
            <span style={{ color: "#b94a27", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Technischer Fehler</span>
            <h1 style={{ margin: "15px 0", fontSize: "clamp(40px, 7vw, 70px)", lineHeight: 1 }}>Diese Seite konnte gerade nicht geladen werden.</h1>
            <p style={{ color: "#5f706b", lineHeight: 1.6 }}>Bitte versuchen Sie es erneut. Wenn der Fehler bestehen bleibt, rufen Sie die Startseite später noch einmal auf.</p>
            <button onClick={reset} style={{ marginTop: 18, minHeight: 48, padding: "0 22px", border: 0, borderRadius: 999, color: "white", background: "#db6339", fontWeight: 700 }}>Erneut versuchen</button>
          </div>
        </main>
      </body>
    </html>
  );
}
