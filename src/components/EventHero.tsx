import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventHero = () => {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10 space-y-8">
        <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-6">
          TURNIER DER STRASSENMANNSCHAFTEN
        </Badge>
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-green-800 mb-4 tracking-tight">
            OPEN AIR
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-600">EVENT</span>
            <br />
            <span className="text-green-800">KÜLTE</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="w-8 h-8 text-green-700" />
            <div className="text-4xl font-bold text-green-800">
              23.-24.08.2025
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-6 h-6 text-green-600" />
            <span className="text-xl text-green-700">Külte, Deutschland</span>
          </div>
          
          <Badge variant="secondary" className="bg-green-800 text-white text-xl px-8 py-3 rounded-full mb-8">
            Straßenhandball & Dorffest
          </Badge>
          
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
            onClick={() => document.getElementById('anmeldung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt Beerpong-Team anmelden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventHero;