import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

const TimelineItem = ({ 
  title, 
  description1, 
  description2, 
  index 
}: { 
  title: string; 
  description1: string; 
  description2: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Círculo e linha */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center z-10">
          <span className="text-white font-bold">{index + 1}</span>
        </div>
        {index < 2 && (
          <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
        )}
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1 bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description1}</p>
        <p className="text-gray-400">{description2}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 bg-black text-white" id="timeline">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t('timelineTitle')}
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            title={t('timelineVallourec')}
            description1={t('timelineVallourec1')}
            description2={t('timelineVallourec2')}
            index={0}
          />
          
          <TimelineItem
            title={t('timelineProjects')}
            description1={t('timelineProjects1')}
            description2={t('timelineProjects2')}
            index={1}
          />
          
          <TimelineItem
            title={t('timelineCarglass')}
            description1={t('timelineCarglass1')}
            description2={t('timelineCarglass2')}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
