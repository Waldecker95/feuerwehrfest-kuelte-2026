import { Calendar, MapPin, Users, Trophy, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EventHero from "@/components/EventHero";
import EventProgram from "@/components/EventProgram";
import BeerpongRegistration from "@/components/BeerpongRegistration";
import BeerpongRules from "@/components/BeerpongRules";
import EventMap from "@/components/EventMap";
import ContactFAQ from "@/components/ContactFAQ";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">KÜLTE 2025</div>
            <div className="hidden md:flex space-x-6">
              <a href="#programm" className="text-primary hover:text-primary/80 transition-colors">Programm</a>
              <a href="#anmeldung" className="text-primary hover:text-primary/80 transition-colors">Anmeldung</a>
              <a href="/beerpong-anmeldung" className="text-primary hover:text-primary/80 transition-colors">Beerpong</a>
              <a href="#regeln" className="text-primary hover:text-primary/80 transition-colors">Regeln</a>
              <a href="#karte" className="text-primary hover:text-primary/80 transition-colors">Anfahrt</a>
              <a href="#kontakt" className="text-primary hover:text-primary/80 transition-colors">Kontakt</a>
              <a href="#ueber-uns" className="text-primary hover:text-primary/80 transition-colors">Über uns</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <EventHero />
        <EventProgram />
        <BeerpongRegistration />
        <BeerpongRules />
        <EventMap />
        <ContactFAQ />
        <AboutUs />
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
export default Index;