import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import TileContainer from '../ui/TileContainer';
import { personalInfo } from '../../data/portfolioData';

const ContactTile: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert(`Thanks for your message, ${formState.name}! This is a demo, so no message was actually sent.`);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <TileContainer id="contact" color="variant5">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Contact Me
      </h3>
      
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Mail className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
        <div className="flex items-center mb-3">
          <MapPin className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
          <span className="text-gray-700 dark:text-gray-300">
            {personalInfo.location}
          </span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center"
        >
          <Send size={18} className="mr-2" />
          Send Message
        </motion.button>
      </form>
    </TileContainer>
  );
};

export default ContactTile;