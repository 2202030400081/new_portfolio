import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', level: '95%' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', level: '90%' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', level: '85%' },
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', level: '88%' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', level: '80%' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', level: '75%' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', level: '70%' },
    { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', level: '75%' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', level: '82%' },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-gray-400">Technical stack and tools I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 flex flex-col items-center group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 mb-4 relative z-10 p-2 glass rounded-xl">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-white font-semibold mb-2 relative z-10">{skill.name}</h3>
              
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                ></motion.div>
              </div>
              <span className="text-xs text-gray-500 mt-2 font-mono">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
