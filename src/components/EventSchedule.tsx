
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventSchedule = () => {
  const schedule = [
    {
      day: "Samstag, 23.08.2025",
      events: [
        {
          title: "Traditionelles Handballturnier",
          description: "der Straßenmannschaften",
          type: "sport"
        },
        {
          title: "Kaffee & Kuchen",
          description: "Gemütliche Pause mit hausgemachten Leckereien",
          type: "food"
        },
        {
          title: "Open Air Party",
          description: "mit Müller-Meier Schulze",
          type: "party"
        }
      ]
    },
    {
      day: "Sonntag, 24.08.2025",
      events: [
        {
          title: "Frühschoppen",
          description: "Gemütlicher Start in den Tag",
          type: "social"
        },
        {
          title: "Open Air Party",
          description: "mit Müller-Meier Schulze",
          type: "party"
        },
        {
          title: "Beerpong-Turnier",
          description: "Spiele ohne Grenzen",
          type: "sport"
        },
        {
          title: "Kinderprogramm",
          description: "Spaß für die ganze Familie",
          type: "family"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "sport": return "bg-green-600";
      case "music": return "bg-pink-600";
      case "food": return "bg-orange-600";
      case "party": return "bg-purple-600";
      case "social": return "bg-blue-600";
      case "family": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Programm
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {schedule.map((day, dayIndex) => (
          <Card key={dayIndex} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-green-400">
                {day.day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5">
                  <Badge className={`${getTypeColor(event.type)} text-white px-3 py-1 text-sm`}>
                    {event.type === "sport" ? "Sport" : 
                     event.type === "music" ? "Musik" :
                     event.type === "food" ? "Essen" :
                     event.type === "party" ? "Party" :
                     event.type === "social" ? "Social" : "Familie"}
                  </Badge>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{event.title}</h4>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EventSchedule;
