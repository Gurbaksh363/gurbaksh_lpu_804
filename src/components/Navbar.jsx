import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', symbol: '⚓' },
    { name: 'About', href: '#about', symbol: '☸' },
    { name: 'Skills', href: '#skills', symbol: '⚔' },
    { name: 'Projects', href: '#projects', symbol: '🗺' },
    { name: 'Experience', href: '#experience', symbol: '⛵' },
    { name: 'Contact', href: '#contact', symbol: '✉' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-dark-bg/50 backdrop-blur-sm border-b-2 border-accent-500/20'
      }`}
      style={{
        borderBottom: isScrolled ? '2px dashed rgba(245, 158, 11, 0.3)' : '',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Compass Style */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold text-accent-400"
            whileHover={{ scale: 1.05 }}
            style={{ textShadow: '2px 2px 0 rgba(245, 158, 11, 0.2)' }}
          >
            <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '20s' }} />
            <span className="bg-gradient-to-r from-accent-400 to-secondary-500 bg-clip-text text-transparent">
              CKJ
            </span>
          </motion.a>

          {/* Desktop Navigation - Map Markers Style */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-gray-300 hover:text-accent-400 transition-all duration-300 relative group border-2 border-transparent hover:border-accent-500/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
                }}
              >
                <span className="mr-1 text-accent-400 opacity-70">{item.symbol}</span>
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent-400 border-2 border-accent-500/30 p-2 hover:bg-accent-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Map Scroll Style */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t-2 border-accent-500/30"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-accent-400 transition-colors duration-300 py-2 px-3 border-l-2 border-transparent hover:border-accent-500/50 hover:bg-accent-500/5"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)' }}
              >
                <span className="text-accent-400">{item.symbol}</span>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
