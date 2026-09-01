import { ImageResponse } from "next/og";

export const alt = "KommunalRoutine – Routine raus. Verwaltung frei.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", background: "#f3efe4", color: "#153c33", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 260, border: "84px solid rgba(21,60,51,.08)", right: -100, bottom: -210 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 62, height: 62, background: "#153c33", borderRadius: "17px 17px 17px 5px", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <span style={{ width: 8, height: 28, background: "#fff", borderRadius: 4 }} />
          <span style={{ width: 8, height: 40, background: "#e06c3f", borderRadius: 4 }} />
          <span style={{ width: 8, height: 22, background: "#fff", borderRadius: 4 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ fontSize: 31, letterSpacing: -1 }}>KommunalRoutine</strong><span style={{ fontSize: 18, color: "#60726c" }}>Routinedienstleistungen für Städte & Gemeinden</span></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <span style={{ fontSize: 20, textTransform: "uppercase", letterSpacing: 3, color: "#c75531", fontWeight: 700 }}>Erfassung · Dokumentation · Backoffice</span>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 78, lineHeight: .98, letterSpacing: -4, fontWeight: 700 }}><span>Routine raus.</span><span style={{ color: "#d9633b" }}>Verwaltung frei.</span></div>
      </div>
      <div style={{ fontSize: 22, color: "#60726c" }}>Klar abgegrenzt. Digital dokumentiert. Als Pilot testbar.</div>
    </div>,
    size,
  );
}
