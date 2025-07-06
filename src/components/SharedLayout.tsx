import { Badge } from "@/components/ui/badge";
import SharedNavigation from "./SharedNavigation";

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <SharedNavigation />
      
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold">KÜLTE Open Air Event 2025</div>
            <p className="text-primary-foreground/80">23.-24. August 2025 • Turnier der Straßenmannschaften</p>
            <div className="flex justify-center space-x-6">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                kulte-events.de
              </Badge>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Instagram: @DORFFEST_KULTE_2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharedLayout;