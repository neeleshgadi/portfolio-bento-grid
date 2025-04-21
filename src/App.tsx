import React from 'react';
import Header from './components/layout/Header';
import BentoGrid from './components/layout/BentoGrid';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <BentoGrid />
        <BackToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;