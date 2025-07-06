import { useState } from "react";
import { Users, Trophy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BeerpongRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    player1: "",
    player2: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('beerpong_registrations')
        .insert({
          team_name: formData.teamName,
          player1: formData.player1,
          player2: formData.player2,
          email: formData.email,
          phone: formData.phone || null
        });

      if (error) {
        throw error;
      }
      
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
    <section id="anmeldung" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-primary mb-4">Beerpong-Team anmelden</h2>
          <p className="text-xl text-accent mb-6">
            Melden Sie Ihr Team für das Beerpong-Turnier am Sonntag an
          </p>
          <Badge className="bg-primary text-white px-4 py-2">
            Anmeldung bis 22.08.2025
          </Badge>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
              <Users className="w-6 h-6" />
              <span>Team-Anmeldung</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-primary font-medium">
                  Team-Name *
                </Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  placeholder="z.B. Die Dorfkönige"
                  className="border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="player1" className="text-primary font-medium">
                    Spieler 1 *
                  </Label>
                  <Input
                    id="player1"
                    value={formData.player1}
                    onChange={(e) => handleInputChange("player1", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-primary/30 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="player2" className="text-primary font-medium">
                    Spieler 2 *
                  </Label>
                  <Input
                    id="player2"
                    value={formData.player2}
                    onChange={(e) => handleInputChange("player2", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="border-primary/30 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-medium">
                  E-Mail-Adresse *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="team@example.com"
                  className="border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary font-medium">
                  Telefonnummer (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+49 123 456789"
                  className="border-primary/30 focus:border-primary"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Wichtige Informationen:</h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• Teams bestehen aus genau 2 Spielern</li>
                  <li>• Anmeldeschluss: 22.08.2025, 23:59 Uhr</li>
                  <li>• Turnierbeginn: Sonntag, 13:00 Uhr</li>
                  <li>• Tolle Preise für die besten Teams!</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-white py-4 text-lg rounded-lg shadow-lg"
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