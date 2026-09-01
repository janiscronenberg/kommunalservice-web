import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KommunalRoutine",
    short_name: "KommunalRoutine",
    description: "Externe kommunale Routinedienstleistungen",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#123f35",
    lang: "de-DE",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
