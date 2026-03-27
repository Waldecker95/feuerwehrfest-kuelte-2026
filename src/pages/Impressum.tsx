import { ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Flame className="w-6 h-6 text-orange-300" />
              <span className="text-lg font-bold tracking-wide">Feuerwehrfest Külte 2026</span>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:text-orange-300 hover:bg-red-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
        </div>
      </nav>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="text-center mb-10">
            <Flame className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900">Impressum</h1>
          </div>

          {/* Angaben gemäß §5 TMG */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-semibold">Freiwillige Feuerwehr Külte</p>
              <p>Hortweg 36</p>
              <p>34471 Volkmarsen (Ortsteil Külte)</p>
              <p>Hessen, Deutschland</p>
              <p className="text-sm text-gray-500 pt-1">
                Eingetragen im Vereinsregister der Stadt Volkmarsen (seit 04.11.2018)
              </p>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div>
                <p className="font-medium mb-1">Wehrführer</p>
                <p>Till Wilke</p>
                <p>
                  Telefon:{" "}
                  <a href="tel:01626949325" className="text-red-600 hover:underline">
                    0162 6949325
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:wehrfuehrer@feuerwehr-kuelte.de" className="text-red-600 hover:underline">
                    wehrfuehrer@feuerwehr-kuelte.de
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://www.feuerwehr-kuelte.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                    www.feuerwehr-kuelte.de
                  </a>
                </p>
              </div>
              <div className="border-t border-red-100 pt-3">
                <p className="font-medium mb-1">Bewirtung & Veranstaltung</p>
                <p>Eventservice und Bewirtung Evi und Ajdini</p>
                <p>
                  Telefon:{" "}
                  <a href="tel:01765623169" className="text-red-600 hover:underline">
                    01765 623169
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Verantwortlich */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Verantwortlich für den Inhalt (gem. § 18 Abs. 2 MStV)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-semibold">Till Wilke (Wehrführer)</p>
              <p>Freiwillige Feuerwehr Külte</p>
              <p>Hortweg 36, 34471 Volkmarsen</p>
            </CardContent>
          </Card>

          {/* Haftungsausschluss */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                  übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                  Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Datenschutz */}
          <Card className="border-red-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Datenschutz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Datenerhebung auf dieser Website</h3>
                <p>
                  Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
                  Soweit auf unseren Seiten personenbezogene Daten (z.B. Name, E-Mail-Adresse) erhoben
                  werden, erfolgt dies auf freiwilliger Basis und ausschließlich für die Organisation des
                  Feuerwehrfestes und des Beerpong-Turniers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Anmeldedaten Beerpong-Turnier</h3>
                <p>
                  Die im Rahmen der Turnieranmeldung erhobenen Daten (Teamname, Spielernamen,
                  E-Mail-Adresse, optional Telefonnummer) werden ausschließlich für die Durchführung des
                  Turniers verwendet und nach Abschluss der Veranstaltung gelöscht, sofern keine
                  ausdrückliche Einwilligung zum Newsletter-Empfang erteilt wurde.
                </p>
                <p className="mt-2">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung /
                  vorvertragliche Maßnahmen).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Google Maps</h3>
                <p>
                  Diese Website verwendet Google Maps zur Darstellung der Anfahrt. Dabei werden
                  personenbezogene Daten (IP-Adresse, Standortdaten) an Google LLC, 1600 Amphitheatre
                  Parkway, Mountain View, CA 94043, USA übertragen.
                </p>
                <p className="mt-2">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                  Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert.
                </p>
                <p className="mt-2">
                  Weitere Informationen:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    Google Datenschutzerklärung
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ihre Rechte</h3>
                <p>
                  Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen
                  Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem
                  haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Für weitere
                  Fragen wenden Sie sich bitte über die oben genannten Kontaktdaten an uns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Flame className="w-5 h-5 text-orange-300" />
              <span className="text-lg font-bold">Feuerwehrfest Külte 2026</span>
            </div>
            <p className="text-white/70 text-sm">Freiwillige Feuerwehr Volkmarsen-Külte</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
