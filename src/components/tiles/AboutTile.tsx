import React from 'react';
import { motion } from 'framer-motion';
import TileContainer from '../ui/TileContainer';
import { aboutMe } from '../../data/portfolioData';

const AboutTile: React.FC = () => {
  const text = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
      },
    },
  };

  const words = aboutMe.split(' ');

  return (
    <TileContainer id="about" color="variant2">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        About Me
      </h3>
      
      <motion.p 
        className="text-gray-700 dark:text-gray-300 leading-relaxed"
        variants={text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-1">
            {w}
          </motion.span>
        ))}
      </motion.p>
    </TileContainer>
  );
};

export default AboutTile;