import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Qspider Ahmedabad',
      period: '2023',
      description: 'Worked on building responsive frontend components and learned industry-standard practices.',
    },
    {
      role: 'MERN Stack Intern',
      company: 'Prodigy Infotech',
      period: '2024',
      description: 'Developed full-stack applications using MongoDB, Express, React, and Node.js.',
    },
    {
      role: 'Web Development Intern',
      company: 'VishIRAFrosy.ai',
      period: '2024',
      description: 'Collaborated on AI-integrated web solutions and optimized user interfaces.',
    },
    {
      role: 'SQL Database Workshop',
      company: 'Qspider Ahmedabad',
      period: '2023',
      description: 'Intensive training on database management and advanced SQL querying.',
    },
  ];

  const certificates = [
    { name: 'Web Development', issuer: 'Qspider' },
    { name: 'MERN Stack', issuer: 'Prodigy Infotech' },
    { name: 'SQL Database', issuer: 'Qspider' },
  ];

  return (
    <section id="experience" className="py-24 bg-dark-bg/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-primary w-8 h-8" />
              <h2 className="text-3xl font-bold">Work <span className="text-primary">Experience</span></h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-10 relative group"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 border-primary group-hover:scale-125 transition-transform"></div>
                  <div className="glass-card p-6 group-hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                        <Calendar size={12} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Award className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="grid gap-6">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-accent text-sm">{cert.issuer}</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-dark-bg transition-all">
                    <Award size={24} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Decoration */}
            <div className="mt-12 glass-card p-8 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-gradient">9.4</span>
              </div>
              <h4 className="text-xl font-bold text-white">Consistent Academic Excellence</h4>
              <p className="text-gray-500 text-sm mt-2">B.Tech Computer Engineering student with a passion for innovation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
