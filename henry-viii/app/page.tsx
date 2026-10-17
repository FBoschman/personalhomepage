import { AtlasExplorer } from "@/components/atlas/AtlasExplorer";
import { Hero } from "@/components/Hero";
import { Legacy } from "@/components/Legacy";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThreeMoments } from "@/components/ThreeMoments";

export default function Home() {
  return (
    <>
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
