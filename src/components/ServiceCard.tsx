import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  number?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  number,
}: ServiceCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition-colors">
            <Icon name={icon} size={28} className="text-white" />
          </div>
          {number && (
            <span className="text-white/70 text-lg font-bold bg-white/10 px-3 py-1 rounded-lg">
              {number}
            </span>
          )}
        </div>
        <h3 className="text-white text-xl font-bold mb-4 font-montserrat leading-tight">
          {title}
        </h3>
        <p className="text-blue-100/90 text-base leading-relaxed flex-grow">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
