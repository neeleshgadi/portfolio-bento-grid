import React from 'react';
import { motion } from 'framer-motion';

interface TileContainerProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  id?: string;
}

const defaultColors = {
  variant1: 'bg-gradient-to-br from-primary-100/90 to-primary-200/90 dark:from-primary-900/20 dark:to-primary-800/30',
  variant2: 'bg-gradient-to-br from-secondary-100/90 to-secondary-200/90 dark:from-secondary-900/20 dark:to-secondary-800/30',
  variant3: 'bg-gradient-to-br from-accent-100/90 to-accent-200/90 dark:from-accent-900/20 dark:to-accent-800/30',
  variant4: 'bg-gradient-to-br from-violet-100/90 to-purple-200/90 dark:from-violet-900/20 dark:to-purple-800/30',
  variant5: 'bg-gradient-to-br from-emerald-100/90 to-teal-200/90 dark:from-emerald-900/20 dark:to-teal-800/30',
};

const TileContainer: React.FC<TileContainerProps> = ({ 
  children, 
  className = '', 
  color = 'variant1',
  id,
}) => {
  const bgColor = defaultColors[color as keyof typeof defaultColors] || color;
  
  return (
    <motion.div
      id={id}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.2 }
      }}
      className={`${bgColor} rounded-2xl shadow-lg backdrop-blur-sm p-8 h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
};

export default TileContainer;