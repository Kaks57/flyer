import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  btnText: string;
  color: string;
  hoverColor: string;
}

const PricingPlan = ({ 
  title, 
  price, 
  period,
  description, 
  features, 
  popular = false, 
  btnText,
  color,
  hoverColor
}: PricingPlanProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 border ${popular ? 'border-brand-violet' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-brand-violet text-white py-1 px-4 rounded-tr-xl rounded-bl-xl font-medium text-sm">
          Populaire
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-1">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Sur devis" && <span className="text-brand-gray-dark">€</span>}
      </div>
      <div className="text-sm text-brand-gray-dark mb-4">
        {period} 
        <span className="block text-xs text-red-500 mt-1">Engagement minimum : 1 an</span>
      </div>
      <p className="text-brand-gray-dark mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`flex-shrink-0 ${color} rounded-full p-1 mr-2 mt-0.5`}>
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm text-brand-gray-dark">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        asChild
        className={`w-full ${color} hover:${hoverColor} transition-colors`}
      >
        <Link to="/contact">{btnText}</Link>
      </Button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Forfait Essentiel",
      price: "289,90",
      period: "par mois",
      description: "Tout ce dont vous avez besoin pour démarrer",
      features: [
        "Site internet professionnel",
        "Création de flyers personnalisés",
        "Conception de logo",
        "Référencement de base",
        "Mises à jour mensuelles",
        "Support client prioritaire"
      ],
      btnText: "Commander",
      color: "bg-brand-blue",
      hoverColor: "bg-brand-blue-dark"
    },
    {
      title: "Forfait Business",
      price: "489,90",
      period: "par mois",
      description: "Solution complète pour les entreprises",
      features: [
        "Site internet avancé",
        "Pack de flyers premium",
        "Logo + charte graphique",
        "Référencement optimisé",
        "Mises à jour hebdomadaires",
        "Support 7j/7",
        "Campagnes marketing incluses"
      ],
      popular: true,
      btnText: "Choisir ce forfait",
      color: "bg-gradient-to-r from-brand-blue to-brand-violet",
      hoverColor: "bg-gradient-to-r from-brand-blue-dark to-brand-violet-dark"
    },
    {
      title: "Forfait Sur Mesure",
      price: "Sur devis",
      period: "",
      description: "Solution adaptée à vos besoins spécifiques",
      features: [
        "Site internet personnalisé",
        "Flyers et supports marketing",
        "Identité visuelle complète",
        "Référencement professionnel",
        "Plan de communication",
        "Accompagnement dédié",
        "Fonctionnalités à la demande"
      ],
      btnText: "Demander un devis",
      color: "bg-brand-gray-dark",
      hoverColor: "bg-black"
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nos Tarifs</h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Des formules adaptées à votre budget, transparentes et sans mauvaise surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              btnText={plan.btnText}
              color={plan.color}
              hoverColor={plan.hoverColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
