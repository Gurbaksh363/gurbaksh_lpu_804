import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Fireadx Ltd (UK)',
      location: 'Remote',
      period: 'Jan 2025 – Feb 2025',
      description: [
        'Built scalable publisher management dashboard with modern frontend architecture',
        'Developed authentication systems with secure token management',
        'Created REST APIs and integrated third-party services',
        'Optimized backend performance and database queries',
        'Managed GitHub workflows and implemented CI/CD practices',
        'Automated operational processes and deployment workflows',
      ],
      tags: ['React.js', 'Node.js', 'REST APIs', 'Authentication', 'GitHub', 'DevOps'],
    },
    {
      title: 'Web Development Intern',
      company: 'Vanillakart (Emvity Brushflicks)',
      location: 'Remote',
      period: 'Sept 2025 – Nov 2025',
      description: [
        'Developed full-stack MERN applications with responsive UI',
        'Built and integrated REST APIs with frontend components',
        'Delivered WordPress-based client projects on schedule',
        'Collaborated with team to implement client requirements',
        'Tested and debugged applications for optimal performance',
      ],
      tags: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'WordPress'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative flex items-center mb-16 lg:mb-0">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          align="center"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-secondary-500 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent-500 border-4 border-dark-bg z-10 hidden md:block">
                  <div className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlowCard>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-accent-500/10 flex-shrink-0">
                        <Briefcase className="text-accent-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent-400 font-medium mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-accent-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-dark-elevated text-secondary-400 border border-secondary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>

                {/* Empty space for timeline balance on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
