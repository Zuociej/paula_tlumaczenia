import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Definicja linków dopasowana do struktury Twoich plików w folderze /routes
const links = [
  { to: "/", label: "Strona główna" },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>\
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-xl text-primary-foreground shadow-gold">
            PJK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">
              Paula Janowska-Kiełkiewicz
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary">
              Tłumacz przysięgły · Języka włoskiego
            </span>
          </span>
        </Link>

        {/* Nawigacja dla urządzeń stacjonarnych (Desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }} // Aktywuje podświetlenie tylko na konkretnej podstronie
              activeProps={{ className: "text-foreground font-medium" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-3 rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Wycena
          </Link>
        </nav>

        {/* Przycisk menu mobilnego (Hamburger) */}
        <button
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          className="md:hidden rounded-md p-2 text-foreground focus-visible:outline-2 focus-visible:outline-primary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Rozwijane menu mobilne (Mobile Overlay) */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden animate-fade-in">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-accent text-foreground font-medium" }}
                className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 block rounded-lg bg-gold px-4 py-3 text-center text-base font-medium text-primary-foreground shadow-gold"
              onClick={() => setOpen(false)}
            >
              Wycena
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}