import { Calendar, MapPin, Users, Trophy, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EventHero from "@/components/EventHero";
import EventProgram from "@/components/EventProgram";
import BeerpongRegistration from "@/components/BeerpongRegistration";
import EventMap from "@/components/EventMap";
import ContactFAQ from "@/components/ContactFAQ";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-800">KÜLTE 2025</div>
            <div className="hidden md:flex space-x-6">
              <a href="#programm" className="text-green-700 hover:text-green-900 transition-colors">Programm</a>
              <a href="#anmeldung" className="text-green-700 hover:text-green-900 transition-colors">Anmeldung</a>
              <a href="#karte" className="text-green-700 hover:text-green-900 transition-colors">Anfahrt</a>
              <a href="#kontakt" className="text-green-700 hover:text-green-900 transition-colors">Kontakt</a>
              <a href="#ueber-uns" className="text-green-700 hover:text-green-900 transition-colors">Über uns</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <EventHero />
        <EventProgram />
        <BeerpongRegistration />
        <EventMap />
        <ContactFAQ />
        <AboutUs />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold">KÜLTE Open Air Event 2025</div>
            <p className="text-green-200">23.-24. August 2025 • Turnier der Straßenmannschaften</p>
            <div className="flex justify-center space-x-6">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                kulte-events.de
              </Badge>
            </div>
            <p className="text-sm text-green-300">
              Instagram: @DORFFEST_KULTE_2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;