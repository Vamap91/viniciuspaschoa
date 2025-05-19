import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

interface ProjectCardProps {
  title: string;
  description: string;
  story1: string;
  story2: string;
  story3: string;
  tags: string;
  color: string;
  index: number;
}

const ProjectCard = ({ title, description, story1, story2, story3, tags, color, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Definir cores baseadas no parâmetro color
  const getBorderColor = () => {
    switch(color) {
      case 'blue': return 'border-blue-600';
      case 'red': return 'border-red-600';
      case 'gold': return 'border-yellow-500';
      case 'teal': return 'border-teal-500';
      case 'silver': return 'border-gray-400';
      default: return 'border-blue-600';
    }
  };
  
  const getGlowColor = () => {
    switch(color) {
      case 'blue': return 'shadow-blue-900/30';
      case 'red': return 'shadow-red-900/30';
      case 'gold': return 'shadow-yellow-900/30';
      case 'teal': return 'shadow-teal-900/30';
      case 'silver': return 'shadow-gray-900/30';
      default: return 'shadow-blue-900/30';
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className={`bg-gray-900 rounded-lg overflow-hidden border ${getBorderColor()} shadow-lg ${getGlowColor()} h-full`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></div>
            <p className="text-gray-400 text-sm">{story1}</p>
          </div>
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></div>
            <p className="text-gray-400 text-sm">{story2}</p>
          </div>
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></div>
            <p className="text-gray-400 text-sm">{story3}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.split(',').map((tag, i) => (
            <span 
              key={i} 
              className={`text-xs px-2 py-1 rounded-full bg-gray-800 text-${color === 'gold' ? 'yellow' : color}-400 animate-pulse`}
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section className="py-16 bg-gray-950 text-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t('projectsTitle')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title={t('mirrorGlassTitle')}
            description={t('mirrorGlassDesc')}
            story1={t('mirrorGlassStory1')}
            story2={t('mirrorGlassStory2')}
            story3={t('mirrorGlassStory3')}
            tags={t('mirrorGlassTags')}
            color="blue"
            index={0}
          />
          
          <ProjectCard
            title={t('heatGlassTitle')}
            description={t('heatGlassDesc')}
            story1={t('heatGlassStory1')}
            story2={t('heatGlassStory2')}
            story3={t('heatGlassStory3')}
            tags={t('heatGlassTags')}
            color="red"
            index={1}
          />
          
          <ProjectCard
            title={t('oraculoTitle')}
            description={t('oraculoDesc')}
            story1={t('oraculoStory1')}
            story2={t('oraculoStory2')}
            story3={t('oraculoStory3')}
            tags={t('oraculoTags')}
            color="gold"
            index={2}
          />
          
          <ProjectCard
            title={t('mindGlassTitle')}
            description={t('mindGlassDesc')}
            story1={t('mindGlassStory1')}
            story2={t('mindGlassStory2')}
            story3={t('mindGlassStory3')}
            tags={t('mindGlassTags')}
            color="teal"
            index={3}
          />
          
          <ProjectCard
            title={t('tindraCarTitle')}
            description={t('tindraCarDesc')}
            story1={t('tindraCarStory1')}
            story2={t('tindraCarStory2')}
            story3={t('tindraCarStory3')}
            tags={t('tindraCarTags')}
            color="silver"
            index={4}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
