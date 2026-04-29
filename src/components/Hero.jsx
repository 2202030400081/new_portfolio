import { motion } from 'framer-motion';
import { Mail, Download, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Web Developer | MERN Stack Enthusiast | UI Designer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pulse-glow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pulse-glow"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium tracking-widest mb-4"
          >
            WELCOME TO MY WORLD
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Mishra Aditya</span>
          </h1>
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-gray-400 font-mono">
              {text}<span className="animate-pulse text-primary">|</span>
            </p>
          </div>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Passionate web developer focused on creating modern, responsive, and user-friendly web applications with beautiful UI and smooth user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <Download size={20} /> Download Resume
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/10 rounded-full font-semibold glass hover:bg-white/5 flex items-center gap-2"
            >
              View Projects <ExternalLink size={18} />
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" className="p-3 glass-card hover:text-primary transition-colors"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/aditya-mishra-3330b42b7" className="p-3 glass-card hover:text-secondary transition-colors"><FaLinkedin size={24} /></a>
            <a href="mailto:subbhammishra123@gmail.com" className="p-3 glass-card hover:text-accent transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full animate-pulse opacity-20 blur-2xl"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 glass p-2">
               <img 
                 src={`${import.meta.env.BASE_URL}profile.jpg`} 
                 alt="Mishra Aditya" 
                 className="w-full h-full object-cover rounded-xl"
               />
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 glass-card shadow-xl"
            >
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="w-10 h-10" alt="React" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 p-4 glass-card shadow-xl"
            >
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-16 p-4 glass-card shadow-xl"
            >
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
