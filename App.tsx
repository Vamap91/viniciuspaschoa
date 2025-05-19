import { useEffect } from 'react';
import { useTranslation } from './lib/i18n';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import HelpSection from './components/HelpSection';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { language } = useTranslation();

  // Atualizar o título da página com base no idioma
  useEffect(() => {
    document.title = language === 'pt' 
      ? 'Vinícius Augusto | Especialista em IA' 
      : 'Vinícius Augusto | AI Specialist';
  }, [language]);

  return (
    <div className="App bg-black text-white">
      <Header />
      <main>
        <Timeline />
        <Projects />
        <HelpSection />
        <Gallery />
        <Quotes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
