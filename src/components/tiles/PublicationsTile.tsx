import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { publications } from '../../data/portfolioData';

const PublicationsTile: React.FC = () => {
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
    <TileContainer color="variant3">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <BookOpen className="mr-2" size={20} />
        Publications
      </h3>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {publications.map((pub) => (
          <motion.div 
            key={pub.id}
            variants={item}
            className="mb-4 last:mb-0 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
          >
            <h4 className="font-medium text-gray-900 dark:text-white flex justify-between items-start">
              <span>{pub.title}</span>
              {pub.link && (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 ml-2"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </h4>
            
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {pub.journal}
              </span>
              <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                {pub.date}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </TileContainer>
  );
};

export default PublicationsTile;