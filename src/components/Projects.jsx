import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Clone',
      description: 'Built a responsive Amazon clone using HTML, CSS, and modern UI design techniques.',
      image: 'projects/amazon-clone.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Online Job Portal',
      description: 'Developed a complete Online Job Portal with authentication, job posting, search, and application management.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Personal Portfolio',
      description: 'Designed and developed a futuristic personal portfolio with advanced animations and responsive layouts.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-gray-400">A collection of projects that demonstrate my technical expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a href={project.github} className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-colors">
                      <FaGithub size={18} /> GitHub
                    </a>
                    <a href={project.demo} className="flex-1 py-2 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center gap-2 text-primary hover:bg-primary/30 transition-colors">
                      <ExternalLink size={18} /> Live
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
