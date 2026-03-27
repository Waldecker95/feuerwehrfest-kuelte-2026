import { MapPin, Car, Trophy, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    google: any;
  }
}

const EventMap = () => {
  const latitude = 51.39973369994141;
  const longitude = 9.064432302455169;
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const facilities = [
    {
      icon: Flame,
      title: "Festzelt",
      description: "Großes Festzelt auf dem Sportplatz in Külte",
      color: "text-red-600"
    },
    {
      icon: Trophy,
      title: "BeerPong & Wettkämpfe",
      description: "Turnierbereich für BeerPong und Spaßwettkämpfe",
      color: "text-orange-600"
    },
    {
      icon: Car,
      title: "Parkplätze",
      description: "Kostenlose Parkmöglichkeiten am Sportplatz",
      color: "text-gray-600"
    }
  ];

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-maps-config');
        if (error) throw error;
        if (!data?.apiKey) throw new Error('Keine Maps-Konfiguration erhalten');

        const script = document.createElement('script');
        script.src = data.scriptUrl;
        script.async = true;
        script.onload = () => {
          setMapsLoaded(true);
          setTimeout(() => {
            const mapElement = document.getElementById('google-map');
            if (mapElement && window.google) {
              const map = new window.google.maps.Map(mapElement, {
                center: { lat: latitude, lng: longitude },
                zoom: 14,
                mapId: 'DEMO_MAP_ID'
              });
              new window.google.maps.marker.AdvancedMarkerElement({
                map,
                position: { lat: latitude, lng: longitude },
                title: 'Feuerwehrfest Külte 2026 – Sportplatz Külte'
              });
            }
          }, 100);
        };
        script.onerror = () => setError('Fehler beim Laden der Google Maps API');
        document.head.appendChild(script);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Fehler beim Laden der Karte');
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <section id="karte" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Anfahrt & Lage</h2>
          <p className="text-xl text-red-600">Festzelt auf dem Sportplatz in Külte</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="space-y-4">
            <Card className="border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span>Veranstaltungsort</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-red-50 rounded-lg border-2 border-red-200 relative overflow-hidden">
                  {mapsLoaded ? (
                    <div id="google-map" className="w-full h-full rounded-lg" />
                  ) : error ? (
                    <div className="flex items-center justify-center h-full bg-red-100">
                      <div className="text-center text-red-700">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-semibold">Karte konnte nicht geladen werden</p>
                        <p className="text-sm mt-2">Koordinaten: {latitude}, {longitude}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-red-100">
                      <div className="text-center text-red-700">
                        <MapPin className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                        <p className="font-semibold">Karte wird geladen...</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="font-semibold">Sportplatz Külte, 34471 Volkmarsen</span>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Karte öffnen
                    </a>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Car className="w-4 h-4 mr-2" />
                      Route planen
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <Card className="border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Bereiche vor Ort</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <facility.icon className={`w-6 h-6 ${facility.color} mt-1`} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{facility.title}</h4>
                        <p className="text-gray-600 text-sm">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Anfahrt-Tipps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mit dem Auto</h4>
                    <p className="text-gray-600 text-sm">
                      Külte ist ein Ortsteil von Volkmarsen (Nordhessen). Ausreichend Parkplätze am Sportplatz vorhanden. Beschilderung vor Ort folgen.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Wichtige Hinweise:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kostenlose Parkplätze am Sportplatz</li>
                    <li>• Anfahrt über Volkmarsen empfohlen</li>
                    <li>• Bei Fragen: 01765 623169 (Bewirtung Evi & Ajdini)</li>
                  </ul>
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
