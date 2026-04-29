import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email Me</h4>
                <p className="text-gray-400">subbhammishra123@gmail.com</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Call Me</h4>
                <p className="text-gray-400">+91-8696131268</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                <p className="text-gray-400">Ahmedabad, India</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaGithub />, link: '#', color: 'hover:text-white' },
                { icon: <FaLinkedin />, link: 'http://www.linkedin.com/in/aditya-mishra-3330b42b7', color: 'hover:text-blue-400' },
                { icon: <FaInstagram />, link: '#', color: 'hover:text-pink-400' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 glass-card ${social.color} transition-all hover:-translate-y-2`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
