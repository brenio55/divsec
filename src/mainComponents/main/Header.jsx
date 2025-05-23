// import './mainComponents.css';

import React, { useState, useEffect } from 'react';
import '/img/logoCurta.png';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Link } from 'react-router-dom';

function Header (){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language } = useLanguage();

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

    const isHomePage = window.location.pathname === '/';

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <div className="headerLeft">
                    <div className="logo">
                        <Link to="/">
                            <img src="/img/logoCurta.png" alt="DivSec Logo" />
                        </Link>
                    </div>
                </div>
                
                <div className="headerRight">
                    <nav className="desktop-nav">
                        <ul>
                            {isHomePage ? (
                                <>
                                    <li><a href="#home">{language === 'pt' ? 'Início' : 'Home'}</a></li>
                                    <li><a href="#services">{language === 'pt' ? 'Serviços' : 'Services'}</a></li>
                                    <li><a href="#clients">{language === 'pt' ? 'Clientes' : 'Clients'}</a></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/about">{language === 'pt' ? 'Quem Somos' : 'About Us'}</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">{language === 'pt' ? 'Início' : 'Home'}</Link></li>
                                    <li><Link to="/about">{language === 'pt' ? 'Quem Somos' : 'About Us'}</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                </>
                            )}
                        </ul>
                    </nav>
                    
                    <div className="language-and-contact">
                        <LanguageSwitcher />
                        <a href={isHomePage ? "#orcamentoButton" : "/#orcamentoButton"} className="contact-button round">
                            {language === 'pt' ? 'Orçamento' : 'Quote'}
                        </a>
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
                        {isHomePage ? (
                            <>
                                <li><a href="#home" onClick={toggleMobileMenu}>{language === 'pt' ? 'Início' : 'Home'}</a></li>
                                <li><a href="#services" onClick={toggleMobileMenu}>{language === 'pt' ? 'Serviços' : 'Services'}</a></li>
                                <li><a href="#clients" onClick={toggleMobileMenu}>{language === 'pt' ? 'Clientes' : 'Clients'}</a></li>
                                <li><Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link></li>
                                <li><Link to="/about" onClick={toggleMobileMenu}>{language === 'pt' ? 'Quem Somos' : 'About Us'}</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" onClick={toggleMobileMenu}>{language === 'pt' ? 'Início' : 'Home'}</Link></li>
                                <li><Link to="/about" onClick={toggleMobileMenu}>{language === 'pt' ? 'Quem Somos' : 'About Us'}</Link></li>
                                <li><Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link></li>
                            </>
                        )}
                        <li>
                            <a href={isHomePage ? "#orcamentoButton" : "/#orcamentoButton"} className="mobile-contact" onClick={toggleMobileMenu}>
                                {language === 'pt' ? 'Orçamento' : 'Quote'}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="mobile-language-switcher">
                    <LanguageSwitcher />
                </div>
            </div>
        </>
    );
}

export default Header;