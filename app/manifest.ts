import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KommunalRoutine",
    short_name: "KommunalRoutine",
    description: "Außendienst-, Dokumentations- und Backoffice-Leistungen für Kommunen",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d33",
    lang: "de-DE",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
