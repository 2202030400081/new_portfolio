import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add custom class to body for cursor hiding
    if (!isMobile) {
      document.body.classList.add('custom-cursor-active');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9998]"
        style={{ 
          x: useSpring(mouseX, { stiffness: 250, damping: 25 }), 
          y: useSpring(mouseY, { stiffness: 250, damping: 25 }),
          scale: 1.5
        }}
      />
    </>
  );
};

export default CustomCursor;
