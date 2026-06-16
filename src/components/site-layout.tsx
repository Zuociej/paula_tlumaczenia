import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Usunęliśmy stąd <SiteNav />, bo jest już w __root.tsx */}
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
