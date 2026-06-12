import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import deskImage from "../assets/biurko.png";
import { useLanguage } from "@/lib/i18n";

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

function OMnie() {
  const observer = useIntersectionObserver();
  const isServer = typeof window === "undefined";
  const isVisible = isServer ? true : observer.isVisible;
  const aboutRef = observer.ref;
  const { t } = useLanguage();

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
              <span className="text-xs uppercase tracking-[0.25em] text-primary">{t.about.badge}</span>
              <h2 className={`font-display text-4xl text-gold transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                {t.about.title}
              </h2>
              <div className={`space-y-6 text-lg leading-8 text-muted-foreground transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              <div className={`grid gap-4 sm:grid-cols-3 transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}>
                {t.about.list.map((fact, index) => {
                  const url = index === 0 ? "https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,661.html" : undefined;
                  const cardClasses = "group block rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:bg-accent/40 hover:border-foreground/20 hover:shadow-sm";
                  const innerContent = (
                    <>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5">
                        {fact.label}
                        {url && (
                          <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary text-sm font-light">↗</span>
                        )}
                      </p>
                      <p className="mt-2 text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {fact.value}
                      </p>
                    </>
                  );

                  if (url) {
                    return (
                      <a
                        key={index}
                        href={url}
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