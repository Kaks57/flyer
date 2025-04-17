
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              Ryanol<span className="text-brand-violet-light">@</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Experts en création de flyers impactants et de sites web professionnels. Nous donnons vie à vos idées depuis 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Création de Flyers</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Sites Web Vitrines</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Sites E-commerce</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Applications Web</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Design Graphique</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Utiles</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/tarifs" className="text-gray-300 hover:text-white transition-colors">Tarifs</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  15 Rue de l'Innovation<br />
                  75011 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
                <a href="mailto:contact@ryanol.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@ryanol.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ryanol@. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
