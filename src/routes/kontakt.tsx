import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";
import { Phone, MapPin, Navigation, Mail } from "lucide-react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Paula Janowska-Kiełkiewicz, Tłumacz przysięgły Wrocław" },
      {
        name: "description",
        content:
          "Kontakt: tel. +48 603 779 771. Kazimierska 23, 51-657 Wrocław. Zapytania o tłumaczenia przysięgłe, prawne, ustne języka włoskiego.",
      },
      {
        name: "keywords",
        content:
          "kontakt tłumacz, Wrocław, telefon, adres, godziny otwarcia, zapytanie o wycenę, zlecenie, contact translator, contatta traduttore, kontaktieren",
      },
      { property: "og:title", content: "Kontakt — Tłumacz przysięgły j. włoskiego" },
      { property: "og:description", content: "Tel. +48 603 779 771, Kazimierska 23, 51-657 Wrocław" },
      { property: "og:url", content: "/kontakt" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

const ADDRESS = "Kazimierska 23, 51-657 Wrocław";
const EMAIL = "kontakt@twojadomena.pl"; 
const MAPS_QUERY = encodeURIComponent(ADDRESS);

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
}

function ContactCard({ icon: Icon, title, children, index }: ContactCardProps) {
  const observer = useIntersectionObserver();
  const isServer = typeof window === "undefined";
  const isVisible = isServer ? true : observer.isVisible;
  const cardRef = observer.ref;

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={`flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-700 ${
        isVisible ? "animate-slide-up opacity-100" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${index * 0.1}s` : "0s",
      }}
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
        {children}
      </div>
    </div>
  );
}

function Kontakt() {
  const observer = useIntersectionObserver();
  const isServer = typeof window === "undefined";
  const contactVisible = isServer ? true : observer.isVisible;
  const contactRef = observer.ref;

  return (
    <SiteLayout>
      <section
        ref={contactRef as React.RefObject<HTMLElement>}
        className="bg-background py-20 transition-all duration-700"
      >
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Contact</span>
          <h1 className={`mt-3 font-display text-4xl text-foreground transition-all duration-700 ${contactVisible ? "animate-slide-up" : ""}`}>
            Porozmawiajmy o Twoim tłumaczeniu.
          </h1>
          <p className={`mt-4 max-w-2xl text-muted-foreground transition-all duration-700 ${contactVisible ? "animate-slide-up" : ""}`}>
            Napisz lub zadzwoń, a przygotuję wycenę i terminową realizację dokumentów włoskich.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              <ContactCard icon={Phone} title="Telefon" index={0}>
                <a href="tel:+48603779771" className="mt-1 inline-block text-2xl font-display text-foreground hover:text-primary transition-colors focus-visible:underline">
                  +48 603 779 771
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Pn–Pt, 9:00–18:00</p>
              </ContactCard>

              <ContactCard icon={MapPin} title="Biuro" index={1}>
                <p className="mt-1 text-2xl font-display text-foreground">Kazimierska 23</p>
                <p className="text-muted-foreground">{ADDRESS.split(',')[1].trim()}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Navigation className="h-4 w-4" /> Wyznacz trasę
                </a>
              </ContactCard>

              <ContactCard icon={Mail} title="Wycena" index={2}>
                <p className="mt-1 text-muted-foreground">
                  Prześlij dokumenty, a przygotuję bezpłatną i pewną wycenę.
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  <Mail className="h-4 w-4" /> Wyślij dokumenty do wyceny
                </a>
              </ContactCard>
            </div>

            <div 
              className={`overflow-hidden rounded-2xl border border-border shadow-elegant transition-all duration-700 ${contactVisible ? "animate-slide-up" : ""}`} 
              style={{ animationDelay: contactVisible ? "0.3s" : "0s" }}
            >
              <iframe
                title={`Mapa dojazdu — ${ADDRESS}`}
                src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="h-[480px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}