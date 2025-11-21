import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ManagedMobile from './pages/bundles/ManagedMobile';
import ManagedWorkplace from './pages/bundles/ManagedWorkplace';
import LifecycleCompliance from './pages/bundles/LifecycleCompliance';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Über uns', path: '/about' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-komma-primary rounded-sm flex items-center justify-center text-white font-bold text-xl">k</div>
              <span className="font-bold text-2xl text-komma-primary tracking-tight">komma</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-komma-accent' 
                    : 'text-slate-600 hover:text-komma-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-komma-highlight text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              Gespräch vereinbaren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-slate-50 text-komma-accent'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link 
              to="/contact" 
              className="block w-full text-center mt-4 bg-komma-highlight text-white px-5 py-3 rounded-md text-base font-semibold hover:bg-orange-600"
            >
              Gespräch vereinbaren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-komma-primary text-slate-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-komma-primary font-bold text-xl">k</div>
              <span className="font-bold text-2xl text-white tracking-tight">komma</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Wir machen die IT-Peripherie einfach — Mobilgeräte, Arbeitsplatz & Service.
              Klar, messbar und verlässlich.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/bundles/managed-mobile" className="hover:text-komma-highlight transition-colors">Managed Mobile</Link></li>
              <li><Link to="/bundles/managed-workplace" className="hover:text-komma-highlight transition-colors">Managed Workplace</Link></li>
              <li><Link to="/bundles/lifecycle-compliance" className="hover:text-komma-highlight transition-colors">Lifecycle & Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Unternehmen</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-komma-highlight transition-colors">Über uns</Link></li>
              <li><Link to="/contact" className="hover:text-komma-highlight transition-colors">Kontakt</Link></li>
              <li><Link to="/privacy" className="hover:text-komma-highlight transition-colors">Datenschutz</Link></li>
              <li><Link to="/imprint" className="hover:text-komma-highlight transition-colors">Impressum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} className="text-komma-highlight"/> kontakt@komma.de</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-komma-highlight"/> +49 30 12345678</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-komma-highlight"/> Berlin, Deutschland</li>
            </ul>
            <div className="mt-6 flex gap-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} komma GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-komma-light">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Bundle Routes */}
          <Route path="bundles/managed-mobile" element={<ManagedMobile />} />
          <Route path="bundles/managed-workplace" element={<ManagedWorkplace />} />
          <Route path="bundles/lifecycle-compliance" element={<LifecycleCompliance />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;