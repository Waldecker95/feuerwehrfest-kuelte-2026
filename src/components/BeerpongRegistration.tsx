import { useState } from "react";
import { Users, Trophy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const BeerpongRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    player1: "",
    player2: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.teamName || !formData.player1 || !formData.player2 || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Hier wird später die Supabase-Integration erfolgen
    console.log("Beerpong Team Registration:", formData);
    
    toast({
      title: "Anmeldung erfolgreich!",
      description: `Team "${formData.teamName}" wurde erfolgreich angemeldet.`,
    });

    // Reset form
    setFormData({
      teamName: "",
      player1: "",
      player2: "",
      email: "",
      phone: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="anmeldung" className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-green-800 mb-4">Beerpong-Team anmelden</h2>
          <p className="text-xl text-green-600 mb-6">
            Melden Sie Ihr Team für das Beerpong-Turnier am Sonntag an
          </p>
          <Badge className="bg-green-600 text-white px-4 py-2">
            Anmeldung bis 22.08.2025
          </Badge>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 flex items-center justify-center space-x-2">
              <Users className="w-6 h-6" />
              <span>Team-Anmeldung</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-green-800 font-medium">
                  Team-Name *
                </Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  placeholder="z.B. Die Dorfkönige"
                  className="border-green-300 focus:border-green-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="player1" className="text-green-800 font-medium">
                    Spieler 1 *
                  </Label>
                  <Input
                    id="player1"
                    value={formData.player1}
                    onChange={(e) => handleInputChange("player1", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-green-300 focus:border-green-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="player2" className="text-green-800 font-medium">
                    Spieler 2 *
                  </Label>
                  <Input
                    id="player2"
                    value={formData.player2}
                    onChange={(e) => handleInputChange("player2", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-green-300 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-800 font-medium">
                  E-Mail-Adresse *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="team@example.com"
                  className="border-green-300 focus:border-green-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-800 font-medium">
                  Telefonnummer (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+49 123 456789"
                  className="border-green-300 focus:border-green-500"
                />
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Wichtige Informationen:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Teams bestehen aus genau 2 Spielern</li>
                  <li>• Anmeldeschluss: 22.08.2025, 23:59 Uhr</li>
                  <li>• Turnierbeginn: Sonntag, 13:00 Uhr</li>
                  <li>• Tolle Preise für die besten Teams!</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-lg shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Team anmelden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BeerpongRegistration;