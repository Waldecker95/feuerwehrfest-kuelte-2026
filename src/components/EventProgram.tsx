import { Clock, Users, Trophy, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const EventProgram = () => {
  const saturdayProgram = [{
    time: "10:00",
    title: "Aufbau & Vorbereitung",
    description: "Aufbau der Spielfelder und Bühne",
    icon: Users
  }, {
    time: "12:00",
    title: "Straßenhandball-Turnier",
    description: "Traditionelles Turnier der Straßenmannschaften - Feste Teams",
    icon: Trophy,
    highlight: true
  }, {
    time: "15:00",
    title: "Kaffee & Kuchen",
    description: "Gemütliche Pause mit hausgemachtem Kuchen",
    icon: Users
  }, {
    time: "19:00",
    title: "Live Musik",
    description: "Abendprogramm mit lokalen Bands",
    icon: Music,
    highlight: true
  }];
  const sundayProgram = [{
    time: "13:00",
    title: "Beerpong-Turnier",
    description: "Anmeldung erforderlich - Spannende Matches mit Preisen",
    icon: Trophy,
    highlight: true
  }, {
    time: "15:00",
    title: "Großes Kuchenbuffet der Külter Landfrauen",
    description: "Hausgemachte Kuchen und Torten",
    icon: Users,
    highlight: true
  }, {
    time: "16:00",
    title: "Finale & Siegerehrung",
    description: "Die besten Teams kämpfen ums Finale",
    icon: Trophy
  }, {
    time: "18:00",
    title: "Gemütlicher Ausklang",
    description: "Entspanntes Beisammensein mit Getränken",
    icon: Users
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