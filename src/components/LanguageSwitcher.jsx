import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Opções de idioma com imagens de bandeira
  const languages = [
    { 
      code: 'pt', 
      name: 'Português', 
      flag: 'https://flagcdn.com/w40/br.png' 
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: 'https://flagcdn.com/w40/us.png' 
    }
  ];

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Encontrar o idioma atual
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="language-dropdown-button"
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
      >
        <img 
          src={currentLanguage.flag} 
          alt={`${currentLanguage.name} flag`} 
          className="language-flag" 
          width="24" 
          height="18" 
        />
        <span className="language-name">{currentLanguage.name}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <ul className="language-dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${lang.code === language ? 'active' : ''}`}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                <img 
                  src={lang.flag} 
                  alt={`${lang.name} flag`} 
                  className="language-flag" 
                  width="24" 
                  height="18" 
                />
                <span className="language-name">{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher; 