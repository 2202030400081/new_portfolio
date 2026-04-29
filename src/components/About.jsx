import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'CGPA', value: '9.45', icon: <Award className="text-primary" /> },
    { label: 'Internships', value: '3+', icon: <Briefcase className="text-secondary" /> },
    { label: 'Projects', value: '10+', icon: <BookOpen className="text-accent" /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Student at Silver Oak University
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a final year B.Tech Computer Engineering student at Silver Oak University. With a stellar CGPA of 9.45, I have consistently demonstrated my academic excellence and technical prowess.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              My passion lies in Frontend Development and UI/UX design. I love creating responsive web applications that provide a seamless user experience. Through multiple internships, I've gained hands-on experience with the MERN stack and modern web technologies.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative glass-card p-4 mb-8 overflow-hidden group">
              <img 
                src="profile.jpg" 
                alt="Aditya Mishra" 
                className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="glass-card p-8 space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Education</h4>
                  <p className="text-primary font-medium">B.Tech in Computer Engineering</p>
                  <p className="text-gray-500 text-sm">Silver Oak University • 2022 - Present</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-secondary/10 rounded-lg h-fit">
                  <Briefcase className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Experience</h4>
                  <p className="text-secondary font-medium">MERN Stack Intern</p>
                  <p className="text-gray-500 text-sm">Prodigy Infotech • 3 Months</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg h-fit">
                  <Award className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Passion</h4>
                  <p className="text-accent font-medium">UI/UX & Frontend Development</p>
                  <p className="text-gray-500 text-sm">Designing Pixel-Perfect Experiences</p>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
