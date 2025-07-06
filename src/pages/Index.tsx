import { Music, Users, Coffee, Cake, Beer, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EventHeader from "@/components/EventHeader";
import EventActivities from "@/components/EventActivities";
import EventSchedule from "@/components/EventSchedule";
import EventTeams from "@/components/EventTeams";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-x-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* String lights decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent"></div>
      
      <EventHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-12 relative z-10">
        <EventActivities />
        <EventSchedule />
        <EventTeams />
        
        {/* Contact & Info Section */}
        <section className="text-center space-y-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Weitere Informationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Folgen Sie uns für aktuelle Updates und weitere Details!
              </p>
              <div className="flex justify-center space-x-4">
                
                <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                  kulte-events.de
                </Badge>
              </div>
              <p className="text-sm opacity-80">
                Instagram: @DORFFEST_KULTE_2025
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>;
};
export default Index;