import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout"; // <-- Zmienione na ścieżkę względną dla bezpieczeństwa SSR
import { useIntersectionObserver } from "../hooks/use-intersection-observer"; // <-- Zmienione na ścieżkę względną
import deskImage from "../assets/biurko.png"; // <-- Zmienione na ścieżkę względną

export const Route = createFileRoute("/o-mnie")({
  head: () => ({
    meta: [
      { title: "O mnie — Paula Janowska-Kiełkiewicz, tłumacz przysięgły j. włoskiego" },
      {
        name: "description",
        content:
          "Paula Janowska-Kiełkiewicz — tłumacz przysięgły języka włoskiego. Doświadczenie, kwalifikacje, certyfikat. About the translator. Su la traduttrice.",
      },
      {
        name: "keywords",
        content:
          "Paula Janowska-Kiełkiewicz, tłumacz przysięgły, filologia włoska, doświadczenie tłumaczeniowe, sworn translator, certified translator, professional interpreter, traduttore",
      },
      { property: "og:title", content: "O mnie — Paula Janowska-Kiełkiewicz, Tłumacz przysięgły" },
      { property: "og:description", content: "Poznaj historię, doświadczenie i pasję tłumacza przysięgłego" },
      { property: "og:url", content: "/o-mnie" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/o-mnie" }],
  }),
  component: OMnie,
});

const facts = [
  { 
    label: "Wpisana na listę", 
    value: "Ministra Sprawiedliwości",
    url: "https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,661.html"
  },
  { 
    label: "Filologia włoska", 
    value: "Studia magisterskie i podyplomowe" 
  },
  { 
    label: "Doświadczenie", 
    value: "Praktyka od 2005 roku" 
  },
];

function OMnie() {
  // Bezpieczna powłoka dla hooka obserwatora, zapobiegająca crashom na serwerze
  const observer = useIntersectionObserver();
  
  // Jeśli kod wykonuje się na serwerze (SSR), domyślnie ustawiamy stan widoczny,
  // aby roboty Google widziały treść, a właściwy observer odpali się dopiero w przeglądarce.
  const isServer = typeof window === "undefined";
  const isVisible = isServer ? true : observer.isVisible;
  const aboutRef = observer.ref;

  return (
    <SiteLayout>
      <section
        ref={aboutRef as React.RefObject<HTMLElement>}
        className={`bg-background py-20 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            
            <div className={`relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
              <img src={deskImage} alt="Biurko" className="h-full min-h-[28rem] w-full object-cover" />
            </div>

            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">O mnie</span>
              <h2 className={`font-display text-4xl text-gold transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                Tłumacz przysięgły z pasją do języka włoskiego.
              </h2>
              <div className={`space-y-6 text-lg leading-8 text-muted-foreground transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                <p>
                  Nazywam się Paula Janowska-Kiełkiewicz. Od lat specjalizuję się w tłumaczeniach przysięgłych i kontaktach formalnych między Polską a Włochami. W mojej pracy łączę znajomość języka, praktykę prawną i staranność w dopracowaniu szczegółów.
                </p>
                <p>
                  Każdy dokument traktuję indywidualnie, dbając o terminologię, kontekst i pełną dyskrecję. Dla klientów prywatnych i firm realizuję zlecenia zarówno stacjonarnie we Wrocławiu, jak i zdalnie.
                </p>
              </div>

              <div className={`grid gap-4 sm:grid-cols-3 transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                {facts.map((fact, index) => {
                  const cardClasses = "group block rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:bg-accent/40 hover:border-foreground/20 hover:shadow-sm";
                  const innerContent = (
                    <>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5">
                        {fact.label}
                        {fact.url && (
                          <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary text-sm font-light">↗</span>
                        )}
                      </p>
                      <p className="mt-2 text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {fact.value}
                      </p>
                    </>
                  );

                  if (fact.url) {
                    return (
                      <a
                        key={index}
                        href={fact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClasses}
                        style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
                      >
                        {innerContent}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="rounded-3xl border border-border bg-card p-6"
                      style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{fact.label}</p>
                      <p className="mt-2 text-lg font-medium text-foreground">{fact.value}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}