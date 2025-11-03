import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;