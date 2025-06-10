import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const services = [
    {
      icon: "Scale",
      title: "Юридические услуги",
      description:
        "Полный спектр юридических услуг для физических и юридических лиц. Консультации, сопровождение сделок, представительство в суде.",
    },
    {
      icon: "Building2",
      title: "Право интеллектуальной собственности и авторские права",
      description:
        "Защита интеллектуальной собственности, регистрация товарных знаков, патентное право, авторские права.",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Комплексные решения по обеспечению безопасности бизнеса, аудит систем защиты информации.",
    },
    {
      icon: "Monitor",
      title: "Автоматизация учета и документооборота",
      description:
        "Внедрение систем электронного документооборота, автоматизация бизнес-процессов предприятия.",
    },
    {
      icon: "Car",
      title: "Регистрация транспортных средств ТС №5",
      number: "03",
      description:
        "Полное сопровождение регистрации транспортных средств, оформление документов, техосмотр.",
    },
    {
      icon: "HelpCircle",
      title: "Решение дел по оспариванию кадастровой стоимости",
      description:
        "Профессиональная помощь в оспаривании завышенной кадастровой стоимости недвижимости.",
    },
    {
      icon: "BarChart3",
      title: "Бухгалтерское сопровождение",
      description:
        "Полное бухгалтерское сопровождение бизнеса, ведение учета, подготовка отчетности.",
    },
    {
      icon: "FileText",
      title: "Документооборот и учет",
      description:
        "Организация эффективного документооборота, ведение управленческого учета на предприятии.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          number={service.number}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
