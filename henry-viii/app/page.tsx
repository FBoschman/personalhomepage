import { AtlasExplorer } from "@/components/atlas/AtlasExplorer";
import { Hero } from "@/components/Hero";
import { Legacy } from "@/components/Legacy";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThreeMoments } from "@/components/ThreeMoments";

export default function Home() {
  return (
    <>
      <a
        href="#atlas"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:text-[11px] focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ink"
      >
        Skip to the atlas
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <AtlasExplorer />
        <ThreeMoments />
        <Legacy />
      </main>
      <SiteFooter />
    </>
  );
}
