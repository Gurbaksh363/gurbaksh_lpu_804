import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href,
  download,
  icon: Icon 
}) => {
  const baseStyles = 'px-8 py-3 font-medium transition-all duration-300 flex items-center gap-2 justify-center relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-black font-bold shadow-lg hover:shadow-accent-500/50 border-2 border-accent-600',
    secondary: 'glass hover:bg-accent-500/10 text-white border-2 border-accent-500/30 hover:border-accent-500/50',
    outline: 'border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-black',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        download={download}
        target={href && !download && !href.startsWith('#') ? '_blank' : undefined}
        rel={href && !download && !href.startsWith('#') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={{
          clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          textShadow: variant === 'primary' ? '1px 1px 0 rgba(0,0,0,0.2)' : '1px 1px 0 rgba(0,0,0,0.5)'
        }}
      >
        {/* Map corner decorations */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent-400/50"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent-400/50"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent-400/50"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent-400/50"></span>
        
        {children}
        {Icon && <Icon size={20} />}
      </Component>
    </motion.div>
  );
};

export default Button;
