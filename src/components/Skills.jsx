import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const Skills = () => {
  const skills = [
    // Frontend
    { name: 'HTML', category: 'frontend', delay: 0 },
    { name: 'CSS', category: 'frontend', delay: 0.05 },
    { name: 'JavaScript', category: 'frontend', delay: 0.1 },
    { name: 'React.js', category: 'frontend', delay: 0.15 },
    { name: 'Tailwind CSS', category: 'frontend', delay: 0.2 },
    
    // Backend
    { name: 'Python', category: 'backend', delay: 0.25 },
    { name: 'PHP', category: 'backend', delay: 0.3 },
    { name: 'Bash', category: 'backend', delay: 0.35 },
    { name: 'C++', category: 'backend', delay: 0.4 },
    { name: 'Node.js', category: 'backend', delay: 0.45 },
    { name: 'Express.js', category: 'backend', delay: 0.5 },
    
    // Database
    { name: 'SQL', category: 'database', delay: 0.55 },
    { name: 'MongoDB', category: 'database', delay: 0.6 },
    { name: 'MySQL', category: 'database', delay: 0.65 },
    
    // Tools
    { name: 'Git', category: 'tools', delay: 0.7 },
    { name: 'GitHub', category: 'tools', delay: 0.75 },
    { name: 'Docker', category: 'tools', delay: 0.8 },
    { name: 'Terraform', category: 'tools', delay: 0.85 },
    { name: 'AWS CLI', category: 'tools', delay: 0.9 },
    { name: 'Google Cloud Platform', category: 'tools', delay: 0.95 },
    { name: 'Postman', category: 'tools', delay: 1 },
    { name: 'VS Code', category: 'tools', delay: 1.05 },
    
    // Soft Skills  
    { name: 'Adaptability', category: 'soft', delay: 1.1 },
    { name: 'Communication', category: 'soft', delay: 1.15 },
    { name: 'Teamwork', category: 'soft', delay: 1.2 },
    { name: 'Critical Thinking', category: 'soft', delay: 1.25 },
    { name: 'Problem Solving', category: 'soft', delay: 1.3 },
  ];

  const getCategoryStyle = (category) => {
    switch(category) {
      case 'frontend':
        return 'from-secondary-600/20 to-secondary-500/10 border-secondary-500/30 hover:border-secondary-400/60 text-secondary-300';
      case 'backend':
        return 'from-purple-600/20 to-purple-500/10 border-purple-500/30 hover:border-purple-400/60 text-purple-300';
      case 'database':
        return 'from-cyan-600/20 to-cyan-500/10 border-cyan-500/30 hover:border-cyan-400/60 text-cyan-300';
      case 'tools':
        return 'from-emerald-600/20 to-emerald-500/10 border-emerald-500/30 hover:border-emerald-400/60 text-emerald-300';
      case 'soft':
        return 'from-rose-600/20 to-rose-500/10 border-rose-500/30 hover:border-rose-400/60 text-rose-300';
      default:
        return 'from-gray-600/20 to-gray-500/10 border-gray-500/30 hover:border-gray-400/60 text-gray-300';
    }
  };

  return (
    <section id="skills" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center mb-16 lg:mb-0">
      {/* Static background gradient */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          title="Tech Arsenal"
          subtitle="Skills & Technologies"
          align="center"
        />

        {/* Flowing Grid Layout */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.03,
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`
                px-4 py-2 md:px-6 md:py-3 rounded-xl
                bg-gradient-to-br ${getCategoryStyle(skill.category)}
                border backdrop-blur-sm
                font-semibold text-sm md:text-base
                cursor-default
                transition-shadow duration-200
                hover:shadow-lg
              `}
            >
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Category badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/50 border border-secondary-500/20">
            <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
            <span className="text-gray-400">Frontend</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/50 border border-purple-500/20">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="text-gray-400">Backend</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/50 border border-cyan-500/20">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <span className="text-gray-400">Database</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/50 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-400">Tools</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/50 border border-rose-500/20">
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            <span className="text-gray-400">Soft Skills</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
