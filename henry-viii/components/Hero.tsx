import Image from "next/image";
import { ArrowDown, ScrollText } from "lucide-react";
import { TudorRose } from "./TudorRose";
import { Ornament } from "./Ornament";

const FACTS = [
  { value: "38", label: "years on the throne" },
  { value: "VI", label: "marriages, 1509–1547" },
  { value: "~800", label: "religious houses dissolved" },
  { value: "1541", label: "Ireland raised to a kingdom" },
];

const CHIPS = [
  { label: "Wales", year: "1536", position: "left-0 top-[18%]" },
  { label: "Ireland", year: "1541", position: "right-0 top-[38%]" },
  { label: "Boulogne", year: "1544", position: "left-[4%] bottom-[16%]" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-14 sm:pb-14 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 72% 42%, rgba(214,179,106,.12), transparent 38%), radial-gradient(circle at 15% 12%, rgba(168,57,70,.1), transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-gold/[0.05]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-gold/[0.06]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <div className="animate-rise">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <p className="eyebrow">England under the second Tudor</p>
          </div>

          <h1 className="display mt-6 max-w-2xl text-[2.7rem] leading-[1.02] text-parchment sm:text-6xl lg:text-[4.6rem]">
            The making of a{" "}
            <span className="serif font-normal italic text-gold-bright">
              kingdom
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-parchment-dim/85 sm:text-base">
            Thirty-eight years, six marriages and a realm turned inside out.
            Follow the map and the timeline of Henry&nbsp;VIII&rsquo;s reign to
            see how England, Wales, Ireland and the last footholds in France
            changed shape between 1509 and 1547.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#atlas"
              className="group inline-flex items-center gap-3 bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-bright"
            >
              Explore the atlas
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#timeline"
              className="group inline-flex items-center gap-3 border border-gold/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ScrollText className="h-3.5 w-3.5" />
              Read the timeline
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 border-t border-gold/15 pt-7 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="display text-2xl text-gold-bright sm:text-[1.7rem]">
                  {fact.value}
                </p>
                <p className="mt-1.5 text-[10px] uppercase leading-4 tracking-[0.14em] text-muted">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Portrait />
      </div>

      <div className="relative mx-auto mt-10 max-w-[1440px] px-5 sm:px-8">
        <Ornament />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] animate-fade lg:max-w-[460px]">
      <div className="absolute inset-8 rounded-full tudor-glow blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 rounded-full border border-gold/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-5 rounded-full border border-gold/[0.07]"
        aria-hidden="true"
      />

      <div className="relative mx-auto aspect-[4/5] w-[82%]">
        <div className="absolute inset-0 rounded-t-full rounded-b-[2rem] border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-2.5">
          <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-[1.6rem] border border-gold/20">
            <Image
              src="/henry-viii.jpg"
              alt="Portrait of Henry VIII after Hans Holbein the Younger"
              fill
              priority
              sizes="(min-width: 1024px) 380px, 300px"
              className="object-cover object-[50%_12%] grayscale-[18%] sepia-[12%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </div>
        <TudorRose className="absolute -bottom-6 left-1/2 h-20 w-20 -translate-x-1/2 drop-shadow-[0_10px_25px_rgba(0,0,0,.6)]" />
      </div>

      {CHIPS.map((chip) => (
        <div
          key={chip.label}
          className={`absolute hidden items-center gap-2 border border-gold/20 bg-ink/85 px-3 py-2 backdrop-blur-sm sm:flex ${chip.position}`}
        >
          <span className="h-1 w-1 rotate-45 bg-crimson-soft" />
          <span className="text-[9px] uppercase tracking-[0.18em] text-parchment-dim">
            {chip.label}
          </span>
          <span className="display text-[10px] tracking-[0.1em] text-gold">
            {chip.year}
          </span>
        </div>
      ))}

      <p className="mt-10 text-center text-[9px] uppercase tracking-[0.2em] text-muted/60">
        After Hans Holbein the Younger · public domain
      </p>
    </div>
  );
}
