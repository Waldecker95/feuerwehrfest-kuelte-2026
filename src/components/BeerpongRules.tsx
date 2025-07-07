import { Trophy, Calendar, Target, Beer, Users, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BeerpongRules = () => {
  return (
    <section id="regeln" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Turnierregeln
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            🏆 Beerpong-Turnier
          </h2>
          <p className="text-xl text-muted-foreground">
            Ablauf & Regeln
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Turnierablauf */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="w-6 h-6 text-primary" />
                📅 Turnierablauf
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Vorrunde (Losturnier)</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Bis zu einem festgelegten Zeitpunkt wird ein Losturnier gespielt</li>
                  <li>• Angemeldete Teams werden vor jeder Runde neu ausgelost</li>
                </ul>
                
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <h5 className="font-semibold mb-2">Punktevergabe:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="font-medium">+1 Punkt</span> pro getroffenen Becher pro Team</li>
                    <li>• <span className="font-medium">+3 Punkte</span> zusätzlich für das siegreiche Team</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Playoffs</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Die besten 4 Teams ziehen in die Playoffs ein</li>
                </ul>
                
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <h5 className="font-semibold mb-2">Halbfinale:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Spiel 1: Team Platz 1 vs. Team Platz 4</li>
                      <li>• Spiel 2: Team Platz 2 vs. Team Platz 3</li>
                    </ul>
                  </div>
                  <p className="text-sm">Die Siegerteams beider Spiele treten im <span className="font-semibold">Finale</span> gegeneinander an.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turnierregeln */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                🎯 Turnierregeln
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* Becher-Anzahl */}
              <div>
                <h4 className="font-bold text-lg mb-3">🧊 Becher-Anzahl</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Gespielt wird mit <span className="font-medium">6 oder 10 Bechern</span> pro Team</li>
                  <li>• Genaue Anzahl wird zu Turnierbeginn bekannt gegeben</li>
                  <li>• Becher werden mit <span className="font-medium">Wasser</span> gefüllt</li>
                </ul>
              </div>

              <Separator />

              {/* Spielregeln */}
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  👥 Spielregeln
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Jedes Teammitglied muss pro Durchgang werfen</li>
                  <li>• <span className="font-medium">Aufsetzer:</span> 2 Punkte für das Team</li>
                  <li>• <span className="font-medium">Double Shot:</span> 3 Punkte für das Team (beide Bälle im gleichen Becher)</li>
                  <li>• <span className="font-medium">Balls Back:</span> Wenn beide Teammitglieder treffen</li>
                </ul>
                
                <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                  <h5 className="font-semibold mb-2">Trickshot-Regel:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Ball muss in der eigenen Hälfte aufgenommen werden</li>
                    <li>• Darf vorher nicht den Boden berührt haben</li>
                    <li>• Danach ist ein Trickshot erlaubt</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weitere Regeln */}
        <Card className="mt-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <RotateCcw className="w-6 h-6 text-primary" />
              🔄 Weitere Regeln
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-sm">
                <li>• Einmaliges Nachstellen pro Team pro Spiel erlaubt</li>
                <li>• Kein Pusten oder Fingern erlaubt</li>
                <li>• Keine Gastwürfe</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Beginner-Team wird durch Schere-Stein-Papier ermittelt</li>
                <li>• Keine Nachwürfe nach Spielende</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BeerpongRules;