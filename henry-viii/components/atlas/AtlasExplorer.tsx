"use client";

import { useCallback, useEffect, useState } from "react";
import { getEventsForYear } from "@/lib/events";
import { REIGN_END, REIGN_START } from "@/lib/data";
import type { RealmId, ReignEvent } from "@/lib/types";
import { SectionHeading } from "@/components/SectionHeading";
import { HoldingsLedger } from "./HoldingsLedger";
import { MapCard } from "./MapCard";
import { ReignTimeline } from "./ReignTimeline";

export function AtlasExplorer() {
  const [year, setYear] = useState(REIGN_START);
  const [playing, setPlaying] = useState(false);
  const [selectedRealm, setSelectedRealm] = useState<RealmId | null>(null);

  const eventsThisYear = getEventsForYear(year);
  const activeRegion = eventsThisYear.find((event) => event.region)?.region;
  const activeSites = eventsThisYear.flatMap((event) =>
    event.site ? [{ site: event.site, category: event.category }] : [],
  );

  useEffect(() => {
    if (!playing || year >= REIGN_END) return;

    const next = year + 1;
    const delay = getEventsForYear(next).length ? 1150 : 480;
    const timer = window.setTimeout(() => {
      setYear(next);
      if (next >= REIGN_END) setPlaying(false);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [playing, year]);

  const changeYear = useCallback((next: number) => {
    setPlaying(false);
    setYear(next);
  }, []);

  const selectRealm = useCallback((id: RealmId | null) => {
    setSelectedRealm(id);
  }, []);

  const togglePlay = useCallback(() => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (year >= REIGN_END) setYear(REIGN_START);
    setPlaying(true);
  }, [playing, year]);

  const reset = useCallback(() => {
    setPlaying(false);
    setYear(REIGN_START);
    setSelectedRealm(null);
  }, []);

  const selectEvent = useCallback((event: ReignEvent) => {
    setPlaying(false);
    setYear(event.year);
    setSelectedRealm(event.region ?? null);

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches
    ) {
      window.setTimeout(() => {
        document
          .getElementById("map")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, []);

  return (
    <section
      id="atlas"
      className="relative mx-auto max-w-[1440px] scroll-mt-20 px-5 pt-14 sm:px-8 lg:pt-20"
    >
      <SectionHeading
        index="I"
        label="The interactive atlas"
        title={
          <>
            The realm,{" "}
            <span className="serif font-normal italic text-gold-bright">
              year by year
            </span>
          </>
        }
        intro="Henry inherited a patchwork of crowns, lordships and footholds. Drag through the reign, press play, or choose a moment from the timeline to watch that inheritance become one realm with a national church, a wider reach — and a narrower hold on France."
        aside={
          <blockquote className="max-w-[250px] border-l border-gold/30 pl-4">
            <p className="serif text-lg italic leading-6 text-parchment-dim">
              “This realm of England is an empire…”
            </p>
            <cite className="mt-2 block not-italic text-[9px] uppercase tracking-[0.18em] text-gold/60">
              Act in Restraint of Appeals, 1533
            </cite>
          </blockquote>
        }
      />

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-10">
        <div id="map" className="scroll-mt-24 lg:sticky lg:top-[4.5rem]">
          <MapCard
            year={year}
            playing={playing}
            selected={selectedRealm}
            eventsThisYear={eventsThisYear}
            activeRegion={activeRegion}
            activeSites={activeSites}
            onChangeYear={changeYear}
            onSelectRealm={selectRealm}
            onTogglePlay={togglePlay}
            onReset={reset}
          />
        </div>

        <div>
          <HoldingsLedger
            year={year}
            selected={selectedRealm}
            onSelect={(id) => setSelectedRealm(selectedRealm === id ? null : id)}
          />

          <div id="timeline" className="mt-10 scroll-mt-24">
            <ReignTimeline
              year={year}
              playing={playing}
              onSelectEvent={selectEvent}
              onTogglePlay={togglePlay}
            />
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-[10px] leading-5 text-muted/50">
        Modern coastlines are used for orientation. The English Pale, the Pale
        of Calais and the Boulonnais are shown approximately. Wales appears as a
        separate jurisdiction until the Laws in Wales Act of 1536; Ireland is
        shown as a claimed kingdom after 1541, not as a territory under
        effective royal control.
      </p>
    </section>
  );
}
