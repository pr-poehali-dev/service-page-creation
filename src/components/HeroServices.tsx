import { Button } from "@/components/ui/button";

const HeroServices = () => {
  return (
    <div className="flex justify-between items-start mb-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2 font-montserrat">
          Наши услуги
        </h1>
        <p className="text-blue-200 text-lg">
          Мы предлагаем профессиональные услуги
          <br />
          высокого качества для вашего бизнеса
        </p>
      </div>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300"
      >
        Все услуги
      </Button>
    </div>
  );
};

export default HeroServices;
