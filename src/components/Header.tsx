import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/assets/velyar_logo_full.svg" 
              alt="Velyar" 
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-primary hover:text-accent transition-colors font-medium ${
              location.pathname === '/' ? 'text-accent' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-primary hover:text-accent transition-colors font-medium ${
              location.pathname === '/about' ? 'text-accent' : ''
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-primary hover:text-accent transition-colors font-medium ${
              location.pathname === '/contact' ? 'text-accent' : ''
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 