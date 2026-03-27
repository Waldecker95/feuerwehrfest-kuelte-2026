import { useState } from "react";
import { Users, Trophy, Mail, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BeerpongRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    player1: "",
    player2: "",
    email: "",
    phone: "",
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.teamName || !formData.player1 || !formData.player2 || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('register-team', {
        body: {
          teamName: formData.teamName,
          player1: formData.player1,
          player2: formData.player2,
          email: formData.email,
          phone: formData.phone || null,
          newsletter: formData.newsletter
        }
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      toast({
        title: "Anmeldung erfolgreich!",
        description: `Team "${formData.teamName}" wurde erfolgreich angemeldet. Eine Bestätigungs-E-Mail ist unterwegs!`,
      });

      setFormData({
        teamName: "",
        player1: "",
        player2: "",
        email: "",
        phone: "",
        newsletter: false
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Fehler",
        description: "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="anmeldung" className="py-16 px-4 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Beerpong-Team anmelden</h2>
          <p className="text-xl text-red-600 mb-6">
            Melde dein Team für das Beerpong-Turnier am Samstag an
          </p>
          <Badge className="bg-red-700 text-white px-4 py-2">
            Turnierbeginn: Samstag, 06.06.2026 · 14:00 Uhr
          </Badge>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-red-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-red-600" />
              <span>Team-Anmeldung</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-gray-800 font-medium">
                  Team-Name *
                </Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  placeholder="z.B. Die Dorfkönige"
                  className="border-red-200 focus:border-red-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="player1" className="text-gray-800 font-medium">
                    Spieler 1 *
                  </Label>
                  <Input
                    id="player1"
                    value={formData.player1}
                    onChange={(e) => handleInputChange("player1", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-red-200 focus:border-red-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="player2" className="text-gray-800 font-medium">
                    Spieler 2 *
                  </Label>
                  <Input
                    id="player2"
                    value={formData.player2}
                    onChange={(e) => handleInputChange("player2", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-red-200 focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800 font-medium">
                  E-Mail-Adresse *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="team@example.com"
                  className="border-red-200 focus:border-red-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-800 font-medium">
                  Telefonnummer (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+49 123 456789"
                  className="border-red-200 focus:border-red-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, newsletter: !!checked }))
                    }
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer leading-5">
                      Newsletter abonnieren (optional)
                    </Label>
                    <p className="text-xs text-gray-500">
                      Ich möchte über zukünftige Veranstaltungen in Külte per E-Mail informiert werden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-2">Wichtige Informationen:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Teams bestehen aus genau 2 Spielern</li>
                  <li>• Startgebühr: 15 €</li>
                  <li>• Turnierbeginn: Samstag, 06.06.2026, 14:00 Uhr</li>
                  <li>• Festzelt auf dem Sportplatz in Külte</li>
                  <li>• Tolle Preise für die besten Teams!</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
                    <h4 className="font-semibold text-gray-700 flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Datenschutzhinweis
                    </h4>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-5 space-y-3 border-t border-gray-200/50 mt-2 pt-3">
                    <p>
                      Ihre persönlichen Daten (Namen und E-Mail-Adressen) werden ausschließlich für die
                      Organisation des Beerpong-Turniers verwendet und nach Abschluss der Veranstaltung
                      automatisch gelöscht, es sei denn, Sie haben dem Newsletter-Empfang zugestimmt.
                    </p>
                    <div>
                      <p className="font-semibold mb-1">Google Maps & Gstatic:</p>
                      <p className="mb-2">
                        Diese Website nutzt Google Maps zur Darstellung der Anfahrt zum Veranstaltungsort.
                        Dabei werden personenbezogene Daten (IP-Adresse, Standortdaten, Geräteinformationen)
                        an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA übertragen
                        und verarbeitet.
                      </p>
                      <p className="mb-2">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                        an der Bereitstellung einer interaktiven Karte).
                      </p>
                      <p className="mb-2">
                        <strong>Datenübertragung in die USA:</strong> Google LLC ist nach dem EU-US Data Privacy
                        Framework zertifiziert. Die Übertragung erfolgt auf Grundlage eines Angemessenheitsbeschlusses
                        der EU-Kommission.
                      </p>
                      <p>
                        Weitere Informationen:
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline ml-1">
                          Google Datenschutzerklärung
                        </a> |
                        <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline ml-1">
                          Datennutzung durch Google
                        </a>
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg rounded-lg shadow-lg"
                disabled={isSubmitting}
              >
                <Mail className="w-5 h-5 mr-2" />
                {isSubmitting ? "Wird angemeldet..." : "Team anmelden"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BeerpongRegistration;
