import { Badge } from "@/components/ui/badge";
const EventHeader = () => {
  return <header className="text-center py-16 px-4 relative">
      {/* String lights effect */}
      <div className="absolute top-0 left-0 w-full flex justify-center mb-8">
        
      </div>

      <div className="space-y-6 mt-12">
        <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-lg px-6 py-2">
          TURNIER DER STRASSENMANNSCHAFTEN
        </Badge>
        
        <div className="bg-gradient-to-br from-white/90 to-gray-200/90 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto backdrop-blur-sm">
          <h1 className="text-6xl font-bold text-blue-900 mb-4 tracking-tight">
            OPEN AIR
          </h1>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-green-600">EVENT</span>
            <br />
            <span className="text-blue-900">KÜLTE</span>
          </h2>
          
          <div className="text-4xl font-bold text-gray-700 mb-6">
            23.-24.08.2025
          </div>
          
          <Badge variant="secondary" className="bg-blue-900 text-white text-xl px-8 py-3 rounded-full">Straßenhandball & Dorffest</Badge>
        </div>
      </div>
    </header>;
};
export default EventHeader;