
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
