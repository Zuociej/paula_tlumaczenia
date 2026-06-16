"use client";

import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function LanguageSwitcher() {
  // Temporary hidden until fixed
  return null;

  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (lang: "pl" | "it") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-border bg-background px-2 md:px-3 py-1.5 md:py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="text-base leading-none">{language === "pl" ? "🇵🇱" : "🇮🇹"}</span>
        <span className="font-display md:font-sans">{language === "pl" ? "PL" : "IT"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 flex w-24 flex-col rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 z-[60]">
          <button
            onClick={() => selectLanguage("pl")}
            className="flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-left"
          >
            <span className="text-base leading-none">🇵🇱</span> PL
          </button>
          <button
            onClick={() => selectLanguage("it")}
            className="flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-left"
          >
            <span className="text-base leading-none">🇮🇹</span> IT
          </button>
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { language, t } = useLanguage();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/o-mnie", label: t.nav.about },
    { to: "/uslugi", label: t.nav.services },
    { to: "/kontakt", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-xl text-primary-foreground shadow-gold">
            PJK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Paula Janowska-Kiełkiewicz</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary">
              {language === "pl"
                ? "Tłumacz przysięgły · Języka włoskiego"
                : "Traduttrice giurata · Lingua italiana"}
            </span>
          </span>
        </Link>

        {/* Nawigacja dla urządzeń stacjonarnych (Desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
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
            {t.nav.pricing}
          </Link>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Przycisk menu mobilnego i zmiana języka */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            className="rounded-md p-2 text-foreground focus-visible:outline-2 focus-visible:outline-primary"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
              {t.nav.pricing}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
