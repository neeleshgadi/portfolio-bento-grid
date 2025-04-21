import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { certifications } from '../../data/portfolioData';

const CertificationsTile: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <TileContainer color="variant5">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Award className="mr-2" size={24} />
        Certifications
      </h3>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={item} 
            className="mb-4 last:mb-0 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
          >
            <h4 className="font-medium text-gray-900 dark:text-white">
              {cert.title}
            </h4>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer}
              </span>
              <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </TileContainer>
  );
};

export default CertificationsTile;