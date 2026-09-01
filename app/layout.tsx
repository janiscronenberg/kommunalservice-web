import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kommunalservice | Routineaufgaben für Städte und Gemeinden",
    template: "%s | Kommunalservice",
  },
  description:
    "Externe Routine-, Erfassungs- und Dokumentationsleistungen für Städte und Gemeinden – klar abgegrenzt, digital dokumentiert und ohne unnötige Projektkomplexität.",
  metadataBase: new URL("https://example.de"),
  openGraph: {
    title: "Kommunalservice",
    description:
      "Externe Routine-, Erfassungs- und Dokumentationsleistungen für Städte und Gemeinden.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
