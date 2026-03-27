import { Users, Heart, Trophy, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  const supporters = [
    "Freiwillige Feuerwehr Volkmarsen-Külte",
    "Eventservice Evi und Ajdini",
    "Örtliche Vereine Külte",
    "Freiwillige Helfer"
  ];

  const values = [
    {
      icon: Heart,
      title: "Gemeinschaft",
      description: "Zusammenhalt und Freundschaft stehen im Mittelpunkt unseres Feuerwehrfestes",
      color: "text-red-500"
    },
    {
      icon: Trophy,
      title: "Tradition",
      description: "Das Feuerwehrfest ist ein fester Bestandteil des Külter Dorflebens",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Für alle",
      description: "Jung und Alt, Einheimische und Gäste – alle sind herzlich willkommen",
      color: "text-red-600"
    },
    {
      icon: Flame,
      title: "Ehrenamt",
      description: "Organisiert von engagierten Kameradinnen und Kameraden der Feuerwehr",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="ueber-uns" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Flame className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das Feuerwehrfest Külte wird von der Freiwilligen Feuerwehr Volkmarsen-Külte mit viel Herzblut und Engagement organisiert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Die Feuerwehr Külte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Die <strong>Freiwillige Feuerwehr Volkmarsen</strong>, Löschzug Külte, schützt und dient der
                Dorfgemeinschaft seit Jahrzehnten. Das Feuerwehrfest ist der alljährliche Höhepunkt –
                ein Fest für alle, das Tradition und Moderne vereint.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mit drei Tagen voller Live-Musik, Spaßwettkämpfen, einem spannenden BeerPong-Turnier
                und dem traditionellen Festzug laden wir alle Einwohner und Gäste aus der Region herzlich ein.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Unsere Werte</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <value.icon className={`w-6 h-6 ${value.color} mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center space-x-2">
                <Users className="w-6 h-6 text-red-600" />
                <span>Veranstalter</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Freiwillige Feuerwehr<br />Volkmarsen-Külte
                </div>
                <p className="text-gray-600 mb-4">
                  Ehrenamtlich organisiert für die gesamte Dorfgemeinschaft und alle Gäste aus der Region.
                </p>
                <Badge className="bg-red-600 text-white px-4 py-2">
                  Löschzug Külte
                </Badge>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Wehrführer:</h4>
                  <p className="text-gray-700 text-sm">Till Wilke</p>
                  <a href="tel:01626949325" className="text-red-600 text-sm hover:underline block">0162 6949325</a>
                  <a href="mailto:wehrfuehrer@feuerwehr-kuelte.de" className="text-red-600 text-sm hover:underline block">wehrfuehrer@feuerwehr-kuelte.de</a>
                </div>
                <div className="border-t border-red-100 pt-2">
                  <h4 className="font-semibold text-gray-800 mb-1">Bewirtung:</h4>
                  <p className="text-gray-700 text-sm font-bold">Evi und Ajdini</p>
                  <a href="tel:01765623169" className="text-red-600 text-sm hover:underline">01765 623169</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-600" />
                <span>Unterstützer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-center mb-4">
                Unser Dank gilt allen, die das Fest möglich machen:
              </p>
              <div className="space-y-2">
                {supporters.map((supporter, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Badge variant="outline" className="border-red-300 text-red-700 bg-red-50">
                      {supporter}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Mitmachen?</h4>
                <p className="text-gray-600 text-sm">
                  Möchten Sie das Fest unterstützen oder beim nächsten Mal mithelfen?
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
