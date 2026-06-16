import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import italyRomeBg from "../assets/włochy-rzym.png";
import { SiteLayout } from "../components/site-layout";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tłumacz przysięgły języka włoskiego Wrocław — Paula Janowska-Kiełkiewicz" },
      {
        name: "description",
        content:
          "Szukasz tłumacza przysięgłego języka włoskiego we Wrocławiu? Oferuję profesjonalne tłumaczenia urzędowe, prawnicze, biznesowe i ustne. Szybko i rzetelnie.",
      },
      {
        name: "keywords",
        content:
          "tłumacz przysięgły języka włoskiego Wrocław, tłumacz włosko polski Wrocław, tłumaczenia włoski Wrocław, tłumacz przysięgły włoskiego Wrocław, tłumaczenia przysięgłe włoski Wrocław, tłumaczenia urzędowe włoski, tłumaczenia prawnicze włoski, tłumaczenia biznesowe włoski, tłumacz ustny włoski Wrocław, biuro tłumaczeń włoski Wrocław",
      },
      { property: "og:title", content: "Tłumacz przysięgły języka włoskiego Wrocław — Paula Janowska-Kiełkiewicz" },
      { property: "og:description", content: "Szukasz tłumacza przysięgłego języka włoskiego we Wrocławiu? Oferuję profesjonalne tłumaczenia urzędowe, prawnicze, biznesowe i ustne." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useLanguage();

  return (
    <SiteLayout>
      <section
        id="top"
        className="relative min-h-screen w-full bg-hero-home bg-cover bg-center"
        style={{ backgroundImage: `url(${italyRomeBg})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.35),rgba(15,23,42,0.88))]" />
        
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl text-foreground">
            
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              {t.home.badge}
            </span>
            
            <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]">
              {t.home.title1}
              <br />
              {t.home.title2}
              <span className="ml-3 italic text-primary">zaufać.</span>
            </h1>
            
            <p className="mt-6 mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {t.home.desc}
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.home.cta1} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/o-mnie"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
              >
                {t.home.cta2}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
