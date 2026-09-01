export type IconName =
  | "route"
  | "rain"
  | "leaf"
  | "inbox"
  | "shield"
  | "camera"
  | "bench"
  | "notice"
  | "bike"
  | "database";

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problem: string;
  benefit: string;
  useCases: string[];
  deliverables: string[];
  process: string[];
  boundaries: string[];
  pilot: string;
  faq: Faq[];
  relatedArticles: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  readingMinutes: number;
  updated: string;
  serviceSlug?: string;
  sections: ArticleSection[];
  faq: Faq[];
  sources?: { label: string; href: string }[];
};

export const siteConfig = {
  name: "KommunalRoutine",
  claim: "Routine raus. Verwaltung frei.",
  description:
    "Externe Erfassungs-, Dokumentations- und Routinedienstleistungen für Städte, Gemeinden und kommunale Betriebe.",
};

export const services: Service[] = [
  {
    slug: "kommunale-rundgaenge",
    icon: "route",
    title: "Kombinierte kommunale Rundgänge",
    shortTitle: "Kommunale Rundgänge",
    eyebrow: "Eine Route, mehrere Aufgaben",
    summary:
      "Wiederkehrende Erfassungsrouten für mehrere kleine Aufgaben im öffentlichen Raum – gebündelt, dokumentiert und nach Ihrem Kriterienkatalog.",
    problem:
      "Viele kleine Außendienstaufgaben sind einzeln zu aufwendig, um sie konsequent zu terminieren. Gleichzeitig binden spontane Einzelwege wertvolle Zeit im Bauhof und in der Verwaltung.",
    benefit:
      "Mehrere Routinen werden in einer Fahrt zusammengefasst. Ihre Kommune erhält ein einheitliches Ergebnisformat statt verteilter Notizen, Fotos und Rückfragen.",
    useCases: [
      "Stadtmobiliar und Aushangstellen auf einer Route erfassen",
      "saisonale Überwuchs- und Sichtbarkeitsrunden",
      "bekannte Starkregenpunkte nach Vorgabe anfahren",
      "frei definierbare Ortsteil- oder Quartiersrunden",
    ],
    deliverables: [
      "abgestimmter Routen- und Kriterienkatalog",
      "Foto, Standort, Zeitstempel und Status je Prüfpunkt",
      "priorisierte Liste sichtbarer Auffälligkeiten",
      "Übergabe als PDF, Excel/CSV oder vereinbartes Systemformat",
      "optional wiederkehrender Monats-, Quartals- oder Saisonturnus",
    ],
    process: [
      "Route und Merkmale gemeinsam festlegen",
      "eine abgegrenzte Pilotrunde durchführen",
      "Ergebnisformat mit der Fachstelle abstimmen",
      "nur bei echtem Nutzen in einen Turnus überführen",
    ],
    boundaries: [
      "keine hoheitliche Kontrolle oder Entscheidung",
      "keine Bewachung und kein Sicherheitsdienst",
      "keine technische oder sachverständige Prüfung",
      "keine automatische Mängelfreigabe oder Abnahme",
    ],
    pilot:
      "Ein Ortsteil oder eine definierte Route mit bis zu drei Erfassungsmodulen und vollständiger Ergebnisübergabe.",
    faq: [
      {
        question: "Welche Aufgaben lassen sich auf einer Route kombinieren?",
        answer:
          "Alle einfachen Sicht-, Bestands- und Dokumentationsaufgaben, die dieselben Wege nutzen und anhand eines klaren Kriterienkatalogs bearbeitet werden können.",
      },
      {
        question: "Muss die Kommune eine neue Software einführen?",
        answer:
          "Nein. Die Übergabe kann zunächst in einem vorhandenen Format erfolgen. Eine Systemanbindung ist nur sinnvoll, wenn sie den Ablauf wirklich vereinfacht.",
      },
      {
        question: "Wer bewertet einen gemeldeten Mangel?",
        answer:
          "Die zuständige kommunale Fachstelle. KommunalRoutine erfasst sichtbare Zustände und bereitet Daten auf, trifft aber keine fachliche oder hoheitliche Entscheidung.",
      },
    ],
    relatedArticles: [
      "kommunale-routineaufgaben-auslagern",
      "gemeinderundgang-mit-kriterienkatalog",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "starkregen-bereitschaftsdokumentation",
    icon: "rain",
    title: "Starkregen-Bereitschaftsdokumentation",
    shortTitle: "Starkregenpunkte",
    eyebrow: "Bekannte Punkte im Blick behalten",
    summary:
      "Kritische Einläufe, Rechen, Durchlässe und Abflusswege nach kommunaler Vorgabe anfahren, fotografieren und Auffälligkeiten zügig melden.",
    problem:
      "Gefahrenkarten und Handlungskonzepte benennen kritische Punkte. Im Alltag fehlt jedoch häufig die Zeit, diese Stellen wiederkehrend anzufahren und ihren sichtbaren Zustand nachvollziehbar festzuhalten.",
    benefit:
      "Die zuständige Stelle erhält einen aktuellen, vergleichbaren Überblick über bekannte Punkte – vor einer Wetterlage, im Regelturnus oder nach einem Ereignis.",
    useCases: [
      "Dokumentationsrunde vor angekündigtem Starkregen",
      "regelmäßige Aufnahme bekannter Einläufe und Durchlässe",
      "Nachher-Dokumentation nach einem Ereignis",
      "Vergleich des sichtbaren Zustands über mehrere Termine",
    ],
    deliverables: [
      "Fotodokumentation je vorgegebenem Kontrollpunkt",
      "GPS-Position, Datum, Uhrzeit und vereinbarter Status",
      "Sofortmeldung bei zuvor definierten Auffälligkeiten",
      "übersichtliche Ergebnis- und Maßnahmenliste",
      "optional Vorher-/Nachher-Vergleich",
    ],
    process: [
      "Kommune liefert Punkte und Beobachtungskriterien",
      "Pilotroute und Meldeweg werden getestet",
      "Dokumentationsrunde wird zum vereinbarten Anlass gefahren",
      "Fachstelle bewertet und veranlasst weitere Maßnahmen",
    ],
    boundaries: [
      "keine hydraulische oder wasserrechtliche Bewertung",
      "keine Kanalbefahrung oder Bauwerksprüfung",
      "keine Reinigung, sofern nicht separat fachgerecht vergeben",
      "keine Garantie der Funktions- oder Überflutungssicherheit",
    ],
    pilot:
      "Dokumentation einer kompakten Route bekannter Starkregenpunkte mit abgestimmter Ampel- und Fotoliste.",
    faq: [
      {
        question: "Ist das eine technische Kontrolle der Entwässerung?",
        answer:
          "Nein. Erfasst wird ausschließlich der sichtbare Zustand nach den Kriterien der Kommune. Technische und hydraulische Bewertungen bleiben bei den Fachstellen.",
      },
      {
        question: "Kann die Runde kurzfristig vor Starkregen erfolgen?",
        answer:
          "Ein ereignisbezogener Abruf kann vertraglich vereinbart werden. Gebiet, Reaktionszeit und Auslöser müssen dafür vorab eindeutig feststehen.",
      },
      {
        question: "Wer beseitigt eine Blockade?",
        answer:
          "Das entscheidet die Kommune. Die Beseitigung übernimmt der Bauhof oder ein dafür geeigneter Fachbetrieb; die Dokumentationsleistung endet grundsätzlich bei der Meldung.",
      },
    ],
    relatedArticles: [
      "starkregenpunkte-regelmaessig-dokumentieren",
      "gemeinderundgang-mit-kriterienkatalog",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "lichtraumprofil-ueberwuchserfassung",
    icon: "leaf",
    title: "Lichtraumprofil- und Überwuchserfassung",
    shortTitle: "Überwuchserfassung",
    eyebrow: "Saisonale Auffälligkeiten strukturiert aufnehmen",
    summary:
      "Sichtbaren Überwuchs an Gehwegen, Fahrbahnen, Schildern und Sichtbereichen geordnet mit Foto und Standort für die kommunale Bearbeitung erfassen.",
    problem:
      "Vegetation wächst saisonal und verteilt sich über das gesamte Gemeindegebiet. Gerade die systematische Erstaufnahme beansprucht viel Außendienstzeit.",
    benefit:
      "Die Verwaltung erhält eine gebietsweise Arbeitsliste und kann mögliche Fälle einheitlich prüfen, priorisieren und selbst weiterbearbeiten.",
    useCases: [
      "saisonale Befahrung von Wohn- und Gewerbegebieten",
      "Erfassung verdeckter Verkehrszeichen oder Leuchten",
      "Dokumentation eingeschränkter Gehwegbreiten",
      "Nachkontrolle zuvor benannter Standorte",
    ],
    deliverables: [
      "Übersichtsfoto und Detailfoto je Auffälligkeit",
      "Adresse oder GPS-Position",
      "Kategorie nach kommunalem Kriterienkatalog",
      "gebietsweise sortierte Ergebnisliste",
      "optional Entwürfe für die interne Fallanlage",
    ],
    process: [
      "Gebiet und sichtbare Kriterien festlegen",
      "Referenzfälle gemeinsam einordnen",
      "Erfassungsfahrt durchführen",
      "Fachstelle prüft rechtlich und veranlasst Folgeschritte",
    ],
    boundaries: [
      "keine Baumkontrolle nach Fachregelwerk",
      "keine rechtliche Bewertung eines Verstoßes",
      "keine behördliche Aufforderung an Eigentümer",
      "kein Rückschnitt oder Eingriff in Vegetation",
    ],
    pilot:
      "Eine abgegrenzte Befahrung eines Ortsteils mit kommunal abgestimmten Beispielen und Ergebnisliste.",
    faq: [
      {
        question: "Wird das Lichtraumprofil vermessen?",
        answer:
          "Nur wenn ein ausdrücklich vereinbartes, einfaches Messverfahren vorgegeben wird. Im Kern handelt es sich um eine strukturierte Erfassung sichtbarer Auffälligkeiten, nicht um eine Fachprüfung.",
      },
      {
        question: "Wer schreibt Grundstückseigentümer an?",
        answer:
          "Die Kommune. Sie bewertet den Sachverhalt und entscheidet über jede behördliche Kommunikation.",
      },
      {
        question: "Ist eine flächendeckende Befahrung möglich?",
        answer:
          "Ja. Sinnvoll ist meist ein Pilotgebiet, aus dem sich Aufwand, Routendichte und ein belastbarer Gesamtpreis ableiten lassen.",
      },
    ],
    relatedArticles: [
      "lichtraumprofil-kommunal-erfassen",
      "gemeinderundgang-mit-kriterienkatalog",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "maengelmelder-backoffice",
    icon: "inbox",
    title: "Mängelmelder-Backoffice",
    shortTitle: "Mängelmelder-Backoffice",
    eyebrow: "Eingänge vorsortieren, Fachstellen entlasten",
    summary:
      "Eingehende Meldungen im bestehenden System sichten, Dubletten kennzeichnen, nach Vorgabe kategorisieren und an zuständige Stellen vorbereiten.",
    problem:
      "Ein digitaler Mängelmelder bündelt den Eingangskanal, beseitigt aber nicht die tägliche Sichtungs-, Datenschutz- und Sortierarbeit.",
    benefit:
      "Fachmitarbeitende beginnen mit einem geordneten Vorgang statt mit einem ungefilterten Postfach. Bearbeitungsregeln und Freigaben bleiben vollständig bei der Kommune.",
    useCases: [
      "tägliche oder mehrmals wöchentliche Eingangssichtung",
      "Dubletten- und Kategorienkennzeichnung",
      "Vorbereitung der Zuständigkeitszuordnung",
      "Pflege vereinbarter Statusinformationen",
    ],
    deliverables: [
      "Bearbeitung nach kommunaler Zuständigkeitsmatrix",
      "Kennzeichnung möglicher Dubletten",
      "Markierung personenbezogener oder ungeeigneter Inhalte",
      "standardisierte Rückfragen- und Antwortentwürfe",
      "regelmäßige Mengen- und Bearbeitungsübersicht",
    ],
    process: [
      "Rollen, Freigaben und Datenschutzrahmen definieren",
      "Testbetrieb mit begrenzter Kategorie starten",
      "Entscheidungsfälle konsequent an die Kommune geben",
      "Bearbeitungsregeln anhand des Piloten schärfen",
    ],
    boundaries: [
      "keine Sach- oder Rechtsentscheidung",
      "keine Veröffentlichung ohne Freigaberegel",
      "keine eigenständige Zusage kommunaler Maßnahmen",
      "Produktivbetrieb nur mit passender Datenschutz- und AVV-Struktur",
    ],
    pilot:
      "Vier Wochen Eingangsbearbeitung für ausgewählte Kategorien mit dokumentierter Zuständigkeits- und Eskalationsmatrix.",
    faq: [
      {
        question: "Braucht die Kommune ein neues Mängelmeldersystem?",
        answer:
          "Nein. Ziel ist die Bedienung des bestehenden Prozesses. Vor dem Pilot wird lediglich geklärt, wie ein sicherer Zugriff oder eine geeignete Übergabe möglich ist.",
      },
      {
        question: "Wer entscheidet, ob eine Meldung berechtigt ist?",
        answer:
          "Ausschließlich die zuständige Fachstelle. Das Backoffice sortiert und bereitet vor.",
      },
      {
        question: "Wie wird Datenschutz berücksichtigt?",
        answer:
          "Vor Produktivbetrieb werden Zweck, Rollen, Zugriffe, Löschregeln, technische Maßnahmen und – soweit erforderlich – ein Auftragsverarbeitungsvertrag festgelegt.",
      },
    ],
    relatedArticles: [
      "maengelmelder-backoffice-organisieren",
      "datenschutz-im-kommunalen-maengelmelder",
      "kommunale-routineaufgaben-auslagern",
    ],
  },
  {
    slug: "notfalltreffpunkt-inventur",
    icon: "shield",
    title: "Notfalltreffpunkt-Inventur",
    shortTitle: "Notfalltreffpunkt-Inventur",
    eyebrow: "Bestände und Unterlagen nachvollziehbar halten",
    summary:
      "Ausstattung, Beschilderung, Unterlagen, Verfallsdaten und dokumentierte Wartungsstände anhand Ihrer Checkliste aufnehmen.",
    problem:
      "Notfalltreffpunkte schaffen neue Materialbestände und wiederkehrende organisatorische Aufgaben. Ohne festen Turnus verlieren Listen und Ansprechpartner schnell an Aktualität.",
    benefit:
      "Die verantwortliche Stelle erhält eine übersichtliche Inventur- und Fehlteilliste, ohne eigene Mitarbeitende für die vollständige Aufnahme abzustellen.",
    useCases: [
      "jährliche oder halbjährliche Bestandsaufnahme",
      "Abgleich von Ausstattung und Soll-Liste",
      "Kontrolle sichtbarer Beschilderung",
      "Dokumentation vorhandener Wartungsnachweise",
    ],
    deliverables: [
      "ausgefüllte kommunale Inventarcheckliste",
      "Fotodokumentation von Standort und Bestand",
      "Liste offensichtlicher Fehlteile und Verfallsdaten",
      "Abgleich von Unterlagen und Ansprechpartnern",
      "Hinweis auf fehlende dokumentierte Fachwartungen",
    ],
    process: [
      "Soll-Liste und rein organisatorische Kriterien übernehmen",
      "Zugänge und verantwortliche Begleitung abstimmen",
      "Bestand aufnehmen und Abweichungen dokumentieren",
      "Fachstelle veranlasst Beschaffung und technische Prüfungen",
    ],
    boundaries: [
      "keine technische Prüfung von Aggregaten oder Elektroanlagen",
      "keine Einsatzfreigabe",
      "keine Prüfung des Katastrophenschutzkonzepts",
      "keine medizinische oder sicherheitstechnische Fachprüfung",
    ],
    pilot:
      "Vollständige organisatorische Inventur eines Standorts anhand der vorhandenen Soll-Liste.",
    faq: [
      {
        question: "Wird ein Notstromaggregat getestet?",
        answer:
          "Nein. Erfasst wird nur, ob das Gerät vorhanden ist und ob ein geforderter Wartungsnachweis dokumentiert vorliegt. Technische Tests bleiben Fachbetrieben vorbehalten.",
      },
      {
        question: "Kann die offizielle Checkliste der Kommune verwendet werden?",
        answer:
          "Ja. Das ist sogar der bevorzugte Weg, weil Zuständigkeit und Bewertungsmaßstab dadurch eindeutig bleiben.",
      },
      {
        question: "Wer entscheidet über Ersatzbeschaffungen?",
        answer:
          "Die Kommune. Die Inventur liefert dafür eine nachvollziehbare Fehlteilliste.",
      },
    ],
    relatedArticles: [
      "notfalltreffpunkt-inventur-planen",
      "checklisten-und-bestandsdaten-pflegen",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "aufbruch-fotodokumentation",
    icon: "camera",
    title: "Aufbruch-Fotodokumentation",
    shortTitle: "Aufbruchdokumentation",
    eyebrow: "Zustände verlässlich festhalten",
    summary:
      "Vorher-, Zwischen- und Abschlusszustände von Aufbruchstellen standardisiert fotografieren und geordnet für die fachliche Bearbeitung übergeben.",
    problem:
      "Bei vielen laufenden Aufbruchstellen fehlt oft nicht die Fachkompetenz, sondern die Zeit für eine konsistente Vor-Ort-Dokumentation.",
    benefit:
      "Die Fachstelle erhält vollständige, eindeutig zugeordnete Bildserien und kann sich auf Bewertung, Abnahme und Gewährleistungsfragen konzentrieren.",
    useCases: [
      "Ausgangszustand vor Beginn dokumentieren",
      "vereinbarte Bauzwischenstände aufnehmen",
      "Abschlusszustand für die Fachstelle festhalten",
      "wiederkehrende Fotopunkte bei längeren Maßnahmen",
    ],
    deliverables: [
      "definierte Übersichts- und Detailaufnahmen",
      "Adresse/GPS, Datum, Uhrzeit und Vorgangsnummer",
      "geordnetes Vorher-/Nachher-Fotoprotokoll",
      "Hinweisliste rein sichtbarer Abweichungen",
      "Übergabe nach kommunaler Ablagestruktur",
    ],
    process: [
      "Fotopunkte und Benennungskonvention festlegen",
      "Pilotvorgang gemeinsam abgleichen",
      "Aufnahmen zum beauftragten Zeitpunkt erstellen",
      "Fachstelle nimmt Bewertung und Abnahme vor",
    ],
    boundaries: [
      "keine technische Abnahme oder Bauüberwachung",
      "keine Bewertung der Ausführungsqualität",
      "keine Gewährleistungs- oder Kostenentscheidung",
      "keine Verkehrsfreigabe",
    ],
    pilot:
      "Eine abgeschlossene Aufbruchstelle mit Vorher-/Nachher-Protokoll nach Ihrer Benennungs- und Ablagestruktur.",
    faq: [
      {
        question: "Ersetzt die Fotodokumentation eine Abnahme?",
        answer:
          "Nein. Sie liefert geordnete Tatsachengrundlagen. Abnahme und fachliche Beurteilung bleiben bei der Kommune oder einem beauftragten Fachbüro.",
      },
      {
        question: "Können vorhandene Vorgangsnummern übernommen werden?",
        answer:
          "Ja. Dateinamen, Ordnerstruktur und Übergabetabelle werden an den vorhandenen Prozess angepasst.",
      },
      {
        question: "Sind kurzfristige Einzeltermine möglich?",
        answer:
          "Ja, sofern Gebiet, Vorlauf und Mindestumfang vereinbart sind. Wirtschaftlicher sind meist gebündelte Routen.",
      },
    ],
    relatedArticles: [
      "strassenaufbrueche-fotografisch-dokumentieren",
      "gemeinderundgang-mit-kriterienkatalog",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "stadtmobiliar-standorterfassung",
    icon: "bench",
    title: "Stadtmobiliar- und Standorterfassung",
    shortTitle: "Stadtmobiliar",
    eyebrow: "Bestände aus dem öffentlichen Raum nutzbar machen",
    summary:
      "Bänke, Abfallbehälter, Poller, Spender, Schaukästen und weitere Standorte nach einheitlichem Schema aufnehmen oder vorhandene Daten aktualisieren.",
    problem:
      "Kleinteilige Bestände sind oft über Listen, Köpfe und einzelne Fachbereiche verteilt. Für Planung und Unterhaltung fehlt dann eine verlässliche Ausgangsbasis.",
    benefit:
      "Ein strukturierter Grundbestand erleichtert Routenplanung, Ersatzbeschaffung und spätere Pflege – ohne sofort ein neues Fachsystem einzuführen.",
    useCases: [
      "Erstaufnahme eines Bestands im Gemeindegebiet",
      "Abgleich einer vorhandenen Liste mit dem sichtbaren Bestand",
      "Fotodokumentation definierter Ausstattungsmerkmale",
      "regelmäßige Aktualisierungsrunde",
    ],
    deliverables: [
      "eindeutige Objekt-ID und Standort",
      "Foto und vereinbarte Stammdaten",
      "Status nach kommunaler Merkmalsliste",
      "CSV/Excel-Export oder vorbereitete Systemübergabe",
      "Liste nicht zuordenbarer oder fehlender Objekte",
    ],
    process: [
      "Objektarten und Pflichtfelder bestimmen",
      "kleines Referenzgebiet aufnehmen",
      "Datenqualität und Aufwand gemeinsam bewerten",
      "Gesamtgebiet in sinnvollen Losen erfassen",
    ],
    boundaries: [
      "keine technische Sicherheitsprüfung",
      "keine Wertermittlung",
      "keine Eigentums- oder Zuständigkeitsentscheidung",
      "keine Wartungsfreigabe",
    ],
    pilot:
      "Erstaufnahme einer Objektart in einem abgegrenzten Quartier inklusive abgestimmtem Datenexport.",
    faq: [
      {
        question: "Ist dafür ein GIS erforderlich?",
        answer:
          "Nein. Koordinaten und Stammdaten können zunächst als offene Tabelle geliefert werden. Eine GIS-Übergabe lässt sich bei Bedarf vorbereiten.",
      },
      {
        question: "Können vorhandene Inventarnummern genutzt werden?",
        answer:
          "Ja. Vorhandene IDs haben Vorrang; neue Kennzeichnungen erfolgen nur nach ausdrücklicher Vorgabe der Kommune.",
      },
      {
        question: "Wer bewertet die Verkehrssicherheit?",
        answer:
          "Die zuständige Fachstelle oder ein qualifizierter Prüfdienst. KommunalRoutine erhebt nur die vereinbarten sichtbaren Merkmale.",
      },
    ],
    relatedArticles: [
      "stadtmobiliar-bestaende-strukturiert-erfassen",
      "checklisten-und-bestandsdaten-pflegen",
      "kommunale-routineaufgaben-auslagern",
    ],
  },
  {
    slug: "bekanntmachungstafel-aushangservice",
    icon: "notice",
    title: "Bekanntmachungstafel- und Aushangservice",
    shortTitle: "Aushangservice",
    eyebrow: "Aushangrouten nachvollziehbar dokumentieren",
    summary:
      "Vorgegebene Dokumente an kommunalen Aushangstellen anbringen, austauschen oder abnehmen und jeden Schritt mit Zeit und Foto protokollieren.",
    problem:
      "Verteilte Aushangstellen verursachen wiederkehrende Fahrten und kleinteilige Terminüberwachung, obwohl die inhaltliche Entscheidung längst getroffen ist.",
    benefit:
      "Die Verwaltung übermittelt freigegebene Unterlagen und Fristen; die vereinbarte Route wird nachvollziehbar abgearbeitet und dokumentiert.",
    useCases: [
      "regelmäßige Ortsteilrouten",
      "Austausch freigegebener Bekanntmachungen",
      "dokumentierte Abnahme nach Fristende",
      "sichtbare Bestandsaufnahme von Schaukästen",
    ],
    deliverables: [
      "Routen- und Fristenliste",
      "Foto nach Anbringung oder Abnahme",
      "Datum, Uhrzeit und Standortnachweis",
      "Meldung bei nicht zugänglicher oder beschädigter Tafel",
      "abschließendes Aushangprotokoll",
    ],
    process: [
      "Aushangstellen und Übergabeprozess erfassen",
      "freigegebene Dokumente und Fristen übernehmen",
      "Route ausführen und jeden Schritt protokollieren",
      "Protokoll und Ausnahmen an die Kommune geben",
    ],
    boundaries: [
      "keine inhaltliche oder rechtliche Prüfung der Bekanntmachung",
      "keine Entscheidung über Fristen oder Veröffentlichungsform",
      "keine Änderung freigegebener Unterlagen",
      "keine Zusicherung der rechtlichen Wirksamkeit",
    ],
    pilot:
      "Ein vollständiger Aushang- und Abnahmezyklus auf einer kompakten, vorgegebenen Route.",
    faq: [
      {
        question: "Wer gibt Inhalt und Frist vor?",
        answer:
          "Ausschließlich die Kommune. KommunalRoutine übernimmt nur die organisatorische Ausführung und Dokumentation.",
      },
      {
        question: "Können Unterlagen auch gedruckt werden?",
        answer:
          "Das kann als definierter Prozessschritt vereinbart werden, sofern Format, Freigabe, Anzahl und Datenschutz eindeutig geregelt sind.",
      },
      {
        question: "Eignet sich der Service für einzelne Tafeln?",
        answer:
          "Meist lohnt er sich bei mehreren Standorten oder in Kombination mit anderen kommunalen Routinen.",
      },
    ],
    relatedArticles: [
      "kommunale-aushaenge-dokumentieren",
      "gemeinderundgang-mit-kriterienkatalog",
      "kommunale-routineaufgaben-auslagern",
    ],
  },
  {
    slug: "fahrrad-plakatierungsdokumentation",
    icon: "bike",
    title: "Fahrrad- und Plakatierungsdokumentation",
    shortTitle: "Fahrräder & Plakatierung",
    eyebrow: "Auffällige Standorte als Entscheidungsgrundlage erfassen",
    summary:
      "Mutmaßlich aufgegebene Fahrräder oder auffällige Plakatierungen mit Foto, Standort und kommunal definierten Merkmalen vorerfassen.",
    problem:
      "Verteilte Einzelfälle müssen zunächst gefunden und sauber zugeordnet werden, bevor die Verwaltung überhaupt rechtlich und fachlich entscheiden kann.",
    benefit:
      "Die zuständige Stelle erhält eine geordnete Vorauswahl statt unsortierter Hinweise und kann jeden Fall selbst bewerten und weiterverfolgen.",
    useCases: [
      "gebietsweise Fahrraderfassung nach sichtbaren Merkmalen",
      "Dokumentation auffälliger Plakatstandorte",
      "Nachaufnahme zu einem vorgegebenen Termin",
      "Kombination mit Quartiers- oder Stadtmobiliar-Routen",
    ],
    deliverables: [
      "Übersichts- und Detailfoto",
      "GPS/Adresse, Datum und Uhrzeit",
      "Merkmale nach kommunaler Checkliste",
      "eindeutige Fallnummer und Ergebnisliste",
      "optional Wiederholungsaufnahme ohne Eingriff",
    ],
    process: [
      "Merkmale und Ausschlussfälle definieren",
      "Referenzroute gemeinsam abstimmen",
      "sichtbare Auffälligkeiten dokumentieren",
      "Kommune entscheidet über Kennzeichnung, Verfügung oder Entfernung",
    ],
    boundaries: [
      "keine Feststellung der Herrenlosigkeit oder Rechtswidrigkeit",
      "keine Kennzeichnung, Beschlagnahme oder Entfernung",
      "keine Halterermittlung",
      "keine ordnungsrechtliche Tätigkeit",
    ],
    pilot:
      "Ein abgegrenztes Bahnhofs-, Innenstadt- oder Quartiersgebiet mit vollständiger, nummerierter Fallliste.",
    faq: [
      {
        question: "Wird entschieden, ob ein Fahrrad aufgegeben ist?",
        answer:
          "Nein. Dokumentiert werden nur die von der Kommune vorgegebenen sichtbaren Merkmale. Die rechtliche Einordnung bleibt vollständig bei der zuständigen Stelle.",
      },
      {
        question: "Wer entfernt Plakate oder Fahrräder?",
        answer:
          "Nur die Kommune oder ein dafür ausdrücklich beauftragter und geeigneter Dienstleister nach kommunaler Entscheidung.",
      },
      {
        question: "Kann eine spätere Nachaufnahme erfolgen?",
        answer:
          "Ja. Durch Fallnummer und Standort lässt sich ein zweiter sichtbarer Zustand nachvollziehbar zuordnen.",
      },
    ],
    relatedArticles: [
      "auffaellige-fahrraeder-vorerfassen",
      "gemeinderundgang-mit-kriterienkatalog",
      "sichtkontrolle-oder-fachpruefung",
    ],
  },
  {
    slug: "checklisten-datenpflege",
    icon: "database",
    title: "Checklisten- und Datenpflege-Service",
    shortTitle: "Checklisten & Datenpflege",
    eyebrow: "Kleine Datenbestände dauerhaft aktuell halten",
    summary:
      "Kommunale Listen, Standorte, Ansprechpartner und wiederkehrende Prüftermine nach klaren Regeln abgleichen, ergänzen und für Fachstellen vorbereiten.",
    problem:
      "Viele kleine Bestände sind für den Alltag wichtig, aber zu verteilt und zu selten genutzt, um im Tagesgeschäft konsequent gepflegt zu werden.",
    benefit:
      "Die Fachstelle behält die Datenhoheit und erhält einen verlässlichen Pflegeprozess mit dokumentierten Änderungen und klaren Rückfragen.",
    useCases: [
      "Abgleich von Ansprechpartner- und Standortlisten",
      "Vorbereitung wiederkehrender Terminlisten",
      "Übertragung papierbasierter Checklisten",
      "Plausibilisierung und Dublettenkennzeichnung",
    ],
    deliverables: [
      "bereinigte Arbeitskopie im vereinbarten Format",
      "Änderungs- und Rückfragenprotokoll",
      "Kennzeichnung fehlender Pflichtfelder",
      "Dubletten- und Plausibilitätshinweise",
      "wiederholbarer Pflegeablauf",
    ],
    process: [
      "Datenquelle, Verantwortlichkeit und Regeln klären",
      "kleinen Datenbestand als Pilot bearbeiten",
      "unklare Fälle getrennt zur Entscheidung vorlegen",
      "Pflegeintervall und Übergabe festlegen",
    ],
    boundaries: [
      "keine fachliche Freigabe oder Sachentscheidung",
      "keine eigenmächtige Änderung von Quelldaten",
      "keine Rechts- oder Vollständigkeitsgarantie",
      "Zugriff auf personenbezogene Daten nur mit passendem Datenschutzrahmen",
    ],
    pilot:
      "Bereinigung und strukturierte Rückgabe eines klar abgegrenzten Datenbestands mit Änderungsprotokoll.",
    faq: [
      {
        question: "Welche Dateiformate sind möglich?",
        answer:
          "Typischerweise Excel, CSV oder exportierte Systemlisten. Andere Formate werden im Pilot auf Eignung und sicheren Austausch geprüft.",
      },
      {
        question: "Wer entscheidet bei unklaren Daten?",
        answer:
          "Die zuständige Fachstelle. Unklare Fälle werden markiert und getrennt zur Entscheidung vorgelegt.",
      },
      {
        question: "Kann daraus ein regelmäßiger Prozess werden?",
        answer:
          "Ja. Nach einem Pilot lassen sich Umfang, Intervall, Eingangsquelle und Rückgabeformat belastbar festlegen.",
      },
    ],
    relatedArticles: [
      "checklisten-und-bestandsdaten-pflegen",
      "stadtmobiliar-bestaende-strukturiert-erfassen",
      "kommunale-routineaufgaben-auslagern",
    ],
  },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "kommunale-routineaufgaben-auslagern",
    title: "Kommunale Routineaufgaben auslagern: Was sich wirklich eignet",
    eyebrow: "Organisation",
    summary:
      "Nicht jede Aufgabe gehört nach außen. Gut auslagerbar sind klar beschreibbare Routinen mit messbarem Ergebnis und einer eindeutigen Entscheidungsgrenze.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "kommunale-rundgaenge",
    sections: [
      {
        heading: "Der beste Filter ist nicht die Größe der Aufgabe",
        paragraphs: [
          "Gerade kleine, wiederkehrende Tätigkeiten können unverhältnismäßig viel Koordinationszeit kosten. Entscheidend ist, ob Eingang, Bearbeitung und Ergebnis eindeutig beschrieben werden können.",
          "Eine sinnvolle externe Routine produziert eine verwertbare Übergabe. Die Kommune muss danach nicht erst Fotos sortieren, Standorte erraten oder Rückfragen rekonstruieren.",
        ],
      },
      {
        heading: "Vier Merkmale einer geeigneten Routine",
        paragraphs: [
          "Ein Pilot sollte nur gestartet werden, wenn Zuständigkeit und Leistungsgrenze schon vor dem ersten Einsatz verständlich sind.",
        ],
        bullets: [
          "wiederkehrender oder gebündelter Bedarf",
          "objektiv beschreibbare Schritte",
          "klar definierbares Übergabeformat",
          "fachliche und hoheitliche Entscheidung verbleibt bei der Kommune",
        ],
      },
      {
        heading: "Warum ein Pilot wichtiger ist als ein langes Lastenheft",
        paragraphs: [
          "An einer kleinen Route oder einem begrenzten Datenbestand zeigt sich schnell, welche Kriterien fehlen, wie dicht die Fälle liegen und welches Format intern tatsächlich weiterhilft.",
          "Erst nach diesem Test sollte ein Turnus, ein Mengengerüst oder eine größere Gebietsabdeckung vereinbart werden.",
        ],
      },
    ],
    faq: [
      {
        question: "Welche Aufgaben sollten nicht als einfache Routine vergeben werden?",
        answer:
          "Aufgaben mit hoheitlichen Entscheidungen, Fachprüfungen, Sicherheitsfreigaben oder unklarer Verantwortung gehören nicht in ein einfaches Routinemodell.",
      },
      {
        question: "Wie klein kann ein Pilot sein?",
        answer:
          "So klein, dass ein vollständiger Ablauf sichtbar wird: beispielsweise ein Ortsteil, eine Objektart oder vier Wochen Eingangsbearbeitung.",
      },
    ],
  },
  {
    slug: "starkregenpunkte-regelmaessig-dokumentieren",
    title: "Kritische Starkregenpunkte regelmäßig dokumentieren",
    eyebrow: "Starkregenvorsorge",
    summary:
      "Gefahrenkarten benennen sensible Stellen. Eine einfache, wiederholbare Fotodokumentation macht ihren sichtbaren Zustand für die Fachstelle vergleichbar.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "starkregen-bereitschaftsdokumentation",
    sections: [
      {
        heading: "Vom Konzept zur wiederkehrenden Aufgabe",
        paragraphs: [
          "Ein kommunales Starkregenkonzept ist die fachliche Grundlage. Im Betrieb entsteht daraus eine praktische Folgefrage: Wie bleibt der sichtbare Zustand bekannter Einläufe, Rechen, Durchlässe und Abflusswege im Blick?",
          "Eine dokumentierte Route ersetzt keine hydraulische Bewertung. Sie kann aber auffällige Veränderungen schnell und einheitlich an die zuständige Stelle melden.",
        ],
      },
      {
        heading: "Was eine verwertbare Aufnahme enthalten sollte",
        paragraphs: [
          "Vergleichbarkeit entsteht nur, wenn Standort, Blickrichtung und Statussystem vorher definiert sind.",
        ],
        bullets: [
          "eindeutige Punkt-ID und GPS-Position",
          "Übersichts- und Detailfoto aus definierter Perspektive",
          "Datum, Uhrzeit und Anlass der Runde",
          "wenige, klar benannte sichtbare Statusmerkmale",
          "separater Meldeweg für vorab festgelegte Dringlichkeitsfälle",
        ],
      },
      {
        heading: "Regelrunde und Ereignisrunde trennen",
        paragraphs: [
          "Ein planbarer Turnus und ein kurzfristiger Abruf vor oder nach einer Wetterlage sind organisatorisch unterschiedliche Produkte. Reaktionszeit, Auslöser und erreichbare Punktzahl müssen für Ereignisrunden gesondert vereinbart werden.",
        ],
      },
    ],
    faq: [
      {
        question: "Ist eine Fotodokumentation Hochwasserschutz?",
        answer:
          "Sie ist ein organisatorischer Baustein. Planung, Unterhaltung, Reinigung und fachliche Bewertung bleiben eigenständige kommunale oder technische Aufgaben.",
      },
      {
        question: "Wie oft sollte dokumentiert werden?",
        answer:
          "Das legt die Kommune risikobasiert fest. Kritikalität, örtliche Erfahrung, Jahreszeit und Ereignislage können zu unterschiedlichen Intervallen führen.",
      },
    ],
    sources: [
      {
        label: "Land Baden-Württemberg: Starkregen – Was können Kommunen tun?",
        href: "https://www.hochwasser.baden-wuerttemberg.de/-/r32-starkregenrisikomanagement",
      },
    ],
  },
  {
    slug: "lichtraumprofil-kommunal-erfassen",
    title: "Lichtraumprofil und Überwuchs kommunal erfassen",
    eyebrow: "Verkehrsraum",
    summary:
      "Eine saisonale Befahrung schafft eine geordnete Fallliste. Rechtliche Einordnung und weitere Schritte bleiben bewusst bei der Verwaltung.",
    readingMinutes: 5,
    updated: "2026-09-01",
    serviceSlug: "lichtraumprofil-ueberwuchserfassung",
    sections: [
      {
        heading: "Warum die Erstaufnahme so viel Zeit bindet",
        paragraphs: [
          "Überwuchs tritt verteilt, saisonal und in sehr unterschiedlicher Ausprägung auf. Ohne einheitliche Aufnahme entstehen Bilder ohne Standort, Doppelmeldungen und Fälle mit völlig unterschiedlicher Detailtiefe.",
          "Eine externe Erfassungsrunde ist dann sinnvoll, wenn sie nur sichtbare Merkmale sammelt und mögliche Verstöße nicht selbst beurteilt.",
        ],
      },
      {
        heading: "Ein Kriterienkatalog verhindert Grenzverschiebungen",
        paragraphs: [
          "Die Kommune definiert vorab, welche Situationen fotografiert und wie sie bezeichnet werden. Referenzbilder helfen stärker als lange Texte.",
        ],
        bullets: [
          "Vegetation ragt sichtbar in Geh- oder Fahrbereich",
          "Verkehrszeichen oder Leuchte ist sichtbar verdeckt",
          "Sichtbereich erscheint nach Referenzbild eingeschränkt",
          "Standort ist nicht sicher zuzuordnen und wird als Rückfrage markiert",
        ],
      },
      {
        heading: "Erfassung und Verwaltungshandeln bleiben getrennt",
        paragraphs: [
          "Ob ein Verstoß vorliegt, wer verantwortlich ist und ob eine Aufforderung ergeht, entscheidet die Kommune. Diese Trennung macht den Prozess fachlich sauber und schützt vor falschen Zusagen im Außendienst.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann ein Dienstleister Eigentümer direkt anschreiben?",
        answer:
          "Vorbereitende Entwürfe sind denkbar, aber Versand, Rechtsgrundlage und Einzelfallentscheidung sollten bei der Kommune bleiben.",
      },
      {
        question: "Ist das eine Baumkontrolle?",
        answer:
          "Nein. Baumkontrollen nach Fachregelwerken sind eine andere, qualifikationsgebundene Leistung und ausdrücklich nicht Teil der sichtbaren Überwuchserfassung.",
      },
    ],
  },
  {
    slug: "maengelmelder-backoffice-organisieren",
    title: "Mängelmelder-Backoffice sinnvoll organisieren",
    eyebrow: "Digitale Verwaltung",
    summary:
      "Software nimmt Meldungen entgegen. Eine klare Zuständigkeitsmatrix entscheidet, ob daraus tatsächlich ein effizienter Verwaltungsprozess wird.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "maengelmelder-backoffice",
    sections: [
      {
        heading: "Der Eingangskanal ist noch kein Prozess",
        paragraphs: [
          "Mängelmelder bündeln Hinweise, aber jede Meldung muss weiterhin gelesen, kategorisiert, auf Dubletten geprüft und einer zuständigen Stelle zugeordnet werden.",
          "Ein Backoffice lohnt sich, wenn Regeln so eindeutig sind, dass Standardfälle vorbereitet und Zweifelsfälle schnell eskaliert werden können.",
        ],
      },
      {
        heading: "Was vor einem Pilot feststehen muss",
        paragraphs: [
          "Ein sicherer Test beginnt mit wenigen Kategorien und einer kleinen Gruppe kommunaler Ansprechpartner.",
        ],
        bullets: [
          "Kategorien und interne Zuständigkeiten",
          "Regeln für Dubletten und unvollständige Meldungen",
          "Freigaben für Veröffentlichung und Antworten",
          "Umgang mit personenbezogenen oder problematischen Inhalten",
          "Eskalationsweg bei Gefahrhinweisen oder unklaren Fällen",
        ],
      },
      {
        heading: "Die Fachentscheidung bleibt intern",
        paragraphs: [
          "Das Backoffice kann einen Vorgang geordnet vorbereiten. Ob ein Mangel vorliegt, welche Maßnahme erfolgt und was einem Bürger zugesagt wird, entscheidet die zuständige Stelle.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann das Backoffice Bürgerantworten versenden?",
        answer:
          "Nur innerhalb ausdrücklich freigegebener Textbausteine und Rollen. Individuelle Zusagen oder Rechtsauskünfte bleiben ausgeschlossen.",
      },
      {
        question: "Wie beginnt man ohne Systemzugriff?",
        answer:
          "Ein Pilot kann mit einem sicheren Export oder einer abgegrenzten Übergabe starten. Der dauerhafte Zugriff wird erst nach Rollen- und Datenschutzprüfung eingerichtet.",
      },
    ],
  },
  {
    slug: "datenschutz-im-kommunalen-maengelmelder",
    title: "Datenschutz im kommunalen Mängelmelder-Backoffice",
    eyebrow: "Datenschutz",
    summary:
      "Externe Unterstützung ist organisatorisch möglich, braucht aber klare Rollen, minimale Zugriffe, Löschregeln und einen belastbaren Vertrag.",
    readingMinutes: 7,
    updated: "2026-09-01",
    serviceSlug: "maengelmelder-backoffice",
    sections: [
      {
        heading: "Datenschutz beginnt vor dem ersten Zugriff",
        paragraphs: [
          "Bürgerhinweise können Namen, Kontaktdaten, Kennzeichen, Gesichter oder Informationen über Dritte enthalten. Deshalb darf ein externer Prozess nicht einfach mit einem gemeinsamen Postfach beginnen.",
          "Zuerst sind Zweck, Datenarten, Verantwortlichkeiten und technische Zugriffe zu beschreiben. Erst danach lässt sich beurteilen, welche vertragliche und technische Struktur nötig ist.",
        ],
      },
      {
        heading: "Praktische Mindestfragen",
        paragraphs: [
          "Ein schlanker Prozess kann trotzdem datenschutzbewusst sein, wenn er konsequent nach dem Need-to-know-Prinzip gebaut wird.",
        ],
        bullets: [
          "Welche Felder braucht das Backoffice wirklich?",
          "Welche Inhalte dürfen veröffentlicht werden?",
          "Wer kann Originalbilder und Kontaktdaten sehen?",
          "Wann werden Arbeitskopien und Exporte gelöscht?",
          "Wie werden Zugriffe, Vorfälle und Rückfragen dokumentiert?",
        ],
      },
      {
        heading: "Pilot nur mit realistischen Datenregeln",
        paragraphs: [
          "Auch ein Pilot benötigt sichere Übertragungswege und klare Löschregeln. Wo möglich, kann mit einer eng begrenzten Kategorie oder pseudonymisierten Beispieldaten begonnen werden.",
        ],
      },
    ],
    faq: [
      {
        question: "Ist immer ein Auftragsverarbeitungsvertrag nötig?",
        answer:
          "Das hängt von Rolle und konkreter Verarbeitung ab und muss von der Kommune datenschutzrechtlich eingeordnet werden. Bei weisungsgebundener Verarbeitung personenbezogener Daten ist eine AVV-Prüfung regelmäßig zentral.",
      },
      {
        question: "Darf ein Dienstleister Meldungen veröffentlichen?",
        answer:
          "Nur nach eindeutigem, datenschutzkonformem Freigabeverfahren. In einem vorsichtigen Startmodell verbleibt die Veröffentlichungsentscheidung bei der Kommune.",
      },
    ],
    sources: [
      {
        label: "LfDI Baden-Württemberg: Tipps für Kommunen zu Mängelmeldern",
        href: "https://www.baden-wuerttemberg.datenschutz.de/tipps-fuer-kommunen-die-maengelmelder-nutzen-wollen/",
      },
    ],
  },
  {
    slug: "notfalltreffpunkt-inventur-planen",
    title: "Eine organisatorische Notfalltreffpunkt-Inventur planen",
    eyebrow: "Krisenvorsorge",
    summary:
      "Eine gute Inventur trennt Bestandsaufnahme von technischer Prüfung und liefert der verantwortlichen Stelle eine klare Fehlteilliste.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "notfalltreffpunkt-inventur",
    sections: [
      {
        heading: "Soll-Liste, Standort und Verantwortlichkeit verbinden",
        paragraphs: [
          "Materiallisten allein zeigen nicht, ob Ausrüstung am richtigen Ort liegt, Unterlagen aktuell sind oder Beschilderung sichtbar vorhanden ist.",
          "Eine organisatorische Inventur verbindet den physischen Bestand mit Standort, Ansprechpartner und vorhandenen Nachweisen.",
        ],
      },
      {
        heading: "Was organisatorisch aufgenommen werden kann",
        paragraphs: [
          "Der Auftrag sollte ausdrücklich bei beobachtbaren und dokumentierbaren Merkmalen bleiben.",
        ],
        bullets: [
          "vorhanden, nicht vorhanden oder nicht auffindbar",
          "Menge und Lagerort nach Soll-Liste",
          "sichtbare Verfalls- und Ablaufdaten",
          "Version und Datum von Unterlagen",
          "Vorhandensein dokumentierter Wartungsnachweise",
        ],
      },
      {
        heading: "Technische Prüfungen getrennt beauftragen",
        paragraphs: [
          "Ob ein Aggregat funktioniert, eine Elektroinstallation sicher ist oder eine Ausrüstung einsatzbereit freigegeben werden kann, gehört in fachkundige Hände. Die Inventur weist nur darauf hin, wenn ein geforderter Nachweis fehlt.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann eine Inventur ohne technische Ausbildung erfolgen?",
        answer:
          "Eine rein organisatorische Bestandsaufnahme ja, wenn sie klar begrenzt ist. Technische Funktions- und Sicherheitsprüfungen sind davon strikt zu trennen.",
      },
      {
        question: "Welcher Turnus ist sinnvoll?",
        answer:
          "Das entscheidet die verantwortliche Stelle anhand von Material, Verfallsdaten, Standortänderungen und eigenem Krisenmanagement.",
      },
    ],
    sources: [
      {
        label: "Landesfeuerwehrschule Baden-Württemberg: Krisenmanagement der Gemeinden",
        href: "https://www.lfs-bw.de/themen/einsatzlehre-gefahrenpraevention/kats-krisenmanagement/gemeinden-kats-behoerden/",
      },
    ],
  },
  {
    slug: "strassenaufbrueche-fotografisch-dokumentieren",
    title: "Straßenaufbrüche fotografisch nachvollziehbar dokumentieren",
    eyebrow: "Dokumentation",
    summary:
      "Gute Bildserien entstehen nicht durch mehr Fotos, sondern durch feste Zeitpunkte, Perspektiven, Benennung und eindeutige Vorgangszuordnung.",
    readingMinutes: 5,
    updated: "2026-09-01",
    serviceSlug: "aufbruch-fotodokumentation",
    sections: [
      {
        heading: "Ein Foto ohne Kontext hilft selten",
        paragraphs: [
          "Für die spätere fachliche Bearbeitung müssen Aufnahmen einem Vorgang, einem Ort und einem Zeitpunkt zweifelsfrei zugeordnet sein.",
          "Ein kleines Fotokonzept mit Pflichtperspektiven verhindert, dass jede Person andere Details dokumentiert.",
        ],
      },
      {
        heading: "Ein schlankes Fotoprotokoll",
        paragraphs: [
          "Die genaue Struktur richtet sich nach dem kommunalen Prozess. Häufig reichen wenige konsequent gepflegte Felder.",
        ],
        bullets: [
          "Vorgangs- oder Genehmigungsnummer",
          "Adresse und GPS-Position",
          "Aufnahmezeitpunkt und Bauphase",
          "Übersicht aus wiederholbarer Blickrichtung",
          "Details nach vorgegebener Checkliste",
        ],
      },
      {
        heading: "Dokumentation ist keine Abnahme",
        paragraphs: [
          "Die Bildserie macht einen Zustand nachvollziehbar. Sie sagt nicht, ob die Ausführung technisch richtig, vertragsgemäß oder abnahmefähig ist. Diese Bewertung verbleibt bei der Fachstelle.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fotos sind erforderlich?",
        answer:
          "So viele wie das vorher definierte Fotokonzept verlangt. Einheitlichkeit ist wichtiger als eine hohe, aber unstrukturierte Bildzahl.",
      },
      {
        question: "Kann direkt in ein Fachsystem geliefert werden?",
        answer:
          "Wenn Schnittstelle, Berechtigung und Feldlogik geklärt sind. Für einen Pilot ist eine eindeutige Datei- und Tabellenstruktur oft schneller.",
      },
    ],
  },
  {
    slug: "stadtmobiliar-bestaende-strukturiert-erfassen",
    title: "Stadtmobiliar als nutzbaren Bestand erfassen",
    eyebrow: "Bestandsdaten",
    summary:
      "Ein schlanker Datensatz aus Objekt-ID, Standort, Foto und wenigen Pflichtmerkmalen ist oft wertvoller als eine überladene Inventarlösung.",
    readingMinutes: 5,
    updated: "2026-09-01",
    serviceSlug: "stadtmobiliar-standorterfassung",
    sections: [
      {
        heading: "Mit der späteren Nutzung beginnen",
        paragraphs: [
          "Vor der Erfassung sollte feststehen, wofür die Daten gebraucht werden: Routenplanung, Ersatzbeschaffung, Zuständigkeitsklärung oder Übernahme in ein Fachsystem.",
          "Jeder zusätzliche Pflichtwert kostet Zeit im Feld und bei der Datenpflege. Deshalb sollten nur Merkmale erfasst werden, die später tatsächlich genutzt werden.",
        ],
      },
      {
        heading: "Der kleinste brauchbare Datensatz",
        paragraphs: [
          "Für viele Objektarten genügt zunächst ein überschaubarer Kern.",
        ],
        bullets: [
          "eindeutige ID",
          "Objektart",
          "Standort oder Koordinate",
          "aktuelles Foto",
          "wenige definierte Merkmale und Erfassungsdatum",
        ],
      },
      {
        heading: "Pilotgebiet schützt vor teurer Übererfassung",
        paragraphs: [
          "Nach einem Quartier ist sichtbar, welche Felder unklar sind, wie viele Objekte auftreten und ob die Übergabe intern funktioniert. Erst dann sollte das gesamte Gemeindegebiet folgen.",
        ],
      },
    ],
    faq: [
      {
        question: "Muss jedes Objekt vor Ort markiert werden?",
        answer:
          "Nein. Eine digitale ID kann genügen. Physische Kennzeichnungen sollten nur nach kommunaler Entscheidung und mit einem dauerhaften Pflegekonzept erfolgen.",
      },
      {
        question: "Kann der Bestand später erweitert werden?",
        answer:
          "Ja. Ein sauberer Kerndatensatz lässt sich um fachbereichsspezifische Merkmale ergänzen, ohne die Erstaufnahme unnötig zu belasten.",
      },
    ],
  },
  {
    slug: "kommunale-aushaenge-dokumentieren",
    title: "Kommunale Aushänge lückenlos dokumentieren",
    eyebrow: "Aushangservice",
    summary:
      "Bei verteilten Bekanntmachungstafeln sorgen feste Übergaben, Fristenlisten und Fotoprotokolle für einen nachvollziehbaren Ablauf.",
    readingMinutes: 5,
    updated: "2026-09-01",
    serviceSlug: "bekanntmachungstafel-aushangservice",
    sections: [
      {
        heading: "Der Auftrag beginnt erst nach der Freigabe",
        paragraphs: [
          "Inhalt, Bekanntmachungsform und Frist werden von der Kommune festgelegt. Ein externer Aushangservice übernimmt ausschließlich die daraus folgende physische Route.",
          "Eine eindeutige Dokument-ID verhindert Verwechslungen bei mehreren Fassungen oder parallelen Aushängen.",
        ],
      },
      {
        heading: "Vier Nachweise pro Vorgang",
        paragraphs: [
          "Der genaue rechtliche Bedarf ist kommunal zu klären. Organisatorisch bewährt sich ein einfaches, durchgängiges Protokoll.",
        ],
        bullets: [
          "welches freigegebene Dokument",
          "welche Aushangstelle",
          "Zeitpunkt und Foto der Anbringung",
          "Zeitpunkt und Foto der Abnahme",
        ],
      },
      {
        heading: "Am wirtschaftlichsten als kombinierte Route",
        paragraphs: [
          "Einzelne Aushänge verursachen viel Fahrzeit. Interessant wird der Service bei mehreren Ortsteilen oder wenn auf derselben Route weitere einfache Bestands- und Dokumentationsaufgaben anfallen.",
        ],
      },
    ],
    faq: [
      {
        question: "Prüft der Dienstleister die Bekanntmachung?",
        answer:
          "Nein. Verwendet werden ausschließlich eindeutig freigegebene Dokumente der Kommune.",
      },
      {
        question: "Was passiert bei einer beschädigten Tafel?",
        answer:
          "Der Zustand wird dokumentiert und sofort über den vereinbarten Weg gemeldet. Die Kommune entscheidet über Ersatzort und weitere Schritte.",
      },
    ],
  },
  {
    slug: "auffaellige-fahrraeder-vorerfassen",
    title: "Auffällige Fahrräder vorerfassen, ohne vor Ort zu entscheiden",
    eyebrow: "Öffentlicher Raum",
    summary:
      "Eine geordnete Voraufnahme liefert Foto, Standort und sichtbare Merkmale. Ob ein Rad aufgegeben ist, entscheidet weiterhin die zuständige Stelle.",
    readingMinutes: 5,
    updated: "2026-09-01",
    serviceSlug: "fahrrad-plakatierungsdokumentation",
    sections: [
      {
        heading: "Vorerfassung ist nicht Feststellung",
        paragraphs: [
          "Beschädigte oder lange abgestellte Fahrräder können sehr unterschiedlich zu beurteilen sein. Eine externe Route sollte deshalb keine Herrenlosigkeit behaupten, sondern nur vorgegebene sichtbare Merkmale festhalten.",
          "Die geordnete Liste reduziert Such- und Aufnahmeaufwand, ohne ordnungsrechtliche Entscheidungen nach außen zu verlagern.",
        ],
      },
      {
        heading: "Eindeutige Fälle für die Nachbearbeitung",
        paragraphs: [
          "Jeder Datensatz braucht eine Fallnummer, einen genauen Standort und Bilder, die das Fahrrad sowie seine Umgebung zuordnen lassen.",
        ],
        bullets: [
          "Übersichts- und Detailfoto",
          "Standort und Art der Abstellanlage",
          "sichtbare Merkmale aus der kommunalen Checkliste",
          "Datum und gegebenenfalls Termin für eine Nachaufnahme",
        ],
      },
      {
        heading: "Alle Eingriffe bleiben bei der Kommune",
        paragraphs: [
          "Kennzeichnung, Fristsetzung, Umsetzung, Verwahrung und Verwertung folgen kommunalen Rechts- und Verfahrensregeln. Sie sind nicht Teil einer einfachen Dokumentationsroute.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann bei der Aufnahme ein Zettel angebracht werden?",
        answer:
          "Nicht im reinen Dokumentationsauftrag. Kennzeichnung und Fristsetzung erfolgen nur durch die Kommune oder auf einer gesonderten, rechtlich geprüften Beauftragung.",
      },
      {
        question: "Lohnt sich das in kleinen Gemeinden?",
        answer:
          "Eher als Modul einer ohnehin stattfindenden Quartiers- oder Bahnhofsrunde als als isolierter Einzelservice.",
      },
    ],
  },
  {
    slug: "checklisten-und-bestandsdaten-pflegen",
    title: "Checklisten und kleine Bestandsdaten dauerhaft pflegen",
    eyebrow: "Datenpflege",
    summary:
      "Ein klarer Änderungsprozess verhindert, dass wichtige Nebenlisten zwischen Fachbereichen, Dateien und personellem Wissen auseinanderlaufen.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "checklisten-datenpflege",
    sections: [
      {
        heading: "Nicht jede Liste braucht ein neues System",
        paragraphs: [
          "Für kleine, stabile Datenbestände kann eine sauber geführte Tabelle völlig ausreichend sein. Entscheidend sind eindeutige Verantwortlichkeit, Pflichtfelder und ein dokumentierter Änderungsweg.",
          "Ein externes Backoffice sollte niemals ungeklärte Werte überschreiben. Es bereitet Änderungen vor und trennt sichere Korrekturen von Entscheidungsfällen.",
        ],
      },
      {
        heading: "Ein belastbarer Pflegezyklus",
        paragraphs: [
          "Der Prozess wird leichter prüfbar, wenn jede Runde dieselben Schritte verwendet.",
        ],
        bullets: [
          "versionierte Ausgangsdatei übernehmen",
          "formale und vereinbarte Plausibilitätsregeln anwenden",
          "Änderungen und Dubletten separat protokollieren",
          "unklare Fälle an benannte Fachverantwortliche geben",
          "freigegebenen Stand geordnet zurückgeben und Arbeitskopien löschen",
        ],
      },
      {
        heading: "Datenschutz nach tatsächlichem Inhalt bemessen",
        paragraphs: [
          "Standort- und Inventardaten sind anders zu behandeln als Ansprechpartner- oder Bürgerdaten. Zugriff, Austausch und Löschung müssen zum sensibelsten verarbeiteten Datentyp passen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wer bleibt Eigentümer der Daten?",
        answer:
          "Die Kommune behält Datenhoheit und fachliche Verantwortung. Der Dienstleister arbeitet nur innerhalb des beauftragten Prozesses.",
      },
      {
        question: "Wie werden Änderungen nachvollziehbar?",
        answer:
          "Durch eine unveränderte Ausgangsversion, ein Änderungsprotokoll und eine klar bezeichnete Ergebnisversion.",
      },
    ],
  },
  {
    slug: "gemeinderundgang-mit-kriterienkatalog",
    title: "Gemeinderundgänge mit einem klaren Kriterienkatalog steuern",
    eyebrow: "Außendienst",
    summary:
      "Ein guter Kriterienkatalog macht aus subjektiven Eindrücken vergleichbare Daten und hält fachliche Entscheidungen bei der Kommune.",
    readingMinutes: 6,
    updated: "2026-09-01",
    serviceSlug: "kommunale-rundgaenge",
    sections: [
      {
        heading: "Die Route ist nur die halbe Leistung",
        paragraphs: [
          "Eine Befahrung wird erst dann verwertbar, wenn zwei Personen denselben sichtbaren Zustand ähnlich dokumentieren würden. Dafür braucht es wenige klare Merkmale, Referenzbilder und definierte Ausnahmewege.",
          "Freitext sollte eine Ergänzung sein, nicht die eigentliche Datenstruktur.",
        ],
      },
      {
        heading: "So bleibt der Katalog praxistauglich",
        paragraphs: [
          "Im Pilot zeigt sich schnell, welche Kategorien zu breit oder zu ähnlich sind.",
        ],
        bullets: [
          "pro Objekt nur Merkmale erfassen, die später genutzt werden",
          "Statuswerte kurz und gegenseitig eindeutig halten",
          "Referenzbilder für typische Fälle bereitstellen",
          "unklare Fälle immer als Rückfrage statt als Vermutung behandeln",
          "Sofortmeldungen auf wenige vorher definierte Situationen beschränken",
        ],
      },
      {
        heading: "Erst Pilot, dann Preis pro Route",
        paragraphs: [
          "Entfernung, Punktdichte, Fotoumfang und sichere Zugänglichkeit bestimmen den Aufwand. Ein realer Probelauf liefert dafür bessere Werte als eine rein theoretische Kalkulation.",
        ],
      },
    ],
    faq: [
      {
        question: "Wer erstellt den Kriterienkatalog?",
        answer:
          "KommunalRoutine kann die Struktur vorbereiten. Die fachlich zuständige Stelle bestätigt Kriterien, Beispiele und Meldegrenzen.",
      },
      {
        question: "Wie werden neue Falltypen behandelt?",
        answer:
          "Zunächst als Rückfrage dokumentiert. Erst nach kommunaler Freigabe wird daraus gegebenenfalls ein neuer Standardwert.",
      },
    ],
  },
  {
    slug: "sichtkontrolle-oder-fachpruefung",
    title: "Sichtdokumentation oder Fachprüfung? Die wichtige Leistungsgrenze",
    eyebrow: "Leistungsgrenzen",
    summary:
      "Wer sichtbare Zustände erhebt, darf nicht den Eindruck erwecken, technische Sicherheit, Rechtskonformität oder Funktionsfähigkeit geprüft zu haben.",
    readingMinutes: 7,
    updated: "2026-09-01",
    serviceSlug: "kommunale-rundgaenge",
    sections: [
      {
        heading: "Worte verändern die Verantwortung",
        paragraphs: [
          "Begriffe wie Abnahme, Sicherheitsprüfung, Freigabe oder Verkehrssicherheitskontrolle beschreiben mehr als eine Fotodokumentation. Sie können Fachkunde, Prüfmaßstäbe und weitreichende Erwartungen auslösen.",
          "Eine sauber begrenzte Routine benennt deshalb genau, was beobachtet und geliefert wird – und ebenso deutlich, was nicht Gegenstand des Auftrags ist.",
        ],
      },
      {
        heading: "Merkmale einer reinen Sichtdokumentation",
        paragraphs: [
          "Die Leistung bleibt bei Tatsachen, die ohne vertiefte fachliche Untersuchung nach einem vorgegebenen Schema aufgenommen werden können.",
        ],
        bullets: [
          "kommunal vorgegebene Punkte und Kriterien",
          "Foto, Ort, Zeit und neutraler Status",
          "keine Ursachenbehauptung",
          "keine technische oder rechtliche Schlussfolgerung",
          "Weitergabe an die zuständige Fachstelle",
        ],
      },
      {
        heading: "Die Leistungsgrenze gehört ins Angebot und in den Ablauf",
        paragraphs: [
          "Ein Haftungsausschluss im Kleingedruckten genügt nicht, wenn der tatsächliche Prozess zur fachlichen Entscheidung drängt. Mitarbeitende brauchen klare Eskalationsregeln und dürfen Zweifelsfälle bewusst offenlassen.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann eine Sichtdokumentation trotzdem dringende Hinweise melden?",
        answer:
          "Ja, wenn dafür ein neutraler, vorab definierter Meldeweg besteht. Die Meldung ist keine fachliche Freigabe oder abschließende Gefahrenbewertung.",
      },
      {
        question: "Ersetzt eine ausführliche Checkliste die Fachkunde?",
        answer:
          "Nein. Eine Checkliste strukturiert Beobachtungen, macht aus einer nicht fachkundigen Aufnahme aber keine qualifizierte Fachprüfung.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(service: Service) {
  return service.relatedArticles
    .map((slug) => getArticle(slug))
    .filter((article): article is KnowledgeArticle => Boolean(article));
}
