import { Castle, Church, Crown, ScrollText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const CARDS = [
  {
    number: "01",
    icon: Crown,
    title: "One realm, two crowns",
    copy: "England and Wales were joined in law and representation. Ireland was raised to a separate kingdom in 1541, though royal power still ran thin beyond the Pale.",
  },
  {
    number: "02",
    icon: Church,
    title: "A church remade",
    copy: "Royal supremacy and the dissolution of some 800 religious houses moved vast lands, wealth and patronage from Rome and the monasteries into the hands of the Crown and lay owners.",
  },
  {
    number: "03",
    icon: Castle,
    title: "A defended coast",
    copy: "Invasion scares after 1539 produced a chain of artillery forts along the south and east coasts. The navy was placed on a more permanent footing, ready for the wars to come.",
  },
  {
    number: "04",
    icon: ScrollText,
    title: "A more sovereign state",
    copy: "Parliament legislated the break with Rome, the union with Wales and the new succession. Statute became the instrument through which the Crown remade the realm.",
  },
];

const TERRITORIES = [
  { year: "1536", label: "Wales united with England" },
  { year: "1541", label: "Ireland raised to a kingdom" },
  { year: "1544", label: "Boulogne taken" },
  { year: "1547", label: "Calais still English" },
];

export function Legacy() {
  return (
    <section
      id="legacy"
      className="relative mx-auto max-w-[1440px] scroll-mt-20 px-5 pt-24 sm:px-8"
    >
      <SectionHeading
        index="III"
        label="The legacy"
        title={
          <>
            What Henry{" "}
            <span className="serif font-normal italic text-gold-bright">
              left behind
            </span>
          </>
        }
        intro="The king is remembered for his marriages, but his reign also redrew the legal map of the islands, transferred a quarter of England's land wealth and turned the Church into an arm of the state."
        aside={
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-muted/60">
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            1509—1547
          </div>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.number}
              className="panel-soft group relative overflow-hidden p-6 transition-colors hover:border-gold/25"
            >
              <span className="display absolute right-5 top-4 text-[10px] tracking-[0.18em] text-gold/30">
                {card.number}
              </span>
              <span className="flex h-11 w-11 items-center justify-center border border-gold/25 bg-gold/[0.05] text-gold transition-colors group-hover:border-gold/50">
                <Icon className="h-5 w-5" strokeWidth={1.3} />
              </span>
              <h3 className="serif mt-5 text-2xl text-parchment">
                {card.title}
              </h3>
              <p className="mt-2 max-w-xl text-[12.5px] leading-6 text-muted">
                {card.copy}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-px border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
        {TERRITORIES.map((item) => (
          <div key={item.year} className="bg-ink px-5 py-6">
            <p className="display text-2xl text-gold-bright">{item.year}</p>
            <p className="mt-1 text-[10px] uppercase leading-5 tracking-[0.14em] text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <blockquote>
          <p className="serif text-2xl italic leading-9 text-parchment sm:text-3xl sm:leading-[2.7rem]">
            “The king&rsquo;s majesty hath full power and authority to visit,
            repress, redress, reform, order, correct, restrain and amend all
            such errors, heresies, abuses, offences, contempts and enormities…”
          </p>
          <cite className="mt-4 block text-[9px] uppercase not-italic tracking-[0.2em] text-gold/60">
            Act of Supremacy, 1534
          </cite>
        </blockquote>

        <div className="border-l border-gold/20 pl-5">
          <p className="eyebrow">The balance sheet</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-3">
              <span className="text-xs text-muted">One kingdom in law</span>
              <span className="display text-sm text-parchment">
                England + Wales
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-3">
              <span className="text-xs text-muted">A second crown claimed</span>
              <span className="display text-sm text-parchment">
                Ireland, 1541
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-3">
              <span className="text-xs text-muted">
                Continental holdings at death
              </span>
              <span className="display text-sm text-parchment">
                Calais + Boulogne
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-xs text-muted">
                Religious houses dissolved
              </span>
              <span className="display text-sm text-parchment">~800</span>
            </div>
          </div>
        </div>
      </div>

      <details className="mt-16 border-t border-gold/15 pt-5">
        <summary className="cursor-pointer text-[10px] uppercase tracking-[0.18em] text-gold/60 transition-colors hover:text-gold">
          Sources &amp; notes
        </summary>
        <div className="mt-4 grid gap-6 text-[11px] leading-6 text-muted/70 sm:grid-cols-2">
          <ul className="space-y-1.5">
            <li>
              J. J. Scarisbrick, <em>Henry VIII</em> (1968)
            </li>
            <li>
              G. W. Bernard, <em>The King&apos;s Reformation</em> (2005)
            </li>
            <li>
              John Guy, <em>Tudor England</em> (1988)
            </li>
            <li>
              Statutes: Act of Supremacy (1534), Laws in Wales Act (1535),
              Crown of Ireland Act (1541)
            </li>
          </ul>
          <ul className="space-y-1.5">
            <li>
              Boundaries: GADM 4.1 (England, Scotland, Wales and Ireland) and
              Natural Earth 1:50m (context), simplified for display.
            </li>
            <li>
              The Pale of Calais, the English Pale and the Boulonnais are
              approximate historical overlays on modern coastlines.
            </li>
            <li>
              Portrait: after Hans Holbein the Younger, public domain, via
              Wikimedia Commons.
            </li>
            <li>Dates and figures are simplified for a general audience.</li>
          </ul>
        </div>
      </details>
    </section>
  );
}
