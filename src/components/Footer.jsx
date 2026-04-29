import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold text-gradient"
        >
          MA.
        </motion.div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mishra Aditya. All rights reserved.
        </p>

        <div className="flex gap-8">
          {['Home', 'Projects', 'Contact'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-primary transition-colors text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
