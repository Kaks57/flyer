
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-blue to-brand-violet text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Contactez-Nous</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Des questions ? Un projet ? Nous sommes là pour vous aider à donner vie à vos idées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-xl p-8 text-brand-gray-dark shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-brand-gray-dark text-center mb-6">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-brand-blue hover:bg-brand-blue-dark"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="flyer_standard">Flyer Standard</option>
                      <option value="flyer_premium">Flyer Premium</option>
                      <option value="flyer_enterprise">Flyer Entreprise</option>
                      <option value="web_showcase">Site Web Vitrine</option>
                      <option value="web_ecommerce">Site E-commerce</option>
                      <option value="web_custom">Site Sur Mesure</option>
                      <option value="other">Autre demande</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue-dark hover:to-brand-violet-dark flex items-center justify-center"
                  >
                    Envoyer le message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Téléphone</h3>
                  <p className="opacity-90">Disponible du lundi au vendredi, 9h-18h</p>
                  <a href="tel:+33123456789" className="text-white font-semibold hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email</h3>
                  <p className="opacity-90">Réponse sous 24h ouvrées</p>
                  <a href="mailto:contact@webcraftstudio.fr" className="text-white font-semibold hover:underline">
           ryanlainoh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Adresse</h3>
                  <p className="opacity-90">Rencontrons-nous à nos bureaux</p>
                  <address className="not-italic text-white">
                    15 Rue de l'Innovation<br />
                    75011 Paris, France
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-xl mb-3">Nos Horaires</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
