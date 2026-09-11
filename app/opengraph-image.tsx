import { ImageResponse } from "next/og";

export const alt = "KommunalHilfe – Kommunale Aufgaben. Verlässlich erledigt.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", background: "#f3efe4", color: "#153c33", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 260, border: "84px solid rgba(21,60,51,.08)", right: -100, bottom: -210 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="62" height="62" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="10" fill="#0b2e4f" />
          <path d="M11.5 11.5v25M13.5 24l10-12.5M13.5 24l10 12.5" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M28.5 11.5v25M38 11.5v25M28.5 24H38" fill="none" stroke="#f2b441" strokeLinecap="round" strokeWidth="4" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ fontSize: 31, letterSpacing: -1 }}>Kommunal<span style={{ color: "#1475ad" }}>Hilfe</span></strong><span style={{ fontSize: 18, color: "#60726c" }}>Für Städte und Gemeinden</span></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <span style={{ fontSize: 20, textTransform: "uppercase", letterSpacing: 3, color: "#c75531", fontWeight: 700 }}>Erfassung · Dokumentation · Backoffice</span>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 72, lineHeight: .98, letterSpacing: -4, fontWeight: 700 }}><span>Kommunale Aufgaben.</span><span style={{ color: "#d9633b" }}>Verlässlich erledigt.</span></div>
      </div>
      <div style={{ fontSize: 22, color: "#60726c" }}>Vor Ort erfasst. Klar dokumentiert. Direkt weiterverwendbar.</div>
    </div>,
    size,
  );
}
