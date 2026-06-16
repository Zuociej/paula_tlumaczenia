import { createFileRoute } from "@tanstack/react-router";
import { FileText, Gavel, Briefcase, Mic, Check } from "lucide-react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import { SiteLayout } from "../components/site-layout";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Usługi tłumaczeniowe — Tłumacz przysięgły j. włoskiego Wrocław" },
      {
        name: "description",
        content:
          "Tłumaczenia przysięgłe, prawne, biznesowe i ustne z języka włoskiego. Notarized, certified, legal translations. Traduzioni giurate, legali, commerciali.",
      },
      {
        name: "keywords",
        content:
          "tłumaczenia przysięgłe, tłumaczenia prawne, tłumaczenia biznesowe, tłumaczenia ustne, świadectwa, dyplomy, umowy, akty notarialne, pełnomocnictwa, interpreting, sworn translation, legal translation, certified translation",
      },
      { property: "og:title", content: "Usługi tłumaczeniowe — Tłumacz przysięgły" },
      {
        property: "og:description",
        content: "Tłumaczenia przysięgłe, prawne, biznesowe, ustne — język włoski",
      },
      { property: "og:url", content: "/uslugi" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/uslugi" }],
  }),
  component: Uslugi,
});

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return FileText;
    case 1:
      return Gavel;
    case 2:
      return Briefcase;
    case 3:
      return Mic;
    default:
      return FileText;
  }
};

function Uslugi() {
  const observer = useIntersectionObserver();
  const isServer = typeof window === "undefined";
  const isVisible = isServer ? true : observer.isVisible;
  const servicesRef = observer.ref;
  const { t } = useLanguage();

  return (
    <SiteLayout>
      <section
        ref={servicesRef as React.RefObject<HTMLElement>}
        className={`bg-background py-20 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            {t.services.badge}
          </span>
          <h2
            className={`mt-3 font-display text-4xl text-foreground transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}
          >
            {t.services.title}
          </h2>
          <p
            className={`mt-4 max-w-2xl text-muted-foreground transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}
          >
            {t.services.desc}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.services.items.map(({ title, desc, list }, index) => {
              const Icon = getIcon(index);
              return (
                <article
                  key={title}
                  className={`rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-md ${
                    isVisible
                      ? "animate-slide-up opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{title}</h3>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>

                  <ul className="mt-6 space-y-3 border-t border-border/60 pt-5">
                    {list.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-sm text-foreground/90"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
