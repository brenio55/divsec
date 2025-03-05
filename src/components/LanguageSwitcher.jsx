import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        onClick={toggleLanguage} 
        className="language-button"
        aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      >
        {language === 'pt' ? 'EN' : 'PT'}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 