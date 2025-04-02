'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-primary text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary"></div>
        <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-secondary"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-title">
              חנות ספרים מוביל בישראל
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-10 hero-subtitle">
              חווית לקוח מושלמת בכל ביקור
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={onCtaClick}
              className="bg-secondary text-primary font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 cta-button"
            >
              קבע תור עכשיו
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-4xl">📚</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#FFEEAD" 
            fillOpacity="0.3" 
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;