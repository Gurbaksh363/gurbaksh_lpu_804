import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About = () => {
  const achievements = [
    {
      icon: TrendingUp,
      metric: '2',
      label: 'Internships Completed',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Users,
      metric: 'Top 30',
      label: 'in Coding Competition',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Award,
      metric: '5',
      label: 'Certifications',
      color: 'from-accent-600 to-secondary-500'
    },
  ];

  const values = [
    {
      title: 'Result-Driven',
      description: "I don't just code, I deliver solutions that drive real business impact and ROI",
      gradient: 'from-blue-500 to-purple-600',
      type: 'chart'
    },
    {
      title: 'Fast Execution',
      description: 'Speed matters in business. I ship quality products without compromising on excellence',
      gradient: 'from-green-500 to-teal-600',
      type: 'speed'
    },
    {
      title: 'Innovation First',
      description: 'Always exploring cutting-edge tech to give clients a competitive advantage',
      gradient: 'from-orange-500 to-pink-600',
      type: 'innovation'
    },
  ];

  return (
    <section id="about" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative flex items-center mb-16 lg:mb-0">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Work With Me"
          subtitle="More than just a developer"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-accent-400 font-semibold">Computer Science student</span> at Lovely Professional University, 
                focused on <span className="text-accent-400 font-semibold">full-stack development and DevOps</span>. 
                I'm passionate about building scalable web applications and optimizing system performance.
              </p>
              
              <p>
                I have experience with the <span className="text-accent-400">MERN stack, PHP-based systems, AWS, and Terraform</span>. 
                My internships at Fireadx and Vanillakart have equipped me with hands-on expertise in building REST APIs, 
                authentication systems, and deploying applications in production environments.
              </p>

              <p>
                I'm driven to <span className="text-accent-400">solve real-world problems</span> through clean code and innovative solutions. 
                Whether it's infrastructure automation, CI/CD pipelines, or scalable backend services, 
                I bring both technical expertise and strong problem-solving skills to every challenge.
              </p>
            </div>
          </motion.div>

          {/* Right - Achievement Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-dark-elevated to-dark-surface border border-accent-500/20 hover:border-accent-500/40 transition-all cursor-default overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative flex items-center gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color}`}>
                    <achievement.icon className="text-black" size={32} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">
                      {achievement.metric}
                    </div>
                    <div className="text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-dark-elevated border border-dark-border hover:border-accent-500/30 transition-all group overflow-hidden"
            >
              {/* Pure CSS Graphics */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-dark-surface to-dark-bg flex items-center justify-center p-6">
                <motion.div
                  className="absolute -left-1/2 top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ['0%', '50%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Result-Driven: Analytics Dashboard */}
                {value.type === 'chart' && (
                  <motion.div
                    className="w-full max-w-[240px] rounded-xl bg-dark-elevated/80 border border-dark-border p-4 shadow-inner"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[10px] text-gray-400">Analytics</span>
                    </div>
                    <div className="flex items-end gap-2 h-16 mb-3">
                      {[35, 55, 45, 70, 60, 80].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue-500/70 to-purple-500/70"
                          animate={{ height: [`${height - 10}%`, `${height}%`, `${height - 10}%`] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded bg-white/10" />
                      <div className="h-2 rounded bg-white/10 w-5/6" />
                      <div className="h-2 rounded bg-white/10 w-4/6" />
                    </div>
                  </motion.div>
                )}

                {/* Fast Execution: Workflow Panel */}
                {value.type === 'speed' && (
                  <motion.div
                    className="w-full max-w-[240px] rounded-xl bg-dark-elevated/80 border border-dark-border p-4 shadow-inner"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[10px] text-gray-400">Workflow</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-3 rounded bg-white/10" />
                      <div className="h-3 rounded bg-white/10 w-4/5" />
                    </div>
                    <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-green-500/80 to-teal-500/80"
                        animate={{ x: ['-30%', '130%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="px-2 py-1 text-[10px] rounded bg-green-500/20 text-green-300">Ship</span>
                      <span className="px-2 py-1 text-[10px] rounded bg-teal-500/20 text-teal-300">Test</span>
                      <span className="px-2 py-1 text-[10px] rounded bg-white/10 text-gray-300">Deploy</span>
                    </div>
                  </motion.div>
                )}

                {/* Innovation: Design Studio */}
                {value.type === 'innovation' && (
                  <motion.div
                    className="w-full max-w-[240px] rounded-xl bg-dark-elevated/80 border border-dark-border p-4 shadow-inner"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[10px] text-gray-400">Design Studio</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/70 to-pink-500/70" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 rounded bg-white/10" />
                        <div className="h-2 rounded bg-white/10 w-4/5" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['bg-red-500/70', 'bg-blue-500/70', 'bg-green-500/70', 'bg-yellow-500/70', 'bg-purple-500/70'].map((color, i) => (
                        <motion.span
                          key={i}
                          className={`w-5 h-5 rounded ${color}`}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-elevated/50 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
