import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/cybersecurity', label: 'Cybersecurity' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume-generator', label: 'Resume Generator' },
    { path: '/profile-settings', label: 'Profile' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`bg-gray-800 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-200 relative ${
                  isActive(link.path)
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
                )}
              </Link>
            ))}
            
            {/* CV Download Button */}
            <a
              href="/cv/Anduamlak_Melsew_CV.pdf"
              download="Anduamlak_Melsew_CV.pdf"
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-200 font-medium inline-flex items-center hover:shadow-lg hover:shadow-green-500/50 hover:brightness-110"
              title="Download my professional CV (SOC Analyst)"
            >
              <Download className="mr-2" size={18} />
              Download CV
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CV Download Button - Mobile */}
            <a
              href="/cv/Anduamlak_Melsew_CV.pdf"
              download="Anduamlak_Melsew_CV.pdf"
              className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-200 font-medium inline-flex items-center hover:shadow-lg hover:shadow-green-500/50"
              onClick={() => setIsOpen(false)}
            >
              <Download className="mr-2" size={18} />
              Download CV
            </a>
            <p className="text-xs text-gray-400 mt-2">Download my professional CV (SOC Analyst)</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
