import { Benefits } from "@/components/Benefits";
import { DashboardMockup } from "@/components/DashboardMockup";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-obsidian text-cloud">
      <div className="site-noise" />
      <div className="site-orbit site-orbit-left" />
      <div className="site-orbit site-orbit-right" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <DashboardMockup />
        <Process />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
