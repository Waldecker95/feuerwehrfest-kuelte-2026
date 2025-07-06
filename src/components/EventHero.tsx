import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const EventHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10 space-y-8">
        <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-6">
          Dorffest & Turnier der Straßenmannschaften
        </Badge>
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            OPEN AIR
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-accent">EVENT</span>
            <br />
            <span className="text-primary">KÜLTE</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <div className="text-4xl font-bold text-primary">
              23.-24.08.2025
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-xl text-primary/80">Külte, Deutschland</span>
          </div>
          
          <Badge variant="secondary" className="bg-primary text-white text-xl px-8 py-3 rounded-full mb-8">
            Straßenhandball & Dorffest
          </Badge>
          
          <Button 
            size={isMobile ? "default" : "lg"}
            className={`bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg transition-all ${
              isMobile 
                ? "w-full px-4 py-3 text-base" 
                : "px-8 py-4 text-lg"
            }`}
            onClick={() => document.getElementById('anmeldung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {isMobile ? "Beerpong-Team anmelden" : "Jetzt Beerpong-Team anmelden"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventHero;