import { MapPin, Car, Users, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventMap = () => {
  const latitude = 51.39973369994141;
  const longitude = 9.064432302455169;
  
  // Create Google Maps URL
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
  
  // Create directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const facilities = [
    {
      icon: Trophy,
      title: "Spielfläche",
      description: "Handball- und Beerpong-Bereiche",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Bühne",
      description: "Live-Musik und Veranstaltungen",
      color: "text-blue-600"
    },
    {
      icon: Car,
      title: "Parkplätze",
      description: "Ausreichend Parkmöglichkeiten vorhanden",
      color: "text-gray-600"
    }
  ];

  return (
    <section id="karte" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-green-800 mb-4">Anfahrt & Lage</h2>
          <p className="text-xl text-green-600">Finden Sie uns in Külte</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="space-y-4">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center space-x-2">
                  <MapPin className="w-6 h-6" />
                  <span>Veranstaltungsort</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-green-50 rounded-lg border-2 border-green-200 relative overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/view?key=&center=${latitude},${longitude}&zoom=15&maptype=roadmap`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Event Location Map"
                    onError={() => {
                      // Fallback if iframe fails to load
                      const iframe = document.querySelector('#map-fallback');
                      if (iframe) {
                        iframe.innerHTML = `
                          <div class="flex items-center justify-center h-full bg-green-100">
                            <div class="text-center text-green-700">
                              <MapPin class="w-12 h-12 mx-auto mb-2" />
                              <p class="font-semibold">Karte wird geladen...</p>
                              <p class="text-sm">Koordinaten: ${latitude}, ${longitude}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div id="map-fallback" className="absolute inset-0 hidden"></div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-2 text-green-700">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Külte, Deutschland</span>
                  </div>
                  <div className="text-sm text-green-600">
                    Koordinaten: {latitude}, {longitude}
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Karte öffnen
                    </a>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <Car className="w-4 h-4 mr-2" />
                      Route planen
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Facilities & Info */}
          <div className="space-y-6">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800">Bereiche vor Ort</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <facility.icon className={`w-6 h-6 ${facility.color} mt-1`} />
                      <div>
                        <h4 className="font-semibold text-green-800">{facility.title}</h4>
                        <p className="text-green-600 text-sm">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800">Anfahrt-Tipps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800">Mit dem Auto</h4>
                      <p className="text-green-600 text-sm">
                        Ausreichend Parkplätze sind vorhanden. Folgen Sie der Beschilderung vor Ort.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Wichtige Hinweise:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Kostenlose Parkplätze verfügbar</li>
                      <li>• Anfahrt über Hauptstraße empfohlen</li>
                      <li>• Bei Fragen: WhatsApp oder E-Mail nutzen</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventMap;