import { Link } from "react-router-dom";

const SharedNavigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">KÜLTE 2025</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/programm" className="text-primary hover:text-primary/80 transition-colors">Programm</Link>
            <Link to="/anmeldung" className="text-primary hover:text-primary/80 transition-colors">Anmeldung</Link>
            <Link to="/karte" className="text-primary hover:text-primary/80 transition-colors">Anfahrt</Link>
            <Link to="/kontakt" className="text-primary hover:text-primary/80 transition-colors">Kontakt</Link>
            <Link to="/ueber-uns" className="text-primary hover:text-primary/80 transition-colors">Über uns</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SharedNavigation;