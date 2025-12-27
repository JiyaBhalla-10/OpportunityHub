import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import OpportunitiesSection from "@/components/home/OpportunitiesSection";
import DeveloperSection from "@/components/home/DeveloperSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OpportunitiesSection />
        <DeveloperSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
