import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              © 2026 Gurbaksh Kaur. Built with{' '}
              <Heart size={16} className="text-accent-400 fill-accent-400" />{' '}
              using React & Tailwind CSS
            </p>
          </motion.div>

          {/* Right side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
