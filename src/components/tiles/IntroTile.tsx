import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { personalInfo } from '../../data/portfolioData';

const IntroTile: React.FC = () => {
  return (
    <TileContainer color="variant1">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-full bg-white dark:bg-gray-800 flex-shrink-0 shadow-md"
        >
          <img
            src="..\..\images\profile_pic.jpg"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-2">
              {personalInfo.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl">
              {personalInfo.summary}
            </p>

            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-1" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex mt-4 space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </TileContainer>
  );
};

export default IntroTile;
