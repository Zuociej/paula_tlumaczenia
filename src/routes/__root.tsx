import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav"; // <-- Importujemy nawigację strony

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <>
      <SiteNav /> {/* Dodane menu na stronie 404 */}
      <div className="flex min-h-[calc(screen-80px)] items-center justify-center bg-background px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl text-primary">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Nie znaleziono strony</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <>
      <SiteNav /> {/* Dodane menu na stronie błędu */}
      <div className="flex min-h-[calc(screen-80px)] items-center justify-center bg-background px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold text-foreground">Coś poszło nie tak</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Spróbuj odświeżyć stronę lub wróć na stronę główną.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold"
            >
              Spróbuj ponownie
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Paula Janowska-Kiełkiewicz — Tłumacz przysięgły j. włoskiego" },
      {
        name: "description",
        content:
          "Tłumacz przysięgły języka włoskiego we Wrocławiu. Tłumaczenia urzędowe, prawne, biznesowe i ustne. Doświadczenie, profesjonalizm, zaufanie.",
      },
      {
        name: "keywords",
        content:
          "tłumacz przysięgły, włoski, Wrocław, tłumaczenia urzędowe, tłumaczenia prawne, tłumaczenia biznesowe, tłumaczenia ustne, dokumenty, język włoski, Poland, traduttore, giurato, italiano, Breslau, traduzioni, interprete, English translator, German, Ukraiński, translator, notarized",
      },
      { name: "language", content: "Polish" },
      { name: "author", content: "Paula Janowska-Kiełkiewicz" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        property: "og:title",
        content: "Paula Janowska-Kiełkiewicz — Tłumacz przysięgły j. włoskiego",
      },
      {
        property: "og:description",
        content:
          "Profesjonalne tłumaczenia przysięgłe, prawne, biznesowe i ustne z języka włoskiego we Wrocławiu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Paula Janowska-Kiełkiewicz — Tłumacz" },
      { property: "og:locale", content: "pl_PL" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Paula Janowska-Kiełkiewicz — Tłumacz przysięgły" },
      {
        name: "twitter:description",
        content: "Tłumaczenia przysięgłe, prawne, biznesowe i ustne z języka włoskiego",
      },

      { name: "geo.placename", content: "Wrocław, Poland" },
      { name: "geo.region", content: "PL-DS" },
      { name: "ICBM", content: "51.1079,17.0385" },
      { name: "msapplication-TileColor", content: "#2d89ef" },
      { name: "theme-color", content: "#ffffff" },

      {
        name: "description",
        lang: "pl",
        content:
          "Tłumacz przysięgły j. włoskiego we Wrocławiu. Tłumaczenia urzędowe, prawne i biznesowe.",
      },
      {
        name: "description",
        lang: "en",
        content:
          "Sworn Polish-Italian translator in Wrocław. Official, legal and business translations. Notarized Italian translator.",
      },
      {
        name: "description",
        lang: "de",
        content:
          "Beeidigter Übersetzer für Italienisch in Breslau. Beurkundete Übersetzungen, Rechtsdokumente, Geschäftsübersetzungen.",
      },
      {
        name: "description",
        lang: "it",
        content:
          "Traduttore giurato italiano a Breslavia. Traduzioni ufficiali, legali e commerciali. Interpretariato simultaneo.",
      },
      {
        name: "description",
        lang: "uk",
        content:
          "Присяжний перекладач італійської мови у Вроцлаві. Офіційні, юридичні та комерційні переклади.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://paula-tlumacz.pl" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "alternate", hrefLang: "pl", href: "https://paula-tlumacz.pl/" },
      { rel: "alternate", hrefLang: "en", href: "https://paula-tlumacz.pl/en/" },
      { rel: "alternate", hrefLang: "de", href: "https://paula-tlumacz.pl/de/" },
      { rel: "alternate", hrefLang: "it", href: "https://paula-tlumacz.pl/it/" },
      { rel: "alternate", hrefLang: "uk", href: "https://paula-tlumacz.pl/uk/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://paula-tlumacz.pl/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://paula-tlumacz.pl",
          name: "Paula Janowska-Kiełkiewicz — Tłumacz przysięgły",
          description:
            "Profesjonalne tłumaczenia przysięgłe z języka włoskiego. Urzędowe, prawne, biznesowe i tłumaczenia ustne.",
          url: "https://paula-tlumacz.pl",
          image: "https://paula-tlumacz.pl/og-image.jpg",
          telephone: "+48603779771",
          email: "paula@paula-tlumacz.pl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kazimierska 23",
            postalCode: "51-657",
            addressLocality: "Wrocław",
            addressRegion: "Dolnośląskie",
            addressCountry: "PL",
          },
          areaServed: [
            { "@type": "City", name: "Wrocław" },
            { "@type": "Region", name: "Dolnośląskie" },
            { "@type": "Country", name: "Poland" },
          ],
          priceRange: "$$",
          knowsLanguage: [
            { "@type": "Language", name: "Polish", alternateName: "pl" },
            { "@type": "Language", name: "Italian", alternateName: "it" },
            { "@type": "Language", name: "English", alternateName: "en" },
            { "@type": "Language", name: "German", alternateName: "de" },
            { "@type": "Language", name: "Ukrainian", alternateName: "uk" },
          ],
          serviceType: [
            "Sworn Translation",
            "Legal Translation",
            "Business Translation",
            "Certified Translation",
            "Official Translation",
            "Consecutive Interpreting",
            "Document Translation",
          ],
          sameAs: [
            "https://www.facebook.com/paula-tlumacz",
            "https://www.linkedin.com/in/paula-tlumacz",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "47",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://paula-tlumacz.pl/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://paula-tlumacz.pl/uslugi",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "About",
              item: "https://paula-tlumacz.pl/o-mnie",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Contact",
              item: "https://paula-tlumacz.pl/kontakt",
            },
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { LanguageProvider } from "@/lib/i18n"; // <-- Importujemy dostawcę języka

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HeadContent />
        {/* TUTAJ WLECIELIŚMY Z POPRAWKĄ:
          Dodajemy SiteNav bezpośrednio nad Outletem, aby globalna nawigacja 
          towarzyszyła każdej podstronie serwisu.
        */}
        <SiteNav />
        <Outlet />
        <Scripts />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
