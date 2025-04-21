import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { experience } from '../../data/portfolioData';

const ExperienceTile: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <TileContainer id="experience" color="variant2">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Training Experience
      </h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="ml-12"
        >
          {experience.map((job) => (
            <motion.div 
              key={job.id}
              variants={item}
              className="mb-8 last:mb-0 relative"
            >
              {/* Timeline circle */}
              <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {job.position}
                  </h4>
                  <span className="text-sm text-primary-600 dark:text-primary-400 sm:ml-4">
                    {job.duration}
                  </span>
                </div>
                
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                  {job.company}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </TileContainer>
  );
};

export default ExperienceTile;