import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SharedLayout from "@/components/SharedLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <SharedLayout>
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-primary/80 mb-8">Diese Seite wurde nicht gefunden</p>
          <Link to="/">
            <Button size="lg">Zurück zur Startseite</Button>
          </Link>
        </div>
      </div>
    </SharedLayout>
  );
};

export default NotFound;
