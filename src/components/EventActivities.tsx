import { Music, Users, Coffee, Beer, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EventActivities = () => {
  const activities = [
    {
      icon: Users,
      title: "Kinder Programm",
      description: "Umfangreiches Programm für unsere kleinen Gäste mit Spielen und Aktivitäten",
      color: "text-yellow-400"
    },
    {
      icon: Coffee,
      title: "Kaffee & Kuchen",
      description: "Gemütliche Kaffeepause mit hausgemachtem Kuchen und heißen Getränken",
      color: "text-orange-400"
    },
    {
      icon: Trophy,
      title: "Müller-Meier Schulze",
      description: "Traditionelles Turnier der Straßenmannschaften",
      color: "text-green-400"
    },
    {
      icon: Beer,
      title: "Beerpong Turnier",
      description: "Spannende Beerpong-Matches mit tollen Preisen",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Was Sie erwartet
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <Card 
            key={index} 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <CardHeader className="text-center">
              <activity.icon className={`w-12 h-12 mx-auto mb-4 ${activity.color}`} />
              <CardTitle className="text-xl">{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-200 text-center">
                {activity.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EventActivities;
