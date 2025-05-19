import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

const Quotes = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const quotes = [
    t('quote1'),
    t('quote2'),
    t('quote3')
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  // Alternar entre as frases automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section className="py-16 bg-black text-white" id="quotes">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t('quotesTitle')}
        </motion.h2>
        
        <div className="max-w-4xl mx-auto h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl italic text-gray-300">"{quotes[currentQuote]}"</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentQuote ? 'bg-red-600' : 'bg-gray-600'
              }`}
              aria-label={`Quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
