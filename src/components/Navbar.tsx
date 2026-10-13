import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/#sessions', label: 'Sesi' },
    { to: '/#highlight', label: 'Highlight' },
    { to: '/#testimoni', label: 'Testimoni' },
    { to: '/#kontak', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'glass-card shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-lightblue-400 group-hover:rotate-12 transition-transform" />
            <span className="font-display text-xl font-semibold text-nusantara-deep">Kia Maheswari</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="font-body text-sm font-medium text-nusantara-deep/70 hover:text-nusantara-deep transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lightblue-300 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="/#sessions" className="glass-btn text-sm !py-2.5 !px-5">
              Ambil Sesi
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="glass-card p-2 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-nusantara-deep" /> : <Menu className="w-5 h-5 text-nusantara-deep" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 glass-card p-5 rounded-[2rem] flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="font-body text-sm font-medium text-nusantara-deep/80 hover:text-lightblue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
