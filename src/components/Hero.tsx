import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative pt-28 pb-20"
    >
      {/* IMAGE DE FOND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fond.jpeg"
          alt="Fond Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      {/* CONTENU PAR DESSUS */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Texte à gauche */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="block">Donnez vie à vos idées avec</span>
              <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                Ryanol<span className="text-brand-violet-light">@</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-dark mb-8 max-w-lg">
              Nous créons des flyers percutants et des sites web professionnels pour faire briller votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue-dark hover:to-brand-violet-dark"
              >
                <Link to="/services">
                  Découvrir nos services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>

          {/* Image à droite */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-violet-light rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue rounded-full opacity-30 blur-xl"></div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;