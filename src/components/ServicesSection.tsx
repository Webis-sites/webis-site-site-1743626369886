'use client';

import React from 'react';
import { FaBookMedical, FaSearch, FaUserMd, FaBookReader } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaBookMedical />,
      title: "הזמנת ספרות מקצועית",
      description: "אנו מציעים שירות הזמנה מותאם אישית של ספרות רפואית מקצועית מהארץ ומהעולם, כולל כתבי עת וספרים נדירים."
    },
    {
      icon: <FaSearch />,
      title: "ייעוץ ספרות בריאות",
      description: "צוות המומחים שלנו יסייע לכם למצוא את המקורות המדויקים והמהימנים ביותר בנושאי בריאות ורפואה."
    },
    {
      icon: <FaUserMd />,
      title: "המלצות מותאמות אישית",
      description: "קבלו המלצות ספרים מותאמות למצבים רפואיים ספציפיים, תחומי עניין מקצועיים או מסלולי לימוד."
    },
    {
      icon: <FaBookReader />,
      title: "סדנאות וקבוצות קריאה",
      description: "הצטרפו לסדנאות וקבוצות קריאה בנושאי בריאות מגוונים בהנחיית מומחים מובילים בתחום."
    }
  ];

  return (
    <section className="py-16 bg-secondary" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            בחנות הספרים jjjj אנו מציעים מגוון שירותים מקצועיים לסטודנטים, אנשי מקצוע וכל המתעניין בתחום הבריאות
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;