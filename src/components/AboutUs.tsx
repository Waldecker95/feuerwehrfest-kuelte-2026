import { Users, Heart, Trophy, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  const sponsors = [
    "Dorfgemeinschaft Külte",
    "Ortsverein TV08",
    "Lokale Unternehmen",
    "Freiwillige Helfer"
  ];

  const values = [
    {
      icon: Heart,
      title: "Gemeinschaft",
      description: "Zusammenhalt und Freundschaft stehen im Mittelpunkt unseres Dorffestes",
      color: "text-red-500"
    },
    {
      icon: Trophy,
      title: "Tradition",
      description: "Das Turnier der Straßenmannschaften ist eine langjährige Tradition in Külte",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Für alle",
      description: "Jung und Alt, Einheimische und Gäste - alle sind herzlich willkommen",
      color: "text-blue-500"
    },
    {
      icon: Home,
      title: "Heimatverbunden",
      description: "Wir feiern unser schönes Dorf und die Menschen, die es zu Hause machen",
      color: "text-green-500"
    }
  ];

  return (
    <section id="ueber-uns" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Home className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-green-800 mb-4">Über uns</h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Das KÜLTE Open Air Event wird von der Dorfgemeinschaft mit viel Liebe und Engagement organisiert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Unsere Geschichte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-700 leading-relaxed">
                  Seit vielen Jahren bringt das traditionelle <strong>Turnier der Straßenmannschaften</strong> 
                  die Dorfgemeinschaft zusammen. Was als kleines Straßenhandball-Turnier begann, hat sich 
                  zu einem zweitägigen Fest für die ganze Familie entwickelt.
                </p>
                <p className="text-green-700 leading-relaxed">
                  Mit der Erweiterung um das Beerpong-Turnier und Live-Musik sprechen wir heute alle 
                  Generationen an und schaffen unvergessliche Momente des Zusammenhalts.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Unser Motto:</h4>
                  <p className="text-green-700 italic">
                    "Dou bis nau ni an Külte vorbei över" - 
                    Ein Fest für alle, die unser Dorf lieben!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Unsere Werte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <value.icon className={`w-6 h-6 ${value.color} mt-1 flex-shrink-0`} />
                      <div>
                        <h4 className="font-semibold text-green-800">{value.title}</h4>
                        <p className="text-green-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organizer & Sponsors */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Veranstalter</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800 mb-2">TV08 Külte</div>
                <p className="text-green-600 mb-4">
                  Unser örtlicher Turnverein organisiert das Event ehrenamtlich 
                  mit Unterstützung der gesamten Dorfgemeinschaft.
                </p>
                <Badge className="bg-green-600 text-white px-4 py-2">
                  Seit 1908 aktiv
                </Badge>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Kontakt Veranstalter:</h4>
                <p className="text-green-700 text-sm">
                  E-Mail: info@kulte-events.de<br />
                  Web: kulte-events.de
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>Unterstützer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-700 text-center mb-4">
                Unser Dank gilt allen, die das Event möglich machen:
              </p>
              
              <div className="space-y-2">
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                      {sponsor}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Mitmachen?</h4>
                <p className="text-green-700 text-sm">
                  Möchten Sie das Event unterstützen oder beim nächsten Mal mithelfen? 
                  Kontaktieren Sie uns gerne!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;