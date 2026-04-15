import SiteHeader from "@/components/SiteHeader";
import SiteNavbar from "@/components/SiteNavbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <SiteNavbar />
    <main className="flex-1">
      <HeroSection />
      <OffersSection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
