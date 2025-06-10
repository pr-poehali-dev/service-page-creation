import HeroServices from "@/components/HeroServices";
import ServicesGrid from "@/components/ServicesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-blue-800 to-slate-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <HeroServices />
        <ServicesGrid />
      </div>
    </div>
  );
};

export default Index;
