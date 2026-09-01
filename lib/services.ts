export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  deliverables: string[];
  boundaries: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "starkregen-bereitschaftscheck",
    title: "Starkregen-Bereitschaftscheck",
    eyebrow: "Dokumentierte Sichtkontrolle",
    summary: "Kritische Einläufe, Rechen, Durchlässe und Abflusswege nach Ihrem Kriterienkatalog erfassen und auffällige Punkte priorisiert melden.",
    problem: "Starkregenkonzepte benennen kritische Punkte. Im Alltag fehlt jedoch häufig die Zeit, diese Stellen wiederkehrend anzufahren und ihren sichtbaren Zustand nachvollziehbar zu dokumentieren.",
    deliverables: ["Fotodokumentation je Kontrollpunkt", "Standort und Zeitstempel", "vereinbarter Status je Punkt", "Liste auffälliger Stellen", "Übergabe in vereinbartem Datenformat"],
    boundaries: ["keine hydraulische Bewertung", "keine technische Bauwerksprüfung", "keine Kanalbefahrung", "keine Freigabe sicherheitsrelevanter Anlagen"],
    seoTitle: "Starkregen-Kontrollfahrten für Kommunen",
    seoDescription: "Externe dokumentierte Sichtkontrollen kritischer Starkregenpunkte für Städte und Gemeinden – nach kommunalem Kriterienkatalog.",
  },
  {
    slug: "lichtraum-ueberwuchs-erfassung",
    title: "Lichtraum- & Überwuchserfassung",
    eyebrow: "Erfassung im Verkehrsraum",
    summary: "Sichtbare Vegetation an Straßen, Gehwegen, Schildern und Sichtbereichen strukturiert aufnehmen und für die Verwaltung dokumentieren.",
    problem: "Überwuchs ist saisonal, kleinteilig und verteilt sich über das gesamte Gemeindegebiet. Gerade die systematische Erstaufnahme bindet wertvolle Außendienstzeit.",
    deliverables: ["Foto der Auffälligkeit", "Adresse oder GPS-Position", "Zuordnung nach Kriterienkatalog", "gebietsweise Ergebnisliste", "optional wiederkehrende saisonale Route"],
    boundaries: ["keine rechtliche Bewertung", "keine behördliche Anordnung", "keine Baumkontrolle nach Fachregelwerk", "kein Rückschnitt ohne gesonderte Beauftragung"],
    seoTitle: "Lichtraumprofil und Überwuchs für Kommunen erfassen",
    seoDescription: "Externe Erfassung von sichtbarem Überwuchs im öffentlichen Verkehrsraum – mit Foto, Standort und strukturierter Dokumentation.",
  },
  {
    slug: "maengelmelder-backoffice",
    title: "Mängelmelder-Backoffice",
    eyebrow: "Digitale Eingangsbearbeitung",
    summary: "Meldungen vorsortieren, Dubletten erkennen, Kategorien vorbereiten und die zuständige interne Bearbeitung entlasten.",
    problem: "Ein digitaler Mängelmelder reduziert den Eingangskanal, aber nicht automatisch den internen Bearbeitungsaufwand. Viele Meldungen müssen gelesen, sortiert und weitergeleitet werden.",
    deliverables: ["Vorsortierung eingehender Meldungen", "Dublettenkennzeichnung", "Kategorisierung nach Vorgabe", "Kennzeichnung personenbezogener Inhalte", "Weiterleitung nach Zuständigkeitsmatrix"],
    boundaries: ["keine Sachentscheidung", "keine Veröffentlichung ohne Freigaberegel", "keine Rechtsauskunft", "Datenschutz- und AVV-Struktur vor Produktivbetrieb erforderlich"],
    seoTitle: "Mängelmelder-Backoffice für Städte und Gemeinden",
    seoDescription: "Externe Vorsortierung und organisatorische Bearbeitung kommunaler Mängelmeldungen im bestehenden System.",
  },
  {
    slug: "notfalltreffpunkt-inventur",
    title: "Notfalltreffpunkt-Inventur",
    eyebrow: "Krisenvorsorge organisieren",
    summary: "Ausstattung, Beschilderung, Unterlagen und dokumentierte Wartungsstände anhand Ihrer kommunalen Checkliste aufnehmen.",
    problem: "Notfalltreffpunkte schaffen neue Bestände und wiederkehrende organisatorische Aufgaben. Die Vollständigkeit lässt sich mit einer einfachen Inventur deutlich leichter im Blick behalten.",
    deliverables: ["Bestandsaufnahme nach Checkliste", "Fotodokumentation", "Verfallsdaten und offensichtliche Fehlbestände", "Abgleich von Unterlagen und Ansprechpartnern", "übersichtliche Fehlteilliste"],
    boundaries: ["keine technische Prüfung von Aggregaten", "keine Prüfung elektrischer Anlagen", "keine Einsatzfreigabe", "keine Bewertung des Katastrophenschutzkonzepts"],
    seoTitle: "Notfalltreffpunkt Inventur für Kommunen",
    seoDescription: "Organisatorische Inventur kommunaler Notfalltreffpunkte – Bestände, Beschilderung, Unterlagen und dokumentierte Wartungsstände.",
  },
  {
    slug: "aufbruch-fotodokumentation",
    title: "Aufbruch-Fotodokumentation",
    eyebrow: "Zustände nachvollziehbar festhalten",
    summary: "Aufbruchstellen in Straßen und Nebenflächen zu definierten Zeitpunkten fotografisch dokumentieren und geordnet übergeben.",
    problem: "Bei vielen laufenden Aufbruchstellen fehlt oft nicht die Fachkompetenz, sondern schlicht die Zeit für eine lückenlose Vorher-/Nachher-Dokumentation vor Ort.",
    deliverables: ["Vorher-Fotodokumentation", "Zwischenstände nach Auftrag", "Abschlussdokumentation", "Position und Zeitstempel", "strukturierte Fallablage"],
    boundaries: ["keine technische Abnahme", "keine Bewertung der Bauausführung", "keine Gewährleistungsentscheidung", "keine Verkehrsfreigabe"],
    seoTitle: "Fotodokumentation von Straßenaufbrüchen für Kommunen",
    seoDescription: "Vorher-, Zwischen- und Abschlussdokumentation kommunaler Aufbruchstellen – sauber strukturiert für die fachliche Bearbeitung.",
  },
  {
    slug: "kommunale-rundgaenge",
    title: "Kommunale Rundgänge",
    eyebrow: "Mehrere Routinen in einer Fahrt",
    summary: "Individuell definierte Erfassungsrouten für Stadtmobiliar, Aushänge, Beschilderung und andere einfache Sicht- und Dokumentationsaufgaben.",
    problem: "Viele kleine Kontrollen sind einzeln zu unwirtschaftlich, gemeinsam auf einer festen Route jedoch effizient auslagerbar.",
    deliverables: ["individueller Routenkatalog", "Fotodokumentation nach Vorgabe", "Standort- und Statusdaten", "gebündelte Auffälligkeitsliste", "wiederkehrende Terminplanung"],
    boundaries: ["keine Bewachung", "keine hoheitlichen Kontrollen", "keine sachverständige Verkehrssicherheitsprüfung", "keine technischen Prüfungen"],
    seoTitle: "Externe kommunale Rundgänge und Routinekontrollen",
    seoDescription: "Mehrere einfache Erfassungs- und Dokumentationsaufgaben auf einer Route bündeln und die Verwaltung entlasten.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
