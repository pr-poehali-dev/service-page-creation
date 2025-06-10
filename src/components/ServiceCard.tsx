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
    <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-6 hover:bg-white/12 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-white/10 p-3 rounded-lg">
          <Icon name={icon} size={24} className="text-white" />
        </div>
        {number && (
          <span className="text-white/80 text-sm font-semibold bg-white/10 px-2 py-1 rounded">
            {number}
          </span>
        )}
      </div>
      <h3 className="text-white text-lg font-semibold mb-3 leading-snug font-montserrat">
        {title}
      </h3>
      <p className="text-blue-100/85 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
