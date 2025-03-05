// import './mainComponents.css';

import React, { useState, useEffect } from 'react';
import '/img/logoCurta.png';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher';

function Header (){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <div className="headerLeft">
                    <div className="logo">
                        <a href="#home">
                            <img src="/img/logoCurta.png" alt="DivSec Logo" />
                        </a>
                    </div>
                </div>
                
                <div className="headerRight">
                    <nav className="desktop-nav">
                        <ul>
                            <li><a href="#home">{t('home')}</a></li>
                            <li><a href="#services">{t('services')}</a></li>
                            <li><a href="#workflow">{t('workflow')}</a></li>
                            <li><a href="#testimonials">{t('testimonials')}</a></li>
                        </ul>
                    </nav>
                    
                    <div className="language-and-contact">
                        <LanguageSwitcher />
                        <a href="#contact" className="contact-button round">{t('contact')}</a>
                    </div>
                    
                    <div className="hamburger-menu" onClick={toggleMobileMenu}>
                        <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li><a href="#home" onClick={toggleMobileMenu}>{t('home')}</a></li>
                        <li><a href="#services" onClick={toggleMobileMenu}>{t('services')}</a></li>
                        <li><a href="#workflow" onClick={toggleMobileMenu}>{t('workflow')}</a></li>
                        <li><a href="#testimonials" onClick={toggleMobileMenu}>{t('testimonials')}</a></li>
                        <li><a href="#contact" className="mobile-contact" onClick={toggleMobileMenu}>{t('contact')}</a></li>
                    </ul>
                </nav>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <LanguageSwitcher />
                </div>
            </div>
        </>
    );
}

export default Header;