'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaLeaf, FaMedkit, FaBrain, FaHeart } from 'react-icons/fa';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const PortfolioGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'ספר תזונה טבעית',
      description: 'מדריך מקיף לתזונה טבעית ואורגנית לחיים בריאים יותר',
      image: '/images/nutrition-book.jpg',
      category: 'nutrition'
    },
    {
      id: 2,
      title: 'ריפוי בצמחי מרפא',
      description: 'ספר המציג את היתרונות הרפואיים של צמחי מרפא מסורתיים',
      image: '/images/herbal-book.jpg',
      category: 'herbal'
    },
    {
      id: 3,
      title: 'יוגה למתחילים',
      description: 'מדריך מצולם לתרגול יוגה בבית לשיפור הגמישות והרוגע',
      image: '/images/yoga-book.jpg',
      category: 'mindfulness'
    },
    {
      id: 4,
      title: 'רפואה אלטרנטיבית',
      description: 'סקירה מקיפה של שיטות ריפוי אלטרנטיביות מרחבי העולם',
      image: '/images/alternative-medicine.jpg',
      category: 'medicine'
    },
    {
      id: 5,
      title: 'בריאות הלב',
      description: 'מחקרים עדכניים ועצות מעשיות לשמירה על בריאות הלב',
      image: '/images/heart-health.jpg',
      category: 'medicine'
    },
    {
      id: 6,
      title: 'מדיטציה יומית',
      description: 'תרגילי מדיטציה פשוטים לשיפור הריכוז והפחתת מתחים',
      image: '/images/meditation-book.jpg',
      category: 'mindfulness'
    },
    {
      id: 7,
      title: 'תזונה לספורטאים',
      description: 'מדריך תזונתי מותאם אישית לאנשים העוסקים בפעילות גופנית',
      image: '/images/sports-nutrition.jpg',
      category: 'nutrition'
    },
    {
      id: 8,
      title: 'סדנאות בריאות',
      description: 'תיעוד מסדנאות בריאות קודמות שנערכו בחנות הספרים שלנו',
      image: '/images/health-workshop.jpg',
      category: 'events'
    }
  ];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  const categories = [
    { id: 'all', name: 'הכל', icon: <FaBook /> },
    { id: 'nutrition', name: 'תזונה', icon: <FaLeaf /> },
    { id: 'medicine', name: 'רפואה', icon: <FaMedkit /> },
    { id: 'mindfulness', name: 'מיינדפולנס', icon: <FaBrain /> },
    { id: 'herbal', name: 'צמחי מרפא', icon: <FaLeaf /> },
    { id: 'events', name: 'אירועים', icon: <FaHeart /> }
  ];

  return (
    <div className="rtl-portfolio-container bg-light-bg p-6 rounded-lg shadow-lg" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary font-display">הספרייה שלנו</h2>
      
      <div className="filter-container flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              filter === category.id 
                ? 'bg-primary text-white shadow-md transform scale-105' 
                : 'bg-secondary text-gray-700 hover:bg-primary hover:text-white'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-primary px-4 py-2 rounded-full font-medium transform transition hover:scale-105">
                    פרטים נוספים
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;