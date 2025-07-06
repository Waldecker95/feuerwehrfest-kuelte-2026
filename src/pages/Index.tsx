import { Calendar, MapPin, Users, Trophy, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import EventHero from "@/components/EventHero";
import SharedLayout from "@/components/SharedLayout";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">KÜLTE 2025</div>
            <div className="hidden md:flex space-x-6">
              <Link to="/programm" className="text-primary hover:text-primary/80 transition-colors">Programm</Link>
              <Link to="/anmeldung" className="text-primary hover:text-primary/80 transition-colors">Anmeldung</Link>
              <Link to="/karte" className="text-primary hover:text-primary/80 transition-colors">Anfahrt</Link>
              <Link to="/kontakt" className="text-primary hover:text-primary/80 transition-colors">Kontakt</Link>
              <Link to="/ueber-uns" className="text-primary hover:text-primary/80 transition-colors">Über uns</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <EventHero />
        
        {/* Quick Navigation Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">Programm</CardTitle>
                  <CardDescription>Alle Events & Zeiten</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/programm">
                    <Button variant="outline" className="w-full">Zum Programm</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Trophy className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary">Beerpong</CardTitle>
                  <CardDescription>Team anmelden</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/anmeldung">
                    <Button className="w-full bg-accent hover:bg-accent/90">Jetzt anmelden</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">Anfahrt</CardTitle>
                  <CardDescription>Weg zu uns finden</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/karte">
                    <Button variant="outline" className="w-full">Zur Karte</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">Kontakt</CardTitle>
                  <CardDescription>Fragen & Antworten</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to="/kontakt">
                    <Button variant="outline" className="w-full">Kontakt & FAQ</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold">KÜLTE Open Air Event 2025</div>
            <p className="text-primary-foreground/80">23.-24. August 2025 • Turnier der Straßenmannschaften</p>
            <div className="flex justify-center space-x-6">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                kulte-events.de
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