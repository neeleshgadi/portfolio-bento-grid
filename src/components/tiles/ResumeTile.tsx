import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import TileContainer from '../ui/TileContainer';

const ResumeTile: React.FC = () => {
  return (
    <TileContainer color="variant4">
      <motion.div
        className="flex flex-col items-center justify-center h-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <FileText
            size={48}
            className="text-primary-600 dark:text-primary-400 mb-4"
          />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Resume
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download my full resume to learn more about my skills and experience.
        </p>

        <motion.a
          href="https://drive.google.com/file/d/12RN0hmTU8ae0KSBplpPKLR1nWO8hj1G6/view?usp=sharing"
          download
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} className="mr-2" />
          Download Resume
        </motion.a>
      </motion.div>
    </TileContainer>
  );
};

export default ResumeTile;