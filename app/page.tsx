import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutFounder from "@/components/AboutFounder";
import ExperienceSection from "@/components/ExperienceSection";
import ChoirSection from "@/components/ChoirSection";
import Ministries from "@/components/Ministries";
import SermonsSection from "@/components/SermonsSection";
import FamilySection from "@/components/FamilySection";
import EventsSection from "@/components/EventsSection";
import Testimonies from "@/components/Testimonies";
import GivingSection from "@/components/GivingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <AboutFounder />
      <ExperienceSection />
      <SermonsSection />
      <ChoirSection />
      <Ministries />
      <FamilySection />
      <EventsSection />
      <GivingSection />
      <Testimonies />
      <Contact />
      <Footer />
    </main>
  );
}
