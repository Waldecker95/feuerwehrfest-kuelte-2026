import { Calendar, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const EventHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-red-700 to-red-900 text-white overflow-hidden">
      {/* Diagonal stripes background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10 space-y-8">
        <Badge variant="outline" className="bg-white/20 text-white border-white/40 text-base px-6 py-2 mb-4 uppercase tracking-wider">
          Freiwillige Feuerwehr Volkmarsen-Külte
        </Badge>

        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Flame className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-red-700 mb-2 tracking-tight uppercase">
            Feuerwehrfest
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Külte
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-7 h-7 text-red-600" />
            <div className="text-3xl md:text-4xl font-bold text-red-700">
              05. – 07. Juni 2026
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-lg text-gray-600">Festzelt auf dem Sportplatz in Külte</span>
          </div>

          <Button
            size={isMobile ? "default" : "lg"}
            className={`bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all ${isMobile ? "w-full px-4 py-3 text-base" : "px-8 py-4 text-lg"}`}
            onClick={() => document.getElementById('anmeldung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {isMobile ? "Beerpong-Team anmelden" : "Jetzt Beerpong-Team anmelden"}
          </Button>
        </div>

        <p className="text-white/80 text-sm">Seid herzlich Willkommen!</p>
      </div>
    </section>
  );
};

export default EventHero;
