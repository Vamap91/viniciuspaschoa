import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../lib/i18n';

const Gallery = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Imagens reais do usuário
  const images = [
    {
      src: '/images/WhatsApp Image 2020-12-10 at 15.54.24 (3).jpeg',
      alt: 'Vinícius sorrindo',
      caption: 'Vinícius Augusto'
    },
    {
      src: '/images/c2d5af97-1e95-4314-826e-b6d5f05d609a.jpg',
      alt: 'Vinícius em ambiente profissional',
      caption: 'Especialista em IA'
    },
    {
      src: '/images/9ba3c848-20ca-474a-83df-b84a9af84bf0.jpeg',
      alt: 'Vinícius em momento descontraído',
      caption: 'Inovação e tecnologia'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-950 text-white" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t('galleryTitle')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-64 bg-gray-800 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
