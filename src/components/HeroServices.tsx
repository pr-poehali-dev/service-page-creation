import { Button } from "@/components/ui/button";

const HeroServices = () => {
  return (
    <div className="flex justify-between items-start mb-16">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6 font-montserrat">
          Наши услуги
        </h1>
        <p className="text-blue-200/90 text-lg leading-relaxed max-w-2xl">
          Мы предлагаем профессиональные юридические
          <br />
          консультации для бизнеса и частных лиц
        </p>
      </div>
      <button className="bg-transparent border border-white/30 text-white px-6 py-2 rounded-md hover:bg-white/10 transition-all duration-300 text-sm">
        Все услуги
      </button>
    </div>
  );
};

export default HeroServices;
