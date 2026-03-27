import { Clock, Users, Trophy, Music, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventProgram = () => {
  const fridayProgram = [
    {
      time: "19:30",
      title: "Festauftakt",
      description: "mit ENJOY Band",
      icon: Music,
      highlight: true
    }
  ];

  const saturdayProgram = [
    {
      time: "12:00",
      title: "Spaßwettkämpfe",
      description: "Viel Spaß und gute Stimmung für alle",
      icon: Trophy,
      highlight: true
    },
    {
      time: "14:00",
      title: "BeerPong Turnier",
      description: "Anmeldung erforderlich – jetzt anmelden!",
      icon: Trophy,
      highlight: true
    },
    {
      time: "17:00",
      title: "Party und Stimmung",
      description: "mit DJ Markus",
      icon: Music,
      highlight: true
    }
  ];

  const sundayProgram = [
    {
      time: "10:00",
      title: "Origineller Festzug",
      description: "Durch Külte",
      icon: Users,
      highlight: false
    },
    {
      time: "11:00",
      title: "Traditioneller Frühschoppen",
      description: "Gemeinsam anstoßen",
      icon: Users,
      highlight: true
    },
    {
      time: "16:00",
      title: "Wettkampf der örtl. Vereine",
      description: "mit Eine Band Namens Wanda",
      icon: Trophy,
      highlight: true
    }
  ];

  const DayCard = ({ time, title, description, icon: Icon, highlight }: {
    time: string; title: string; description: string; icon: any; highlight: boolean;
  }) => (
    <Card className={`transition-all duration-300 hover:shadow-lg ${highlight ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="font-bold text-red-700 text-sm">{time} Uhr</span>
          </div>
          <Icon className={`w-5 h-5 ${highlight ? 'text-red-600' : 'text-gray-500'}`} />
        </div>
        <CardTitle className="text-base text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="programm" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Flame className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programm</h2>
          <p className="text-xl text-red-600">Drei Tage voller Feiern, Sport und Gemeinschaft</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Friday */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-red-700 text-white text-base px-5 py-2 mb-3">
                Freitag, 05. Juni
              </Badge>
              <h3 className="text-xl font-bold text-gray-800">Festauftakt</h3>
            </div>
            <div className="space-y-3">
              {fridayProgram.map((item, index) => (
                <DayCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Saturday */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-red-700 text-white text-base px-5 py-2 mb-3">
                Samstag, 06. Juni
              </Badge>
              <h3 className="text-xl font-bold text-gray-800">Sport & Party</h3>
            </div>
            <div className="space-y-3">
              {saturdayProgram.map((item, index) => (
                <DayCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Sunday */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-red-700 text-white text-base px-5 py-2 mb-3">
                Sonntag, 07. Juni
              </Badge>
              <h3 className="text-xl font-bold text-gray-800">Festzug & Finale</h3>
            </div>
            <div className="space-y-3">
              {sundayProgram.map((item, index) => (
                <DayCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bewirtung note */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-red-50 border border-red-200 rounded-xl px-6 py-4">
            <p className="text-gray-700 font-medium">Eventservice und Bewirtung</p>
            <p className="text-red-700 font-bold text-lg">Evi und Ajdini</p>
            <a href="tel:01765623169" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
              01765 623169
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventProgram;
