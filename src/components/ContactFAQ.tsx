import { useState } from "react";
import { Mail, Phone, HelpCircle, ChevronDown, ChevronUp, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
      question: "Bis wann kann ich mein Beerpong-Team anmelden?",
      answer: "Die Anmeldung für das Beerpong-Turnier ist bis zum 04.06.2026 möglich. Das Turnier beginnt am Samstag, 06.06.2026 um 14:00 Uhr."
    },
    {
      question: "Wie viele Spieler braucht ein Beerpong-Team?",
      answer: "Ein Beerpong-Team besteht aus genau 2 Spielern. Beide Namen müssen bei der Anmeldung angegeben werden."
    },
    {
      question: "Was kostet die Teilnahme am Beerpong-Turnier?",
      answer: "Die Startgebühr beträgt 15 €. Die Gebühr wird vor Ort beim Turnierbeginn eingezogen."
    },
    {
      question: "Sind Parkplätze vorhanden?",
      answer: "Ja, am Sportplatz in Külte stehen ausreichend kostenlose Parkplätze zur Verfügung."
    },
    {
      question: "Gibt es Verpflegung vor Ort?",
      answer: "Ja! Evi und Ajdini sorgen mit ihrem Eventservice für das leibliche Wohl. Getränke und Speisen sind das gesamte Wochenende erhältlich."
    },
    {
      question: "Was passiert bei schlechtem Wetter?",
      answer: "Das Feuerwehrfest findet im Festzelt auf dem Sportplatz statt – also auch bei Regen gesichert. Bei extremen Bedingungen informieren wir über unsere Kanäle."
    },
    {
      question: "Wo findet das Fest statt?",
      answer: "Das Feuerwehrfest findet im Festzelt auf dem Sportplatz in Külte statt. Külte ist ein Ortsteil von Volkmarsen in Nordhessen."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message
        }
      });

      if (error) {
        toast({
          title: "Fehler",
          description: "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
      });

      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden der Nachricht ist ein Fehler aufgetreten.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontakt" className="py-16 px-4 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt & FAQ</h2>
          <p className="text-xl text-red-600">Haben Sie Fragen? Wir helfen gerne weiter!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-red-600" />
                  <span>Häufige Fragen</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-red-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-4 text-left hover:bg-red-50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                        {openFAQ === index
                          ? <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                          : <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                        }
                      </button>
                      {openFAQ === index && (
                        <div className="px-4 pb-4 text-gray-700 border-t border-red-100 bg-red-50 text-sm">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="bg-white/90 backdrop-blur-sm border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-red-600" />
                  <span>Direkter Kontakt</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="tel:01765623169"
                  className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Bewirtung</div>
                    <div className="text-gray-600 text-sm">Evi und Ajdini · 01765 623169</div>
                  </div>
                </a>
                <a
                  href="mailto:info@feuerwehr-kuelte.de"
                  className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-800">E-Mail</div>
                    <div className="text-gray-600 text-sm">info@feuerwehr-kuelte.de</div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-red-600" />
                  <span>Nachricht senden</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-800 font-medium">Name *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ihr Name"
                        className="border-red-200 focus:border-red-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-gray-800 font-medium">E-Mail *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ihre@email.de"
                        className="border-red-200 focus:border-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-800 font-medium">Betreff *</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Worum geht es?"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-800 font-medium">Nachricht *</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Ihre Nachricht an uns..."
                      rows={5}
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-lg shadow-lg"
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
