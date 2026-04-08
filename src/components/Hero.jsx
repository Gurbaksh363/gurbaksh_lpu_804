import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, Zap, Code2, Rocket } from 'lucide-react';
import Button from './ui/Button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  
  const [metrics] = useState([
    { value: 'Full Stack', label: 'Developer' },
    { value: 'DevOps', label: 'Enthusiast' },
    { value: 'Top 30', label: 'in Coding Competition' },
  ]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gurbaksh363', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/learnergurbaksh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gurbakshkaur127@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mb-16 lg:mb-0">
      {/* Dramatic lighting effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-accent-500/30 via-accent-500/5 to-transparent"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-secondary-500/20 via-secondary-500/5 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20 w-full">
        {/* Desktop: 2-column layout, Mobile: stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 md:gap-12 items-center">
          
          {/* LEFT COLUMN - Name and Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden lg:flex items-center gap-3 justify-center lg:justify-start"
            >
              <motion.div
                className="relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-accent-400" size={24} />
              </motion.div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Open to</div>
                <div className="text-accent-400 font-bold text-base">New Opportunities</div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-6 text-center lg:text-left"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 justify-center lg:justify-start"
                >
                  <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-accent-500 to-transparent rounded-full hidden md:block"></div>
                  <span className="text-accent-400 font-mono text-xs md:text-sm tracking-wider uppercase">Full Stack • DevOps • Problem Solver</span>
                </motion.div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block text-white"
                  >
                    GURBAKSH
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="block text-accent-400"
                  >
                    KAUR
                  </motion.span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Computer Science student focused on <span className="text-accent-400 font-semibold">full-stack development and DevOps</span>. 
                Building scalable web applications, cloud infrastructure, and CI/CD pipelines.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" href="https://github.com/Gurbaksh363" target="_blank">
                <Rocket size={18} />
                See My Work
              </Button>
              <Button variant="secondary" href="#contact">
                Let's Build Something
              </Button>
              <Button 
                variant="outline" 
                href="/cv.pdf" 
                download="Gurbaksh_Kaur_CV.pdf"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 md:p-4 rounded-xl bg-dark-elevated hover:bg-dark-border border border-dark-border hover:border-accent-500/30 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="text-gray-400 group-hover:text-accent-400 transition-colors" size={20} />
                  <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/5 rounded-xl transition-colors"></div>
                </motion.a>
              ))}
            </motion.div>


          </div>

          {/* RIGHT COLUMN - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-first lg:order-last"
          >
            <div className="relative group overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-dark-elevated to-dark-surface">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 via-transparent to-secondary-500/20 z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-secondary-500/30 blur-xl"></div>
              </div>
              
              {/* Image container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/image.png"
                  alt="Gurbaksh Kaur"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-500 scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-dark-elevated" style={{ display: 'none' }}>
                  <div className="text-center px-6">
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Add Your Photo</div>
                    <div className="text-base text-accent-400 font-semibold">/public/profile.jpg</div>
                    <div className="text-xs text-gray-500 mt-3">Drop your image in the public folder</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Tags - Below Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="hidden lg:flex flex-wrap gap-3 mt-6 justify-center"
            >
              {[
                { icon: Code2, text: 'React' },
                { icon: Zap, text: 'Nodejs' },
                { icon: Rocket, text: 'Cloud' },
              ].map((tag, index) => (
                <motion.div
                  key={tag.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-elevated border border-accent-500/20 hover:border-accent-500/40 transition-colors cursor-default"
                >
                  <tag.icon size={16} className="text-accent-400" />
                  <span className="text-sm text-gray-300">{tag.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Metrics - Below Expertise Tags */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-3 rounded-2xl bg-gradient-to-br from-dark-elevated to-dark-surface border border-accent-500/20 hover:border-accent-500/40 transition-all cursor-default group"
                >
                  <motion.div
                    className="text-2xl font-black bg-gradient-to-br from-accent-400 to-accent-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator - Minimalist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-accent-500/30 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-2 bg-accent-400 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
