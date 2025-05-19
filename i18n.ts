// i18n.ts - Sistema de internacionalização
import { useState, useEffect } from 'react';

// Tipos para as traduções
export type Language = 'pt' | 'en';

// Interface para as traduções
export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

// Traduções da aplicação
export const translations: Translations = {
  // Header
  headerTitle: {
    pt: "Você está prestes a conhecer o Vinícius. Não um perfil. Um sistema vivo que transforma IA em impacto real.",
    en: "You're about to meet Vinícius. Not a profile. A living system that transforms AI into real impact."
  },
  headerButton: {
    pt: "Vamos conversar",
    en: "Let's talk"
  },
  
  // Sobre Mim
  aboutTitle: {
    pt: "Sobre Mim",
    en: "About Me"
  },
  aboutDescription: {
    pt: "Especialista em Inteligência Artificial aplicada a negócios, cidadão português, brasileiro, pai do Joaquim, com atuação em grandes empresas (Vallourec, Carglass) e criador de soluções próprias em IA.",
    en: "Specialist in Artificial Intelligence applied to business, Portuguese citizen, Brazilian, father of Joaquim, with experience in large companies (Vallourec, Carglass) and creator of proprietary AI solutions."
  },
  
  // Timeline
  timelineTitle: {
    pt: "Minha Jornada",
    en: "My Journey"
  },
  timelineVallourec: {
    pt: "Vallourec (Transição)",
    en: "Vallourec (Transition)"
  },
  timelineVallourec1: {
    pt: "Engenheiro que descobriu o poder transformador da IA",
    en: "Engineer who discovered the transformative power of AI"
  },
  timelineVallourec2: {
    pt: "Implementou primeira solução de automação que economizou horas/mês",
    en: "Implemented first automation solution that saved hours/month"
  },
  timelineProjects: {
    pt: "Criação dos Projetos",
    en: "Creation of Projects"
  },
  timelineProjects1: {
    pt: "Desenvolvimento de soluções proprietárias que resolvem problemas reais",
    en: "Development of proprietary solutions that solve real problems"
  },
  timelineProjects2: {
    pt: "Da identificação do problema à implementação em produção",
    en: "From problem identification to production implementation"
  },
  timelineCarglass: {
    pt: "Entrada na Carglass",
    en: "Joining Carglass"
  },
  timelineCarglass1: {
    pt: "Aplicação de IA em escala para transformação de negócio",
    en: "Application of AI at scale for business transformation"
  },
  timelineCarglass2: {
    pt: "Impacto mensurável em KPIs estratégicos",
    en: "Measurable impact on strategic KPIs"
  },
  
  // Projetos
  projectsTitle: {
    pt: "Projetos",
    en: "Projects"
  },
  
  // MirrorGlass
  mirrorGlassTitle: {
    pt: "MirrorGlass",
    en: "MirrorGlass"
  },
  mirrorGlassDesc: {
    pt: "O padrão ouro em auditoria de projetos com IA. Analisa iniciativas internas com clareza, apontando riscos, inconsistências e oportunidades em um painel visual limpo.",
    en: "The gold standard in project auditing with AI. Analyzes internal initiatives with clarity, pointing out risks, inconsistencies, and opportunities in a clean visual dashboard."
  },
  mirrorGlassStory1: {
    pt: "Implementado em ambiente produtivo na Vallourec",
    en: "Implemented in production environment at Vallourec"
  },
  mirrorGlassStory2: {
    pt: "Reduziu tempo de auditoria em 70% e aumentou precisão em 35%",
    en: "Reduced audit time by 70% and increased accuracy by 35%"
  },
  mirrorGlassStory3: {
    pt: "Utilizado por equipes de governança para validação de 15+ projetos estratégicos",
    en: "Used by governance teams for validation of 15+ strategic projects"
  },
  mirrorGlassTags: {
    pt: "Auditoria, Diagnóstico, Eficiência",
    en: "Auditing, Diagnostics, Efficiency"
  },
  
  // HeatGlass
  heatGlassTitle: {
    pt: "HeatGlass",
    en: "HeatGlass"
  },
  heatGlassDesc: {
    pt: "Analisa áudios de atendimentos e detecta emoções como raiva, frustração, empolgação e dúvida. Pontua tecnicamente o atendimento, com base em critérios objetivos e inteligência emocional.",
    en: "Analyzes customer service audio and detects emotions such as anger, frustration, excitement, and doubt. Technically scores the service based on objective criteria and emotional intelligence."
  },
  heatGlassStory1: {
    pt: "Aplicado em central de atendimento com 200+ operadores",
    en: "Applied in call center with 200+ operators"
  },
  heatGlassStory2: {
    pt: "Aumentou satisfação do cliente em 28% e reduziu tempo de resolução em 15%",
    en: "Increased customer satisfaction by 28% and reduced resolution time by 15%"
  },
  heatGlassStory3: {
    pt: "Identificou padrões emocionais que levaram à revisão de scripts de atendimento",
    en: "Identified emotional patterns that led to review of service scripts"
  },
  heatGlassTags: {
    pt: "Voz, Emoção, Atendimento, IA Estratégica",
    en: "Voice, Emotion, Customer Service, Strategic AI"
  },
  
  // Oráculo
  oraculoTitle: {
    pt: "Oráculo",
    en: "Oráculo"
  },
  oraculoDesc: {
    pt: "Sistema inteligente que responde perguntas com base em documentos da empresa (PDF, imagens, Word). Usa OCR, IA e RAG (retrieval augmented generation) para consultar bases internas com precisão.",
    en: "Intelligent system that answers questions based on company documents (PDF, images, Word). Uses OCR, AI, and RAG (retrieval augmented generation) to query internal databases with precision."
  },
  oraculoStory1: {
    pt: "Processou mais de 10.000 documentos técnicos na Carglass",
    en: "Processed more than 10,000 technical documents at Carglass"
  },
  oraculoStory2: {
    pt: "Reduziu tempo de busca de informação de horas para segundos",
    en: "Reduced information search time from hours to seconds"
  },
  oraculoStory3: {
    pt: "Integrado com Microsoft Graph para acesso seguro a documentos corporativos",
    en: "Integrated with Microsoft Graph for secure access to corporate documents"
  },
  oraculoTags: {
    pt: "Busca Inteligente, OCR, Microsoft Graph, Documentos",
    en: "Intelligent Search, OCR, Microsoft Graph, Documents"
  },
  
  // MindGlass
  mindGlassTitle: {
    pt: "MindGlass",
    en: "MindGlass"
  },
  mindGlassDesc: {
    pt: "Recebe ideias de melhoria via formulário e transforma automaticamente em um projeto bem escrito, validado por IA. É usado para inovação interna com visão de produto.",
    en: "Receives improvement ideas via form and automatically transforms them into a well-written project, validated by AI. It is used for internal innovation with product vision."
  },
  mindGlassStory1: {
    pt: "Capturou e transformou mais de 300 ideias de colaboradores",
    en: "Captured and transformed more than 300 employee ideas"
  },
  mindGlassStory2: {
    pt: "Resultou em 12 projetos implementados com ROI mensurável",
    en: "Resulted in 12 implemented projects with measurable ROI"
  },
  mindGlassStory3: {
    pt: "Democratizou inovação, com 40% das ideias vindas de áreas não-técnicas",
    en: "Democratized innovation, with 40% of ideas coming from non-technical areas"
  },
  mindGlassTags: {
    pt: "Inovação, Ideias, GPT, Supabase, Automação",
    en: "Innovation, Ideas, GPT, Supabase, Automation"
  },
  
  // Tindra Car
  tindraCarTitle: {
    pt: "Tindra Car",
    en: "Tindra Car"
  },
  tindraCarDesc: {
    pt: "Plataforma de compra e venda de carros com IA. Permite busca por descrição, comparação de modelos, negociação e ranking de melhores opções. Feito com FlutterFlow, GPT e API Tavily.",
    en: "AI-powered car buying and selling platform. Allows search by description, model comparison, negotiation, and ranking of best options. Made with FlutterFlow, GPT, and Tavily API."
  },
  tindraCarStory1: {
    pt: "Plataforma com mais de 5.000 veículos cadastrados",
    en: "Platform with more than 5,000 registered vehicles"
  },
  tindraCarStory2: {
    pt: "Reduziu tempo médio de negociação em 35%",
    en: "Reduced average negotiation time by 35%"
  },
  tindraCarStory3: {
    pt: "Desenvolvido com FlutterFlow e APIs de IA, demonstrando versatilidade técnica",
    en: "Developed with FlutterFlow and AI APIs, demonstrating technical versatility"
  },
  tindraCarTags: {
    pt: "Carros, FlutterFlow, IA, Comparador, Negociação",
    en: "Cars, FlutterFlow, AI, Comparator, Negotiation"
  },
  
  // Como posso te ajudar
  helpTitle: {
    pt: "Como Posso Te Ajudar",
    en: "How I Can Help You"
  },
  
  // IA para Empresas
  helpAITitle: {
    pt: "IA para Empresas",
    en: "AI for Companies"
  },
  helpAIDesc: {
    pt: "Implementação que reduziu custos operacionais em 22% na indústria automotiva",
    en: "Implementation that reduced operational costs by 22% in the automotive industry"
  },
  helpAIDesc2: {
    pt: "Integração com sistemas legados sem interrupção de operações",
    en: "Integration with legacy systems without interruption of operations"
  },
  
  // Automatização
  helpAutomationTitle: {
    pt: "Automatização de Processos Complexos",
    en: "Automation of Complex Processes"
  },
  helpAutomationDesc: {
    pt: "Workflow que eliminou 40h/mês de trabalho manual em análise de qualidade",
    en: "Workflow that eliminated 40h/month of manual work in quality analysis"
  },
  helpAutomationDesc2: {
    pt: "Redução de erros humanos em 95% em processos críticos",
    en: "Reduction of human errors by 95% in critical processes"
  },
  
  // Diagnóstico
  helpDiagnosticTitle: {
    pt: "Diagnóstico Técnico com Auditoria por IA",
    en: "Technical Diagnosis with AI Auditing"
  },
  helpDiagnosticDesc: {
    pt: "Identificação de gargalos invisíveis em pipeline de produção",
    en: "Identification of invisible bottlenecks in production pipeline"
  },
  helpDiagnosticDesc2: {
    pt: "Economia de €150k/ano após implementação de recomendações",
    en: "Savings of €150k/year after implementation of recommendations"
  },
  
  // Desenvolvimento
  helpDevelopmentTitle: {
    pt: "Desenvolvimento de Produtos Inteligentes",
    en: "Development of Intelligent Products"
  },
  helpDevelopmentDesc: {
    pt: "Da concepção ao MVP em 8 semanas com metodologia ágil",
    en: "From conception to MVP in 8 weeks with agile methodology"
  },
  helpDevelopmentDesc2: {
    pt: "Produtos que aprendem e evoluem com o uso, aumentando retenção",
    en: "Products that learn and evolve with use, increasing retention"
  },
  
  // Galeria
  galleryTitle: {
    pt: "Galeria",
    en: "Gallery"
  },
  
  // Frases de Impacto
  quotesTitle: {
    pt: "O Que Dizem",
    en: "What They Say"
  },
  quote1: {
    pt: "Vinícius não apenas entende de IA, ele transforma problemas complexos em soluções elegantes que geram resultados reais.",
    en: "Vinícius not only understands AI, he transforms complex problems into elegant solutions that generate real results."
  },
  quote2: {
    pt: "A capacidade de traduzir conceitos técnicos em valor de negócio é o que diferencia o trabalho do Vinícius.",
    en: "The ability to translate technical concepts into business value is what differentiates Vinícius' work."
  },
  quote3: {
    pt: "Trabalhar com o Vinícius significa ter acesso a uma visão estratégica única sobre como a IA pode transformar sua operação.",
    en: "Working with Vinícius means having access to a unique strategic vision on how AI can transform your operation."
  },
  
  // CTA
  ctaTitle: {
    pt: "Me chama pra uma conversa e eu te mostro algo que você ainda não viu.",
    en: "Call me for a conversation and I'll show you something you haven't seen yet."
  },
  ctaButton: {
    pt: "Agendar reunião",
    en: "Schedule meeting"
  },
  
  // Footer
  footerRights: {
    pt: "Todos os direitos reservados",
    en: "All rights reserved"
  }
};

// Hook para usar as traduções
export const useTranslation = () => {
  // Recupera o idioma salvo ou usa o padrão (pt)
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return saved ? saved : 'pt';
    }
    return 'pt';
  };

  const [language, setLanguage] = useState<Language>('pt');

  // Carrega o idioma salvo ao iniciar
  useEffect(() => {
    setLanguage(getSavedLanguage());
  }, []);

  // Função para traduzir
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  // Função para mudar o idioma
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return { t, language, changeLanguage };
};
