import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star } from "lucide-react";
const EventTeams = () => {
  const teams = [{
    name: "Weiße Haie",
    slogan: "Schnell wie Blitze, stark wie Haie!",
    members: 8,
    color: "from-blue-400 to-blue-600",
    bgAccent: "bg-blue-500/20",
    hoverColor: "hover:shadow-blue-500/30"
  }, {
    name: "Eintracht Löwenzahn",
    slogan: "Verwurzelt im Sieg, blühend im Spiel!",
    members: 7,
    color: "from-yellow-400 to-orange-500",
    bgAccent: "bg-yellow-500/20",
    hoverColor: "hover:shadow-yellow-500/30"
  }, {
    name: "Orange Bomber",
    slogan: "Explosive Power auf dem Feld!",
    members: 9,
    color: "from-orange-500 to-red-500",
    bgAccent: "bg-orange-500/20",
    hoverColor: "hover:shadow-orange-500/30"
  }, {
    name: "Rote Teufel",
    slogan: "Heiß wie Feuer, unbesiegbar!",
    members: 6,
    color: "from-red-500 to-red-700",
    bgAccent: "bg-red-500/20",
    hoverColor: "hover:shadow-red-500/30"
  }, {
    name: "Knallfrösche",
    slogan: "Klein aber oho - wir springen hoch!",
    members: 8,
    color: "from-green-400 to-green-600",
    bgAccent: "bg-green-500/20",
    hoverColor: "hover:shadow-green-500/30"
  }];
  return <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Unsere Teams
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Fünf starke Mannschaften kämpfen um den Titel beim Külter Straßenhandballturnier
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {teams.map((team, index) => <Card key={index} className={`bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:rotate-1 ${team.hoverColor} hover:shadow-2xl overflow-hidden group cursor-pointer`}>
            <div className={`h-3 bg-gradient-to-r ${team.color} group-hover:h-4 transition-all duration-300`}></div>
            
            <CardHeader className="text-center pb-3 relative">
              {/* Logo Placeholder */}
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${team.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                <Trophy className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <CardTitle className="text-lg font-bold group-hover:text-yellow-300 transition-colors duration-300">
                {team.name}
              </CardTitle>
              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
            </CardHeader>
            
            <CardContent className="text-center space-y-3 px-4 pb-4">
              
              
              
              
              <Badge variant="secondary" className={`bg-gradient-to-r ${team.color} text-white font-semibold px-3 py-1 group-hover:animate-pulse`}>
                Team #{index + 1}
              </Badge>
            </CardContent>
          </Card>)}
      </div>
      
      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-white/20 text-white max-w-3xl mx-auto hover:scale-105 transition-transform duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-yellow-300">
            🏆 Külter Straßenhandballturnier 2025 🏆
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <CardDescription className="text-gray-200 text-lg font-medium">
            Feuern Sie Ihr Lieblingsteam an und erleben Sie spannende Matches voller Action!
          </CardDescription>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Badge className="bg-white/20 text-white">23.-24. August 2025</Badge>
            <Badge className="bg-white/20 text-white">Open Air</Badge>
            <Badge className="bg-white/20 text-white">Für alle Altersgruppen</Badge>
          </div>
        </CardContent>
      </Card>
    </section>;
};
export default EventTeams;