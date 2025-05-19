import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import * as THREE from 'three';

const Header = () => {
  const { t, language, changeLanguage } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Configuração da animação de partículas
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Criar partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1500;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material para as partículas
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      alphaMap: new THREE.TextureLoader().load('/particle.png'),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Criar o sistema de partículas
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Posicionar a câmera
    camera.position.z = 3;

    // Função de animação
    const animate = () => {
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      // Atualizar posições das partículas para criar efeito de movimento
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        // Movimento suave das partículas
        positions[i3] = x + Math.sin(z + performance.now() * 0.001) * 0.001;
        positions[i3 + 1] = y + Math.cos(x + performance.now() * 0.001) * 0.001;
        positions[i3 + 2] = z + Math.sin(y + performance.now() * 0.001) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Ajustar tamanho ao redimensionar a janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Limpar recursos ao desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <header className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Canvas para animação de partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Conteúdo do header */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-white max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('headerTitle')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://calendly.com/viniciusaugustopaschoa1/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('headerButton')}
          </a>
        </motion.div>
      </div>

      {/* Seletor de idioma */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex space-x-2">
          <button
            onClick={() => changeLanguage('pt')}
            className={`px-2 py-1 rounded ${
              language === 'pt' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            🇧🇷 PT
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-2 py-1 rounded ${
              language === 'en' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
