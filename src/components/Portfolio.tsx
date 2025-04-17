
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: "flyer" | "web";
  image: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "flyer" | "web">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Restaurant Gourmet",
      category: "flyer",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Flyer promotionnel pour un restaurant haut de gamme"
    },
    {
      id: 2,
      title: "Festival de Musique",
      category: "flyer",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Design d'affiche pour un festival de musique électronique"
    },
    {
      id: 3,
      title: "Promotion Immobilière",
      category: "flyer",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Flyer pour la promotion d'un nouveau complexe résidentiel"
    },
    {
      id: 4,
      title: "Boutique Mode",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500&h=500",
      description: "E-commerce pour une boutique de vêtements tendance"
    },
    {
      id: 5,
      title: "Agence de Voyage",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Site web pour une agence de voyages de luxe"
    },
    {
      id: 6,
      title: "Studio Architecture",
      category: "web",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Portfolio pour un studio d'architecture contemporaine"
    },
    {
      id: 7,
      title: "Yoga & Bien-être",
      category: "flyer",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Flyer pour un studio de yoga et centre de bien-être"
    },
    {
      id: 8,
      title: "Application Fitness",
      category: "web",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500&h=500",
      description: "Application web pour un service de coaching sportif"
    }
  ];

  // Filtrer les éléments selon la catégorie active
  const filteredItems = portfolioItems.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Notre Portfolio</h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Découvrez nos réalisations récentes en matière de flyers et de sites web.
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
              onClick={() => {setActiveCategory("all"); setCurrentPage(1);}}
            >
              Tous
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "flyer" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } border-y border-brand-blue`}
              onClick={() => {setActiveCategory("flyer"); setCurrentPage(1);}}
            >
              Flyers
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium ${
                activeCategory === "web" 
                  ? "bg-brand-blue text-white" 
                  : "bg-white text-brand-gray-dark hover:bg-brand-gray-light"
              } rounded-r-lg border border-brand-blue`}
              onClick={() => {setActiveCategory("web"); setCurrentPage(1);}}
            >
              Sites Web
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-0 right-0 bg-brand-violet text-white text-xs uppercase font-semibold px-2 py-1 m-2 rounded">
                  {item.category === "flyer" ? "Flyer" : "Site Web"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-brand-gray-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-brand-blue text-white hover:bg-brand-blue-dark"
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center px-4 font-medium">
              {currentPage} / {totalPages}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-brand-blue text-white hover:bg-brand-blue-dark"
              }`}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
