import { Calendar, MapPin, Trophy, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BeerpongRegistration from "@/components/BeerpongRegistration";
import { useNavigate } from "react-router-dom";

const BeerpongAnmeldung = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">KÜLTE 2025</div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-primary hover:text-primary/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Hauptseite
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-6">
            Beerpong-Turnier Anmeldung
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BEERPONG
            <br />
            <span className="text-accent">TURNIER</span>
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">24.08.2025</div>
                <div className="text-white/80">Sonntag</div>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">13:00 Uhr</div>
                <div className="text-white/80">Turnierbeginn</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">Külte</div>
                <div className="text-white/80">Deutschland</div>
              </div>
            </div>
          </div>
          
          <p className="text-xl mb-8 text-white/90">
            Melden Sie Ihr 2er-Team für das große Beerpong-Turnier beim KÜLTE Open Air Event an!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-accent text-white px-4 py-2 text-lg">
              Startgebühr: 15€
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2 text-lg border-white/30" variant="outline">
              Preise im Wert von 250€
            </Badge>
          </div>
        </div>
      </section>

      <main>
        <BeerpongRegistration />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold">KÜLTE Open Air Event 2025</div>
            <p className="text-primary-foreground/80">23.-24. August 2025 • Turnier der Straßenmannschaften</p>
            <div className="flex justify-center space-x-6">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                kuelte-events.de
              </Badge>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Instagram: @DORFFEST_KULTE_2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeerpongAnmeldung;