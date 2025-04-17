
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
