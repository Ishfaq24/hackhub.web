import { BottomNavigation } from "@/components/BottomNavigation";
import { ContributionGuide } from "@/components/ContributionGuide";

const Contribute = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <BottomNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ContributionGuide />
        </div>
      </section>
    </div>
  );
};

export default Contribute;