import { Calendar, MapPin, Trophy, ArrowLeft, Menu, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BeerpongRegistration from "@/components/BeerpongRegistration";
import BeerpongRules from "@/components/BeerpongRules";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BeerpongAnmeldung = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "BeerPong Turnier Anmeldung – Feuerwehrfest Külte 2026";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BeerPong Turnier Samstag 06.06.2026 · 14:00 Uhr · Feuerwehrfest Külte · Jetzt 2er-Team anmelden!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'BeerPong Turnier – Feuerwehrfest Külte 2026');

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'BeerPong Turnier Samstag 06.06.2026 · 14:00 Uhr · Jetzt 2er-Team anmelden!');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', 'BeerPong Turnier – Feuerwehrfest Külte 2026');

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', 'BeerPong Turnier Samstag 06.06.2026 · 14:00 Uhr · Jetzt 2er-Team anmelden!');

    return () => {
      document.title = "Feuerwehrfest Külte 2026 – 05. bis 07. Juni";
      if (metaDescription) metaDescription.setAttribute('content', 'Feuerwehrfest Külte vom 05. bis 07. Juni 2026 im Festzelt auf dem Sportplatz. Live-Musik, BeerPong-Turnier und mehr!');
      if (ogTitle) ogTitle.setAttribute('content', 'Feuerwehrfest Külte 2026');
      if (twitterTitle) twitterTitle.setAttribute('content', 'Feuerwehrfest Külte 2026');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Flame className="w-6 h-6 text-orange-300" />
              <span className="text-lg font-bold tracking-wide">Feuerwehrfest Külte 2026</span>
            </div>

            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="hidden sm:flex text-white hover:text-orange-300 hover:bg-red-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Hauptseite
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden text-white hover:bg-red-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/")}
                  className="justify-start text-lg text-gray-800 hover:text-red-600 mt-8"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück zur Hauptseite
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-base px-6 py-2 mb-6 uppercase tracking-wider">
            BeerPong Turnier Anmeldung
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-2 uppercase">
            BeerPong
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-300 uppercase">
            Turnier
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-7 h-7 mb-2" />
                <div className="text-xl font-bold">06.06.2026</div>
                <div className="text-white/80 text-sm">Samstag</div>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-7 h-7 mb-2" />
                <div className="text-xl font-bold">14:00 Uhr</div>
                <div className="text-white/80 text-sm">Turnierbeginn</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-7 h-7 mb-2" />
                <div className="text-xl font-bold">Külte</div>
                <div className="text-white/80 text-sm">Sportplatz</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-500 text-white px-4 py-2 text-base">
              Startgebühr: 15 €
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2 text-base border-white/30" variant="outline">
              2 Spieler pro Team
            </Badge>
          </div>
        </div>
      </section>

      <main>
        <BeerpongRegistration />
        <BeerpongRules />
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Flame className="w-5 h-5 text-orange-300" />
              <span className="text-lg font-bold">Feuerwehrfest Külte 2026</span>
            </div>
            <p className="text-white/70 text-sm">05. – 07. Juni 2026 · Festzelt auf dem Sportplatz in Külte</p>
            <p className="text-white/60 text-sm">Freiwillige Feuerwehr Volkmarsen-Külte</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeerpongAnmeldung;
