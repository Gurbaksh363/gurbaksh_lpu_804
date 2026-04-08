import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const EducationAchievements = () => {
  return (
    <section id="education" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative flex items-center mb-16 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic background and milestones"
          align="center"
        />

        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          <div>
            <GlowCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary-500/10 flex-shrink-0">
                  <Briefcase className="text-secondary-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">
                    B.Tech CSE
                  </h4>
                  <p className="text-secondary-400 font-medium mb-1">
                    Lovely Professional University
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    2023 – Present • CGPA: 8.56
                  </p>
                  <p className="text-gray-400 text-xs">
                    Phagwara, Punjab
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          <div>
            <GlowCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-500/10 flex-shrink-0">
                  <Briefcase className="text-accent-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Senior Secondary (12th)
                  </h4>
                  <p className="text-accent-400 font-medium mb-1">
                    Doraha Public School
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    Percentage: 80%
                  </p>
                  <p className="text-gray-400 text-xs">
                    Punjab
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-1/2">
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary-500/10 flex-shrink-0">
                    <Briefcase className="text-secondary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      Secondary (10th)
                    </h4>
                    <p className="text-secondary-400 font-medium mb-1">
                      Sri Guru Harkrishan Public School
                    </p>
                    <p className="text-gray-400 text-sm mb-2">
                      Percentage: 90%
                    </p>
                    <p className="text-gray-400 text-xs">
                      Punjab
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold text-accent-400 mb-8 md:mb-12 text-center px-4">Achievements & Certifications</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">DevOps Certification</div>
                    <div className="text-xs text-gray-400">Tutedude (2025)</div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-secondary-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Cloud Computing</div>
                    <div className="text-xs text-gray-400">NPTEL (2025)</div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Computer Networking</div>
                    <div className="text-xs text-gray-400">Coursera (2024)</div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-secondary-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Hardware & Operating Systems</div>
                    <div className="text-xs text-gray-400">IBM (2024)</div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">LeetCode & TryHackMe</div>
                    <div className="text-xs text-gray-400">Active problem solver</div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <GlowCard>
                <div className="flex items-center gap-3">
                  <Calendar className="text-secondary-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Top 30 in Coding Competition</div>
                    <div className="text-xs text-gray-400">University level (2025)</div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAchievements;
