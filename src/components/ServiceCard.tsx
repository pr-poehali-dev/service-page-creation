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
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
            <Icon name={icon} size={24} className="text-white" />
          </div>
          {number && (
            <span className="text-white/60 text-sm font-semibold bg-white/10 px-2 py-1 rounded">
              {number}
            </span>
          )}
        </div>
        <h3 className="text-white text-lg font-semibold mb-3 font-montserrat">
          {title}
        </h3>
        <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
