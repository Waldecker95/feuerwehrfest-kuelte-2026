import { Flame, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EventHero from "@/components/EventHero";
import EventProgram from "@/components/EventProgram";
import BeerpongRegistration from "@/components/BeerpongRegistration";
import EventMap from "@/components/EventMap";
import ContactFAQ from "@/components/ContactFAQ";
import AboutUs from "@/components/AboutUs";

const Index = () => {
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#programm" className="hover:text-orange-300 transition-colors">Programm</a>
              <a href="#anmeldung" className="hover:text-orange-300 transition-colors">Beerpong</a>
              <a href="#karte" className="hover:text-orange-300 transition-colors">Anfahrt</a>
              <a href="#kontakt" className="hover:text-orange-300 transition-colors">Kontakt</a>
              <a href="#ueber-uns" className="hover:text-orange-300 transition-colors">Über uns</a>
              <a href="/impressum" className="hover:text-orange-300 transition-colors">Impressum</a>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-red-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex items-center space-x-2 mb-8 pt-2">
                  <Flame className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-gray-900">Feuerwehrfest Külte</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  <a href="#programm" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Programm</a>
                  <a href="#anmeldung" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Beerpong</a>
                  <a href="#karte" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Anfahrt</a>
                  <a href="#kontakt" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Kontakt</a>
                  <a href="#ueber-uns" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Über uns</a>
                  <a href="/impressum" className="text-lg text-gray-800 hover:text-red-600 transition-colors">Impressum</a>
                </nav>
              </SheetContent>
            </Sheet>
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
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Flame className="w-6 h-6 text-orange-300" />
              <span className="text-xl font-bold">Feuerwehrfest Külte 2026</span>
            </div>
            <p className="text-white/80">05. – 07. Juni 2026 · Festzelt auf dem Sportplatz in Külte</p>
            <p className="text-white/70 text-sm">Freiwillige Feuerwehr Volkmarsen-Külte</p>
            <div className="flex justify-center space-x-4 pt-2 text-sm text-white/60">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
