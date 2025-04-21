import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { projects } from '../../data/portfolioData';

const ProjectsTile: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
    <TileContainer id="projects" color="variant4" className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Projects
      </h3>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            whileHover={{ 
              y: -5, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={project.image || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{
                  transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a 
                    href="#" 
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    aria-label="View code"
                  >
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900 dark:text-white">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </TileContainer>
  );
};

export default ProjectsTile;