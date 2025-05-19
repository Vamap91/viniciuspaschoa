import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

const CTA = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden" id="cta">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        <div className="absolute top-1/3 left-3/4 w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/5 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            ref={ref}
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('ctaTitle')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <a
              href="https://calendly.com/viniciusaugustopaschoa1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
            >
              {t('ctaButton')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
