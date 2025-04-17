
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Ryanol Logo" 
                className="h-10 w-10 mr-3" 
              />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                Ryanol<span className="text-brand-violet-light">@</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-brand-gray-dark hover:text-brand-blue transition-colors">Accueil</Link>
            <Link to="/services" className="text-brand-gray-dark hover:text-brand-blue transition-colors">Services</Link>
            <Link to="/tarifs" className="text-brand-gray-dark hover:text-brand-blue transition-colors">Tarifs</Link>
            <Link to="/faq" className="text-brand-gray-dark hover:text-brand-blue transition-colors">FAQ</Link>
          </div>
          
          <div className="hidden md:flex">
            <Button asChild className="bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue-dark hover:to-brand-violet-dark">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
          
          {/* Mobile nav button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brand-gray-dark" />
              ) : (
                <Menu className="h-6 w-6 text-brand-gray-dark" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-white">
            <Link to="/" className="text-brand-gray-dark hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/services" className="text-brand-gray-dark hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/tarifs" className="text-brand-gray-dark hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>Tarifs</Link>
            <Link to="/faq" className="text-brand-gray-dark hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Button asChild className="bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue-dark hover:to-brand-violet-dark w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contactez-nous</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
