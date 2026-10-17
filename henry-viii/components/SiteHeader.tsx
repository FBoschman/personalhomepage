import Link from "next/link";
import { TudorRose } from "./TudorRose";

const LINKS = [
  { href: "#atlas", label: "Atlas" },
  { href: "#timeline", label: "Timeline" },
  { href: "#moments", label: "Three moments" },
  { href: "#legacy", label: "Legacy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="group flex items-center gap-3">
          <TudorRose className="h-9 w-9 transition-transform duration-500 group-hover:rotate-45" />
          <span className="display text-[13px] tracking-[0.24em] text-parchment">
            TUDOR ATLAS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-parchment-dim/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold sm:block" aria-hidden="true" />
          <span className="display text-xs tracking-[0.18em] text-gold">
            1509—1547
          </span>
        </div>
      </div>
    </header>
  );
}
