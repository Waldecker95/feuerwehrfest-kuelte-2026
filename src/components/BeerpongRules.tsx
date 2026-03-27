import { Trophy, Calendar, Target, Users, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BeerpongRules = () => {
  return (
    <section id="regeln" className="py-16 px-4 bg-red-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-red-300 text-red-700">
            Turnierregeln
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BeerPong-Turnier
          </h2>
          <p className="text-xl text-gray-600">Ablauf & Regeln · Samstag, 06.06.2026 · 14:00 Uhr</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Turnierablauf */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                <Calendar className="w-6 h-6 text-red-600" />
                Turnierablauf
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-red-700">Vorrunde (Losturnier)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bis zu einem festgelegten Zeitpunkt wird ein Losturnier gespielt</li>
                  <li>• Angemeldete Teams werden vor jeder Runde neu ausgelost</li>
                </ul>

                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h5 className="font-semibold mb-2 text-gray-900">Punktevergabe:</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <span className="font-medium">+1 Punkt</span> pro getroffenen Becher pro Team</li>
                    <li>• <span className="font-medium">+3 Punkte</span> zusätzlich für das siegreiche Team</li>
                  </ul>
                </div>
              </div>

              <Separator className="bg-red-100" />

              <div>
                <h4 className="font-bold text-lg mb-3 text-red-700">Playoffs</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Die besten 4 Teams ziehen in die Playoffs ein</li>
                </ul>

                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <h5 className="font-semibold mb-2 text-gray-900">Halbfinale:</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Spiel 1: Team Platz 1 vs. Team Platz 4</li>
                      <li>• Spiel 2: Team Platz 2 vs. Team Platz 3</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-700">Die Siegerteams treten im <span className="font-semibold">Finale</span> gegeneinander an.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turnierregeln */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                <Target className="w-6 h-6 text-red-600" />
                Spielregeln
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Becher-Anzahl</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gespielt wird mit <span className="font-medium">6 oder 10 Bechern</span> pro Team</li>
                  <li>• Genaue Anzahl wird zu Turnierbeginn bekannt gegeben</li>
                  <li>• Becher werden mit <span className="font-medium">Bier</span> gefüllt</li>
                </ul>
              </div>

              <Separator className="bg-red-100" />

              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  Wurfregeln
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Jedes Teammitglied muss pro Durchgang werfen</li>
                  <li>• <span className="font-medium">Aufsetzer:</span> 2 Punkte für das Team</li>
                  <li>• <span className="font-medium">Double Shot:</span> 3 Punkte (beide Bälle gleicher Becher)</li>
                  <li>• <span className="font-medium">Balls Back:</span> Wenn beide Teammitglieder treffen</li>
                </ul>

                <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <h5 className="font-semibold mb-2 text-gray-900">Trickshot-Regel:</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
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
        <Card className="mt-8 border-red-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
              <RotateCcw className="w-6 h-6 text-red-600" />
              Weitere Regeln
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Einmaliges Nachstellen pro Team pro Spiel erlaubt</li>
                <li>• Kein Pusten oder Fingern erlaubt</li>
                <li>• Keine Gastwürfe</li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Beginner-Team wird durch Schere-Stein-Papier ermittelt</li>
                <li>• Keine Nachwürfe nach Spielende</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Trophy className="w-10 h-10 text-red-600 mx-auto mb-3" />
          <p className="text-gray-600 font-medium">Viel Erfolg allen Teams – und auf ein faires Spiel!</p>
          <p className="text-red-700 font-bold mt-1">Feuerwehrfest Külte 2026</p>
        </div>
      </div>
    </section>
  );
};

export default BeerpongRules;
