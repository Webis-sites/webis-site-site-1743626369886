'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure RTL direction is applied
    if (sectionRef.current) {
      sectionRef.current.dir = 'rtl';
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-primary text-white py-16 px-4 md:px-8 lg:px-16 dir-rtl ${className}`}
      dir="rtl"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-hebrew">אודות jjjj</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xl md:text-2xl font-hebrew leading-relaxed mb-6">
              אנחנו חנות ספרים מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-lg font-hebrew leading-relaxed mb-8">
              בחנות jjjj, אנו מאמינים שספרי בריאות איכותיים צריכים להיות נגישים לכולם. הצוות המקצועי שלנו תמיד זמין לעזור לכם למצוא את הספרים המתאימים ביותר לצרכים שלכם.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary font-bold py-3 px-8 rounded-lg font-hebrew transition-all hover:shadow-lg"
            >
              קראו עוד
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 p-8 rounded-lg border-2 border-secondary relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl font-bold">15+</span>
                  </motion.div>
                  <h3 className="font-hebrew font-bold text-lg">שנות ניסיון</h3>
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl font-bold">1000+</span>
                  </motion.div>
                  <h3 className="font-hebrew font-bold text-lg">ספרים</h3>
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl font-bold">50+</span>
                  </motion.div>
                  <h3 className="font-hebrew font-bold text-lg">מחברים</h3>
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondary text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl font-bold">5K+</span>
                  </motion.div>
                  <h3 className="font-hebrew font-bold text-lg">לקוחות מרוצים</h3>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-secondary/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;