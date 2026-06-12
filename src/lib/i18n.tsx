import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pl" | "it";

type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    pricing: string;
  };
  home: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    cta1: string;
    cta2: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    list: { label: string; value: string }[];
  };
  services: {
    badge: string;
    title: string;
    desc: string;
    items: { title: string; desc: string; list: string[] }[];
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    phoneTitle: string;
    phoneDesc: string;
    officeTitle: string;
    officeAction: string;
    pricingTitle: string;
    pricingDesc: string;
    pricingAction: string;
  };
};

export const dictionaries: Record<Language, Translations> = {
  pl: {
    nav: {
      home: "Strona główna",
      about: "O mnie",
      services: "Usługi",
      contact: "Kontakt",
      pricing: "Wycena",
    },
    home: {
      badge: "Tłumacz przysięgły języka włoskiego",
      title1: "Profesjonalne tłumaczenia włoskie,",
      title2: "którym możesz",
      desc: "Oferta dla osób prywatnych i firm: tłumaczenia przysięgłe, prawne, biznesowe oraz usługi ustne z języka włoskiego. Wszystko w jednym miejscu — we Wrocławiu i online.",
      cta1: "Umów wycenę",
      cta2: "Poznaj mnie",
    },
    about: {
      badge: "O mnie",
      title: "Tłumacz przysięgły z pasją do języka włoskiego.",
      p1: "Nazywam się Paula Janowska-Kiełkiewicz. Od lat specjalizuję się w tłumaczeniach przysięgłych i kontaktach formalnych między Polską a Włochami. W mojej pracy łączę znajomość języka, praktykę prawną i staranność w dopracowaniu szczegółów.",
      p2: "Każdy dokument traktuję indywidualnie, dbając o terminologię, kontekst i pełną dyskrecję. Dla klientów prywatnych i firm realizuję zlecenia zarówno stacjonarnie we Wrocławiu, jak i zdalnie.",
      list: [
        { label: "Wpisana na listę", value: "Ministra Sprawiedliwości" },
        { label: "Filologia włoska", value: "Studia magisterskie i podyplomowe" },
        { label: "Doświadczenie", value: "Praktyka od 2005 roku" },
      ],
    },
    services: {
      badge: "Usługi",
      title: "Kompleksowe tłumaczenia włoskie.",
      desc: "Oferuję wsparcie w tłumaczeniach przysięgłych, prawnych, biznesowych i ustnych. Każda usługa jest dopasowana do formalnych wymogów i kontekstu klienta.",
      items: [
        {
          title: "Tłumaczenia przysięgłe",
          desc: "Dokumenty z mocą urzędową — opatrzone pieczęcią tłumacza przysięgłego.",
          list: [
            "Akty urodzenia, małżeństwa, zgonu",
            "Dyplomy, świadectwa, suplementy",
            "Akty notarialne i pełnomocnictwa",
            "Dokumenty samochodowe",
          ],
        },
        {
          title: "Tłumaczenia prawne",
          desc: "Precyzyjne tłumaczenia umów i dokumentów sądowych.",
          list: [
            "Umowy handlowe i cywilnoprawne",
            "Wyroki, postanowienia, pisma procesowe",
            "Statuty spółek, KRS",
            "Korespondencja kancelarii",
          ],
        },
        {
          title: "Tłumaczenia biznesowe",
          desc: "Wsparcie firm w relacjach z partnerami z Włoch.",
          list: [
            "Oferty handlowe i prezentacje",
            "Dokumentacja techniczna",
            "Strony internetowe i materiały marketingowe",
            "Korespondencja biznesowa",
          ],
        },
        {
          title: "Tłumaczenia ustne",
          desc: "Tłumaczenia konsekutywne — towarzyszę Państwu osobiście.",
          list: [
            "U notariusza i w USC",
            "Spotkania biznesowe i negocjacje",
            "Rozprawy sądowe",
            "Konferencje i wydarzenia",
          ],
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Porozmawiajmy o Twoim tłumaczeniu.",
      desc: "Napisz lub zadzwoń, a przygotuję wycenę i terminową realizację dokumentów włoskich.",
      phoneTitle: "Telefon",
      phoneDesc: "Pn–Pt, 9:00–17:00",
      officeTitle: "Biuro",
      officeAction: "Wyznacz trasę",
      pricingTitle: "Wycena",
      pricingDesc: "Prześlij dokumenty, a przygotuję bezpłatną i pewną wycenę.",
      pricingAction: "Wyślij dokumenty do wyceny",
    },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      services: "Servizi",
      contact: "Contatti",
      pricing: "Preventivo",
    },
    home: {
      badge: "Traduttrice giurata di lingua italiana",
      title1: "Traduzioni professionali in italiano,",
      title2: "di cui ti puoi",
      desc: "Offerta per privati e aziende: traduzioni giurate, legali, commerciali e interpretariato in italiano. Tutto in un unico posto — a Breslavia e online.",
      cta1: "Richiedi preventivo",
      cta2: "Scopri di più",
    },
    about: {
      badge: "Chi sono",
      title: "Traduttrice giurata con la passione per l'italiano.",
      p1: "Mi chiamo Paula Janowska-Kiełkiewicz. Da anni sono specializzata in traduzioni giurate e contatti formali tra Polonia e Italia. Nel mio lavoro unisco la conoscenza della lingua, la pratica legale e la cura dei dettagli.",
      p2: "Tratto ogni documento individualmente, curando la terminologia, il contesto e la totale discrezione. Per clienti privati e aziende, realizzo incarichi sia in sede a Breslavia che a distanza.",
      list: [
        { label: "Iscritta all'albo", value: "del Ministero della Giustizia" },
        { label: "Filologia italiana", value: "Laurea magistrale e studi post-laurea" },
        { label: "Esperienza", value: "Pratica dal 2005" },
      ],
    },
    services: {
      badge: "Servizi",
      title: "Traduzioni complete in italiano.",
      desc: "Offro supporto per traduzioni giurate, legali, commerciali e interpretariato. Ogni servizio è adattato ai requisiti formali e al contesto del cliente.",
      items: [
        {
          title: "Traduzioni giurate",
          desc: "Documenti con valore ufficiale — con il timbro del traduttore giurato.",
          list: [
            "Certificati di nascita, matrimonio, morte",
            "Diplomi, certificati, supplementi",
            "Atti notarili e procure",
            "Documenti automobilistici",
          ],
        },
        {
          title: "Traduzioni legali",
          desc: "Traduzioni precise di contratti e documenti giudiziari.",
          list: [
            "Contratti commerciali e civili",
            "Sentenze, ordinanze, atti processuali",
            "Statuti societari, visure camerali (KRS)",
            "Corrispondenza di studi legali",
          ],
        },
        {
          title: "Traduzioni commerciali",
          desc: "Supporto alle aziende nelle relazioni con i partner in Italia.",
          list: [
            "Offerte commerciali e presentazioni",
            "Documentazione tecnica",
            "Siti web e materiali di marketing",
            "Corrispondenza aziendale",
          ],
        },
        {
          title: "Interpretariato",
          desc: "Interpretariato consecutiva — vi accompagno personalmente.",
          list: [
            "Dal notaio e all'Anagrafe (USC)",
            "Incontri di lavoro e negoziazioni",
            "Udienze in tribunale",
            "Conferenze ed eventi",
          ],
        },
      ],
    },
    contact: {
      badge: "Contatti",
      title: "Parliamo della tua traduzione.",
      desc: "Scrivimi o chiamami, preparerò un preventivo e realizzerò puntualmente la traduzione dei tuoi documenti italiani.",
      phoneTitle: "Telefono",
      phoneDesc: "Lun-Ven, 9:00-17:00",
      officeTitle: "Ufficio",
      officeAction: "Indicazioni stradali",
      pricingTitle: "Preventivo",
      pricingDesc: "Invia i documenti, preparerò un preventivo gratuito e sicuro.",
      pricingAction: "Invia documenti per preventivo",
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");

  const value = {
    language,
    setLanguage,
    t: dictionaries[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
