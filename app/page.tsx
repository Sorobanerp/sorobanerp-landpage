import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Teams from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9F5] text-[#141D14]">
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Teams />
      <Contact />
    </main>
  );
}
