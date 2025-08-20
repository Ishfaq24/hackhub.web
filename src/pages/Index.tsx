import { BottomNavigation } from "@/components/BottomNavigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogPreview } from "@/components/BlogPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BottomNavigation />
      <div className="pb-20">
        <Hero />
        <Features />
        <BlogPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
