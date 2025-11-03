import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const distance = 100 * speed;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [0, -distance]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, distance]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -distance]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, distance]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, -distance]);
    }
  };

  const transform = getTransform();

  const getStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: transform };
    }
    return { y: transform };
  };

  return (
    <motion.div
      ref={ref}
      style={getStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;