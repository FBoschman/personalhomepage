import { TudorRose } from "./TudorRose";

const LINKS = [
  { href: "#atlas", label: "Atlas" },
  { href: "#timeline", label: "Timeline" },
  { href: "#moments", label: "Three moments" },
  { href: "#legacy", label: "Legacy" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-gold/15">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <TudorRose className="h-12 w-12" />
          <div>
            <p className="display text-[13px] tracking-[0.22em] text-parchment">
              TUDOR ATLAS
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted/60">
              Henry VIII · 1509—1547
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.16em] text-muted/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-left lg:text-right">
          <p className="text-[10px] leading-5 text-muted/60">
            Built with Next.js, Tailwind CSS and D3 geo.
          </p>
          <p className="text-[10px] leading-5 text-muted/40">
            An independent historical atlas · MMXXVI
          </p>
        </div>
      </div>
    </footer>
  );
}
