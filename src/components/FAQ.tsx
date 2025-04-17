import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "flyer" | "web";
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "flyer" | "web">("all");

  const faqItems: FAQItem[] = [
    {
      question: "Quels sont vos délais de livraison habituels ?",
      answer: "Pour les flyers standards, comptez 5 jours ouvrés à partir de la validation du design. Pour les sites web vitrines, le délai moyen est de 2 à 3 semaines. Les sites e-commerce ou projets complexes peuvent nécessiter 4 à 8 semaines selon les fonctionnalités demandées.",
      category: "general"
    },
    {
      question: "Comment se déroule le processus de création ?",
      answer: "Notre processus commence par une consultation pour comprendre vos besoins. Nous élaborons ensuite une proposition et, après votre accord, nos designers créent une première maquette. Vous pouvez demander des révisions avant la finalisation. Pour les sites web, nous ajoutons les étapes de développement, tests et mise en ligne.",
      category: "general"
    },
    {
      question: "Proposez-vous des forfaits de maintenance pour les sites web ?",
      answer: "Oui, nous proposons plusieurs formules de maintenance incluant les mises à jour de sécurité, sauvegardes régulières, petites modifications de contenu et support technique. Ces forfaits sont mensuels ou annuels, selon vos préférences.",
      category: "web"
    },
    {
      question: "Puis-je mettre à jour moi-même le contenu de mon site ?",
      answer: "Absolument ! Tous nos sites sont livrés avec un système de gestion de contenu (CMS) intuitif qui vous permet de modifier textes, images et autres contenus sans connaissances techniques. Nous vous formons à son utilisation avant la livraison finale.",
      category: "web"
    },
    {
      question: "L'impression des flyers est-elle incluse dans vos tarifs ?",
      answer: "Les tarifs mentionnés concernent uniquement la conception graphique. Nous pouvons gérer l'impression pour vous via nos partenaires imprimeurs avec des tarifs préférentiels. Un devis spécifique pour l'impression vous sera proposé selon la quantité et la qualité souhaitées.",
      category: "flyer"
    },
    {
      question: "Quels formats de fichiers recevrai-je pour mes flyers ?",
      answer: "Vous recevrez les fichiers en PDF haute résolution prêts pour l'impression, ainsi qu'en formats modifiables (AI ou PSD). Sur demande, nous pouvons également fournir des versions adaptées pour le web et les réseaux sociaux.",
      category: "flyer"
    },
    {
      question: "Quelles méthodes de paiement acceptez-vous ?",
      answer: "Nous acceptons les virements bancaires, les paiements par carte de crédit et PayPal. Pour les projets importants, nous proposons un paiement échelonné : 30% à la commande, 30% à la présentation des maquettes et le solde à la livraison.",
      category: "general"
    },
    {
      question: "Mon site sera-t-il optimisé pour les moteurs de recherche (SEO) ?",
      answer: "Oui, tous nos sites web sont créés avec les bonnes pratiques SEO de base. Nous optimisons la structure, les balises, la vitesse de chargement et l'adaptation mobile. Pour une stratégie SEO plus avancée, nous proposons des services complémentaires.",
      category: "web"
    }
  ];

  const filteredFAQs = faqItems.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Trouvez des réponses aux questions les plus courantes concernant nos services.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "all" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } rounded-l-lg border border-brand-blue`}
              onClick={() => setActiveCategory("all")}
            >
              Toutes
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "general" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } border-y border-x border-brand-blue`}
              onClick={() => setActiveCategory("general")}
            >
              Générales
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "flyer" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } border-y border-x border-brand-blue`}
              onClick={() => setActiveCategory("flyer")}
            >
              Flyers
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "web" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } rounded-r-lg border border-brand-blue`}
              onClick={() => setActiveCategory("web")}
            >
              Sites Web
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left p-5 flex justify-between items-center focus:outline-none ${
                  activeIndex === index ? "bg-brand-gray-light" : "bg-white"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-gray-dark" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-brand-gray-dark">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-gray-dark mb-4">
            Une autre question ? N'hésitez pas à nous contacter !
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark font-medium"
          >
            Contactez-nous <ChevronDown className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
