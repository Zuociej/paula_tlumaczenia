import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-foreground">
            Paula Janowska-Kiełkiewicz
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tłumacz przysięgły języka włoskiego we Wrocławiu.
          </p>
          <div className="mt-4 tricolore h-[3px] w-16 rounded-full" />
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Kontakt</p>
          <a
            href="tel:+48603779771"
            className="flex items-center gap-2 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +48 603 779 771
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4" /> Kazimierska 23, 51-657 Wrocław
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-foreground">Nawigacja</p>
          <Link to="/uslugi" className="block text-muted-foreground hover:text-primary">Usługi</Link>
          <Link to="/o-mnie" className="block text-muted-foreground hover:text-primary">O mnie</Link>
          <Link to="/kontakt" className="block text-muted-foreground hover:text-primary">Kontakt</Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Paula Janowska-Kiełkiewicz · Tłumacz przysięgły języka włoskiego
      </div>
    </footer>
  );
}
