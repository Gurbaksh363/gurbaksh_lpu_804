import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''} relative`}
    >
      {/* Treasure Map "X marks the spot" decoration */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-accent-400/20 text-4xl hidden md:block">
        ✦
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-400 to-secondary-500 bg-clip-text text-transparent relative map-text">
        {title}
        {/* Map border underline */}
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-accent-500/60 to-transparent"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.5)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
