import React, { createContext, useState, useContext, useEffect } from 'react';

// Translations
export const translations = {
  en: {
    // Header
    home: "Home",
    services: "Services",
    workflow: "Workflow",
    testimonials: "Testimonials",
    contact: "Contact",
    
    // Banner
    bannerTitle: "We develop websites and systems for your business",
    
    // Services
    servicesTitle: "Our Services",
    webDevelopment: "Web Development",
    webDevelopmentDesc: "We create modern and responsive websites that adapt to all devices, providing an excellent user experience.",
    systemDevelopment: "System Development",
    systemDevelopmentDesc: "Custom systems to optimize your business processes and increase productivity.",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "Native and hybrid applications for iOS and Android, with intuitive interfaces and high performance.",
    learnMore: "Learn More",
    
    // Workflow
    workflowTitle: "Our Workflow",
    step1Title: "Initial Contact",
    step1Desc: "We discuss your project needs and objectives.",
    step2Title: "Planning",
    step2Desc: "We create a detailed plan with timeline and deliverables.",
    step3Title: "Design",
    step3Desc: "We develop the visual concept and interface design.",
    step4Title: "Development",
    step4Desc: "We code your project with the latest technologies.",
    step5Title: "Testing",
    step5Desc: "We ensure everything works perfectly before delivery.",
    step6Title: "Delivery",
    step6Desc: "We deliver your project and provide support.",
    
    // Testimonials
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "We value our clients' complete satisfaction and ensure the final delivery only when the client feels fully satisfied.",
    
    // Footer
    aboutUs: "About Us",
    ourTeam: "Our Team",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    followUs: "Follow Us",
    copyright: "© 2023 DivSec. All rights reserved.",
  },
  pt: {
    // Header
    home: "Início",
    services: "Serviços",
    workflow: "Processo",
    testimonials: "Depoimentos",
    contact: "Contato",
    
    // Banner
    bannerTitle: "Desenvolvemos websites e sistemas para o seu negócio",
    
    // Services
    servicesTitle: "Nossos Serviços",
    webDevelopment: "Desenvolvimento Web",
    webDevelopmentDesc: "Criamos websites modernos e responsivos que se adaptam a todos os dispositivos, proporcionando uma excelente experiência ao usuário.",
    systemDevelopment: "Desenvolvimento de Sistemas",
    systemDevelopmentDesc: "Sistemas personalizados para otimizar os processos do seu negócio e aumentar a produtividade.",
    mobileApps: "Aplicativos Móveis",
    mobileAppsDesc: "Aplicativos nativos e híbridos para iOS e Android, com interfaces intuitivas e alto desempenho.",
    learnMore: "Saiba Mais",
    
    // Workflow
    workflowTitle: "Nosso Processo",
    step1Title: "Contato Inicial",
    step1Desc: "Discutimos as necessidades e objetivos do seu projeto.",
    step2Title: "Planejamento",
    step2Desc: "Criamos um plano detalhado com cronograma e entregas.",
    step3Title: "Design",
    step3Desc: "Desenvolvemos o conceito visual e design de interface.",
    step4Title: "Desenvolvimento",
    step4Desc: "Codificamos seu projeto com as tecnologias mais recentes.",
    step5Title: "Testes",
    step5Desc: "Garantimos que tudo funcione perfeitamente antes da entrega.",
    step6Title: "Entrega",
    step6Desc: "Entregamos seu projeto e fornecemos suporte.",
    
    // Testimonials
    testimonialsTitle: "Depoimentos de Clientes",
    testimonialsSubtitle: "Prezamos pela satisfação total do nosso cliente, nos certificamos de fazer a última entrega apenas quando cliente se sentir devidamente satisfeito.",
    
    // Footer
    aboutUs: "Sobre Nós",
    ourTeam: "Nossa Equipe",
    careers: "Carreiras",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    followUs: "Siga-nos",
    copyright: "© 2023 DivSec. Todos os direitos reservados.",
  }
};

// Create context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to get language from localStorage, default to 'pt'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pt';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Optional: Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between 'pt' and 'en'
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  // Get text based on current language
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 