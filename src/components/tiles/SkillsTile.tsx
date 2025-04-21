import React from 'react';
import { motion } from 'framer-motion';
import TileContainer from '../ui/TileContainer';
import { skills } from '../../data/portfolioData';

const SkillsTile: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <TileContainer id="skills" color="variant3">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Skills & Technologies
      </h3>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category} 
            variants={item}
            className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 shadow-sm"
          >
            <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-3">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </TileContainer>
  );
};

export default SkillsTile;