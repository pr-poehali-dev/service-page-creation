import HeroServices from "@/components/HeroServices";
import ServicesGrid from "@/components/ServicesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <HeroServices />
        <ServicesGrid />
      </div>
    </div>
  );
};

export default Index;
