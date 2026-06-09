import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import italyRomeBg from "../assets/włochy-rzym.png"; // <-- Zabezpieczona ścieżka względna dla SSR
import { SiteLayout } from "../components/site-layout"; // <-- Zabezpieczona ścieżka względna

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tłumacz przysięgły j. włoskiego Wrocław — Paula Janowska-Kiełkiewicz" },
      {
        name: "description",
        content:
          "Tłumacz przysięgły języka włoskiego we Wrocławiu — dokumenty urzędowe, prawne, biznesowe oraz tłumaczenia ustne. Notarized, certified, sworn translations.",
      },
      {
        name: "keywords",
        content:
          "tłumacz przysięgły, włoski, Wrocław, tłumaczenia urzędowe, tłumaczenia prawne, tłumaczenia biznesowe, tłumaczenia ustne, dokumenty, język włoski, Poland, traduttore giurato, traduzioni, interpreter, notarized translation, certified translation, sworn translator, professional translator, business translation, legal translation, official translation",
      },
      { property: "og:title", content: "Tłumacz przysięgły j. włoskiego — Wrocław" },
      { property: "og:description", content: "Profesjonalne tłumaczenia przysięgłe, prawne, biznesowe i ustne z języka włoskiego." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section
        id="top"
        className="relative min-h-screen w-full bg-hero-home bg-cover bg-center"
        style={{ backgroundImage: `url(${italyRomeBg})` }}
      >
        {/* Nakładka przyciemniająca tło */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.35),rgba(15,23,42,0.88))]" />
        
        {/* Główny kontener - zmieniony z items-center na elastyczny padding dla pełnej responsywności scrolla */}
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl text-foreground">
            
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              Tłumacz przysięgły języka włoskiego
            </span>
            
            <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]">
              Profesjonalne tłumaczenia włoskie,
              <br />
              którym możesz
              <span className="ml-3 italic text-primary">zaufać.</span>
            </h1>
            
            <p className="mt-6 mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Oferta dla osób prywatnych i firm: tłumaczenia przysięgłe, prawne, biznesowe oraz usługi ustne z języka włoskiego. Wszystko w jednym miejscu — we Wrocławiu i online.
            </p>
            
            {/* Poprawione linki z tradycyjnych 'a' na systemowe 'Link' od TanStack Router dla błyskawicznego przełączania stron */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Umów wycenę <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/o-mnie"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
              >
                Poznaj mnie
              </Link>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}