import { Clock, Users, Trophy, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const EventProgram = () => {
  const saturdayProgram = [{
    time: "11:00",
    title: "Aufstellung zum Festzug",
    description: "Hinter dem Schoppen Richtung Nordwaldeckhalle",
    icon: Users
  }, {
    time: "12:30",
    title: "Straßenturnier 2025",
    description: "der Külter Straßenmannschaften",
    icon: Trophy,
    highlight: true
  }, {
    time: "12:30",
    title: "Kinderprogramm",
    description: "Spiele und Aktivitäten für die kleinen Gäste",
    icon: Users,
    highlight: true
  }, {
    time: "18:00",
    title: "Spielmannszug Bad Arolsen/Höringhausen",
    description: "Live Musik mit dem Spielmannszug",
    icon: Music,
    highlight: true
  }, {
    time: "20:00",
    title: "Party mit Liveband \"Müller Meier Schulze\"",
    description: "Live Musik und Party bis spät in die Nacht",
    icon: Music,
    highlight: true
  }];
  const sundayProgram = [{
    time: "10:00",
    title: "Gottesdienst",
    description: "Gemeinsamer Gottesdienst",
    icon: Users
  }, {
    time: "anschl.",
    title: "Frühschoppen",
    description: "Frühschoppen mit den Stammtischsängern Külte",
    icon: Music,
    highlight: true
  }, {
    time: "11:00",
    title: "Kinderprogramm",
    description: "mit dem Förderverein KiGa Külte",
    icon: Users,
    highlight: true
  }, {
    time: "12:00",
    title: "Spiele ohne Grenzen",
    description: "der Külter Straßenmannschaften",
    icon: Trophy,
    highlight: true
  }, {
    time: "13:00",
    title: "Beerpong-Turnier",
    description: "Anmeldung erforderlich - Start ab 14:30 Uhr",
    icon: Trophy,
    highlight: true
  }, {
    time: "14:00",
    title: "Kaffee- und Kuchentafel",
    description: "der Landfrauen Külte",
    icon: Users,
    highlight: true
  }, {
    time: "14:15",
    title: "Tanzeinlage",
    description: "der \"Külter Küken und Kracher\"",
    icon: Music,
    highlight: true
  }, {
    time: "15:00",
    title: "Fanfarenzug Mengeringhausen",
    description: "Live Musik mit dem Fanfarenzug",
    icon: Music,
    highlight: true
  }, {
    time: "16:00",
    title: "Siegerehrung der Straßenwettbewerbe",
    description: "Ehrung der Gewinner der Straßenwettbewerbe",
    icon: Trophy
  }, {
    time: "18:00",
    title: "Siegerehrung Bierpong-Turnier",
    description: "Ehrung der Beerpong-Champions",
    icon: Trophy
  }];
  return <section id="programm" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Programm</h2>
          <p className="text-xl text-accent">Zwei Tage voller Spaß, Sport und Gemeinschaft</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Saturday */}
          <div className="space-y-6">
            <div className="text-center">
              <Badge className="bg-primary text-white text-lg px-6 py-2 mb-4">
                Samstag, 23.08.2025
              </Badge>
              <h3 className="text-2xl font-bold text-primary">Straßenhandball & Musik</h3>
            </div>
            
            <div className="space-y-4">
              {saturdayProgram.map((item, index) => <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${item.highlight ? 'border-primary bg-blue-50' : 'border-blue-200'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-bold text-primary">{item.time}</span>
                      </div>
                      <item.icon className={`w-6 h-6 ${item.highlight ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary/80">{item.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Sunday */}
          <div className="space-y-6">
            <div className="text-center">
              <Badge className="bg-primary text-white text-lg px-6 py-2 mb-4">
                Sonntag, 24.08.2025
              </Badge>
              <h3 className="text-2xl font-bold text-primary">Beerpong-Turnier &amp; Kuchenbuffet</h3>
            </div>
            
            <div className="space-y-4">
              {sundayProgram.map((item, index) => <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${item.highlight ? 'border-primary bg-blue-50' : 'border-blue-200'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-bold text-primary">{item.time}</span>
                      </div>
                      <item.icon className={`w-6 h-6 ${item.highlight ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary/80">{item.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EventProgram;