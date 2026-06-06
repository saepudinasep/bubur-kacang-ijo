import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import HeroSection from "@/components/sections/HeroSection";
import KeunggulanSection from "@/components/sections/KeunggulanSection";
import MenuSection from "@/components/sections/MenuSection";
import TentangSection from "@/components/sections/TentangSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import CTASection from "@/components/sections/CTASection";
import LokasiSection from "@/components/sections/LokasiSection";
import KontakSection from "@/components/sections/KontakSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <KeunggulanSection />
        <MenuSection />
        <TentangSection />
        <TestimoniSection />
        <CTASection />
        <LokasiSection />
        <KontakSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
