
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const TarifsPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default TarifsPage;
