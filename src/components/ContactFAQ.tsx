import { useState } from "react";
import { Mail, Phone, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ContactFAQ = () => {
  const { toast } = useToast();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const faqData = [
    {
      question: "Muss ich mich für das Straßenhandball-Turnier anmelden?",
      answer: "Nein, das Straßenhandball-Turnier läuft mit festen Teams aus dem Ort. Eine Anmeldung ist nicht erforderlich."
    },
    {
      question: "Bis wann kann ich mein Beerpong-Team anmelden?",
      answer: "Die Anmeldung für das Beerpong-Turnier ist bis zum 22.08.2025 um 23:59 Uhr möglich."
    },
    {
      question: "Wie viele Spieler braucht ein Beerpong-Team?",
      answer: "Ein Beerpong-Team besteht aus genau 2 Spielern. Beide Namen müssen bei der Anmeldung angegeben werden."
    },
    {
      question: "Sind Parkplätze vorhanden?",
      answer: "Ja, es stehen ausreichend kostenlose Parkplätze zur Verfügung. Folgen Sie einfach der Beschilderung vor Ort."
    },
    {
      question: "Gibt es Verpflegung vor Ort?",
      answer: "Ja, wir bieten Getränke und Snacks an. Am Samstag und Sonntag gibt es Kaffee und hausgemachenen Kuchen."
    },
    {
      question: "Was passiert bei schlechtem Wetter?",
      answer: "Das Event findet auch bei leichtem Regen statt. Bei extremen Wetterbedingungen informieren wir über unsere Social Media Kanäle."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Hier wird später die E-Mail-Integration erfolgen
    console.log("Contact Form:", contactForm);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontakt" className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-green-800 mb-4">Kontakt & FAQ</h2>
          <p className="text-xl text-green-600">Haben Sie Fragen? Wir helfen gerne weiter!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6" />
                  <span>Häufige Fragen</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-green-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-4 text-left hover:bg-green-50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold text-green-800 pr-4">{faq.question}</span>
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === index && (
                        <div className="px-4 pb-4 text-green-700 border-t border-green-200 bg-green-50">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800">Direkter Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a 
                    href="mailto:info@kulte-events.de"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-800">E-Mail</div>
                      <div className="text-green-600 text-sm">info@kulte-events.de</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/491234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-800">WhatsApp</div>
                      <div className="text-green-600 text-sm">Schnelle Antworten</div>
                    </div>
                  </a>
                </div>
                
                <div className="pt-2">
                  <Badge className="bg-green-600 text-white">
                    Instagram: @DORFFEST_KULTE_2025
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center space-x-2">
                  <Mail className="w-6 h-6" />
                  <span>Nachricht senden</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-green-800 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ihr Name"
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-green-800 font-medium">
                        E-Mail *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ihre@email.de"
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-green-800 font-medium">
                      Betreff *
                    </Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Worum geht es?"
                      className="border-green-300 focus:border-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-green-800 font-medium">
                      Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Ihre Nachricht an uns..."
                      rows={5}
                      className="border-green-300 focus:border-green-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-lg shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;