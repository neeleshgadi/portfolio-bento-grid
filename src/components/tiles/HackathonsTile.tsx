import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { hackathons } from '../../data/portfolioData';

const HackathonsTile: React.FC = () => {
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
    <TileContainer color="variant1">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Hackathons
      </h3>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {hackathons.map((hackathon) => (
          <motion.div 
            key={hackathon.id} 
            variants={item}
            className="mb-4 last:mb-0 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
          >
            <div className="flex justify-between">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {hackathon.name}
              </h4>
              {hackathon.position && (
                <span className="flex items-center text-accent-600 dark:text-accent-400 text-sm">
                  <Trophy size={14} className="mr-1" />
                  {hackathon.position}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {hackathon.project}
            </p>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {hackathon.date}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </TileContainer>
  );
};

export default HackathonsTile;