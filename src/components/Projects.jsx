import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const Projects = () => {
  const projects = [
    {
      title: 'Fitness Tracker',
      description: 'Built a fitness tracking application to monitor daily health activities. Tracks workouts, calories, and progress over time. Allows users to log activities and visualize performance with clean UI.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Charts'],
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/Gurbaksh363/health-and-diet-tracker',
      gradient: 'from-accent-500 to-secondary-600',
    },
    {
      title: 'AWS Infrastructure Automation',
      description: 'Built modular AWS infrastructure using Terraform with secure VPC, public/private subnets, EC2 instances, and S3 buckets. Designed reusable modules for Infrastructure as Code best practices.',
      tags: ['Terraform', 'AWS', 'VPC', 'EC2', 'S3', 'Git'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/Gurbaksh363/lucy-terraform',
      gradient: 'from-accent-500 to-secondary-500',
    },
    {
      title: 'Flask Backend Deployment with CI/CD',
      description: 'Implemented complete CI/CD pipeline using Jenkins for automated deployment. Deployed Flask backend and Express frontend on AWS EC2 with pm2 process management.',
      tags: ['Jenkins', 'AWS EC2', 'Flask', 'Express.js', 'Bash', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/Gurbaksh363/sotirios-backend',
      gradient: 'from-secondary-500 to-accent-600',
    },
    {
      title: 'Gyaanuday — Project Showcasing Platform',
      description: 'Built a full-featured platform for uploading and exploring projects with authentication, profile customization, file uploads (PDF, images, video, audio), and search/like system.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'File Management'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/Gurbaksh363/Gyaanuday',
      gradient: 'from-accent-600 to-secondary-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative flex items-center mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cursor-pointer"
            >
              <GlowCard className="h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {project.liveLink !== '#' && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-accent-500 rounded-full hover:bg-accent-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubLink !== '#' && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-dark-elevated rounded-full hover:bg-dark-border transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-dark-elevated text-accent-400 border border-accent-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links - Always visible on mobile */}
                  <div className="flex gap-3 md:hidden">
                    {project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-500/10 hover:bg-accent-500/20 text-accent-400 rounded-lg transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-elevated hover:bg-dark-border text-gray-300 rounded-lg transition-colors text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/Gurbaksh363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full hover:bg-accent-500/10 transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
