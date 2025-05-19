import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

interface HelpItemProps {
  title: string;
  description1: string;
  description2: string;
  icon: string;
  index: number;
}

const HelpItem = ({ title, description1, description2, icon, index }: HelpItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="text-4xl mb-4 text-red-500">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-2">{description1}</p>
      <p className="text-gray-400">{description2}</p>
    </motion.div>
  );
};

const HelpSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section className="py-16 bg-black text-white" id="help">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t('helpTitle')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HelpItem
            title={t('helpAITitle')}
            description1={t('helpAIDesc')}
            description2={t('helpAIDesc2')}
            icon="🤖"
            index={0}
          />
          
          <HelpItem
            title={t('helpAutomationTitle')}
            description1={t('helpAutomationDesc')}
            description2={t('helpAutomationDesc2')}
            icon="⚙️"
            index={1}
          />
          
          <HelpItem
            title={t('helpDiagnosticTitle')}
            description1={t('helpDiagnosticDesc')}
            description2={t('helpDiagnosticDesc2')}
            icon="🔍"
            index={2}
          />
          
          <HelpItem
            title={t('helpDevelopmentTitle')}
            description1={t('helpDevelopmentDesc')}
            description2={t('helpDevelopmentDesc2')}
            icon="💡"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
