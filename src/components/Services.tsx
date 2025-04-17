
import { Layers, Globe, FileText, Code, Palette, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description, color }: { 
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        <Icon className="text-white h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-gray-dark mb-4">{description}</p>
    </div>
  );
};

const Services = () => {
  const flyerServices = [
    {
      icon: FileText,
      title: "Flyers Publicitaires",
      description: "Conception de flyers accrocheurs pour vos campagnes marketing et promotions.",
      color: "bg-brand-blue"
    },
    {
      icon: Palette,
      title: "Design Graphique",
      description: "Création graphique professionnelle adaptée à votre identité visuelle.",
      color: "bg-brand-violet"
    },
    {
      icon: Share2,
      title: "Distribution",
      description: "Options de distribution ciblée pour maximiser l'impact de vos flyers.",
      color: "bg-gradient-to-r from-brand-blue to-brand-violet"
    }
  ];

  const webServices = [
    {
      icon: Globe,
      title: "Sites Web Vitrines",
      description: "Création de sites élégants pour présenter votre entreprise et vos services.",
      color: "bg-brand-violet"
    },
    {
      icon: Code,
      title: "Sites E-commerce",
      description: "Développement de boutiques en ligne performantes et sécurisées.",
      color: "bg-brand-blue"
    },
    {
      icon: Layers,
      title: "Web Applications",
      description: "Conception d'applications web sur mesure pour vos besoins spécifiques.",
      color: "bg-gradient-to-r from-brand-violet to-brand-blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins, qu'il s'agisse de flyers impactants ou de sites web performants.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Création de Flyers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flyerServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-blue hover:bg-brand-blue-dark">
              <Link to="/tarifs">Voir nos tarifs flyers</Link>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Création de Sites Web</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-violet hover:bg-brand-violet-dark">
              <Link to="/tarifs">Voir nos tarifs sites web</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
