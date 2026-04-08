import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Wrench, FolderKanban, Briefcase, Mail, Menu, X } from 'lucide-react';

const MapNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navPoints = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'skills', name: 'Skills', icon: Wrench },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'projects', name: 'Projects', icon: FolderKanban },
    { id: 'education', name: 'Education', icon: User },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navPoints.map(point => point.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to close, then scroll
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveSection(id);
        
        // Update URL hash without triggering scroll
        if (history.pushState) {
          history.pushState(null, null, `#${id}`);
        }
      }
    });
  };

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
        <div className="max-w-7xl mx-auto">
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative border-2 border-accent-500/50 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 shadow-2xl"
            style={{
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(23, 23, 23, 0.9) 100%)',
              boxShadow: '0 0 30px rgba(245, 158, 11, 0.2), inset 0 0 20px rgba(245, 158, 11, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-1 left-1 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-accent-500/70"></div>
            <div className="absolute top-1 right-1 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-accent-500/70"></div>
            <div className="absolute bottom-1 left-1 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-accent-500/70"></div>
            <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-accent-500/70"></div>

            {/* Navigation items */}
            <div className="flex items-center justify-center gap-0.5 md:gap-1 lg:gap-2">
              {navPoints.map((point, index) => (
                <div key={point.id} className="flex items-center">
                  <motion.a
                    href={`#${point.id}`}
                    onClick={(e) => handleNavClick(point.id, e)}
                    className={`relative group cursor-pointer transition-all duration-300 px-1.5 md:px-2 lg:px-5 py-1.5 md:py-2 lg:py-3 border-2 ${
                      activeSection === point.id
                        ? 'border-accent-500 bg-accent-500/20'
                        : 'border-accent-500/30 bg-transparent hover:border-accent-500/50 hover:bg-accent-500/10'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                    }}
                  >
                    <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
                      <point.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-colors ${
                        activeSection === point.id ? 'text-accent-400' : 'text-gray-400 group-hover:text-accent-300'
                      }`} strokeWidth={2} />
                      <span className={`text-[10px] md:text-xs lg:text-sm font-bold uppercase transition-colors ${
                        activeSection === point.id ? 'text-accent-300' : 'text-gray-300 group-hover:text-accent-200'
                      }`} style={{ 
                        textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
                        letterSpacing: '0.5px'
                      }}>
                        {point.name}
                      </span>
                    </div>

                    {activeSection === point.id && (
                      <motion.div
                        layoutId="activeNavGlow"
                        className="absolute inset-0 border-2 border-accent-400"
                        style={{
                          clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                          boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)',
                        }}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>

                  {index < navPoints.length - 1 && (
                    <svg width="12" height="2" className="mx-0.5 sm:mx-1 hidden lg:block">
                      <line x1="0" y1="1" x2="12" y2="1" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" strokeDasharray="2 2" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60]">
        {/* Mobile Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative border-b-2 border-accent-500/50 px-4 py-4"
          style={{
            background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.98) 0%, rgba(23, 23, 23, 0.95) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.15)',
          }}
        >
          <div className="flex items-center justify-between">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="text-accent-400 font-bold text-2xl tracking-wider"
              style={{ textShadow: '2px 2px 0 rgba(245, 158, 11, 0.3)' }}
            >
              CK
            </motion.div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border-2 border-accent-500/50 bg-accent-500/10 rounded"
              style={{
                clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
              }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-accent-400" />
              ) : (
                <Menu className="w-6 h-6 text-accent-400" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative border-b-2 border-accent-500/50 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.98) 0%, rgba(23, 23, 23, 0.95) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 20px rgba(245, 158, 11, 0.2)',
              }}
            >
              <div className="px-4 py-3 space-y-1">
                {navPoints.map((point, index) => (
                  <motion.a
                    key={point.id}
                    href={`#${point.id}`}
                    onClick={(e) => handleNavClick(point.id, e)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3 border-2 transition-all duration-300 ${
                      activeSection === point.id
                        ? 'border-accent-500 bg-accent-500/20'
                        : 'border-accent-500/20 bg-transparent hover:border-accent-500/40 hover:bg-accent-500/10'
                    }`}
                    style={{
                      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                    }}
                  >
                    <point.icon className={`w-5 h-5 ${
                      activeSection === point.id ? 'text-accent-400' : 'text-gray-400'
                    }`} strokeWidth={2} />
                    <span className={`font-bold uppercase text-sm tracking-wide ${
                      activeSection === point.id ? 'text-accent-300' : 'text-gray-300'
                    }`} style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.8)' }}>
                      {point.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MapNavigation;
