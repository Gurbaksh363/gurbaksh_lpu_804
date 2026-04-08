import { motion } from 'framer-motion';

const GlowCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass p-6 relative group overflow-hidden transition-all duration-300 map-border ${className}`}
      style={{
        borderRadius: '0',
        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
      }}
    >
      {/* Map corner ornaments */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-500/40"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-500/40"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-500/40"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-500/40"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent"></div>
      </div>
      
      {/* Aged paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245, 158, 11, 0.1) 2px, rgba(245, 158, 11, 0.1) 4px)'
      }}></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
