// import './mainComponents.css';

import React, { useState, useEffect } from 'react';
import '/img/logoCurta.png'

function Header (){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                <div className='headerLeft' data-aos="fade-right" data-aos-duration="400">
                    <img className="logo" src="/img/logoCurta.png" alt="Logo DiVSeC" />
                </div>
                <div className='headerRight' data-aos="fade-left" data-aos-duration="400">
                    {/* Desktop Navigation */}
                    <div className='desktop-nav round' data-aos="fade-down" data-aos-duration="400">
                        <nav>
                            <ul>
                                <li data-aos="fade-down" data-aos-duration="400">Quem Somos</li>
                                <a href='#services'><li data-aos="fade-down" data-aos-duration="400">Serviços</li></a>
                                <li data-aos="fade-down" data-aos-duration="400">FAQ</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <a href='https://wa.me/558431902145' target='_blank' className="contact-button" data-aos="zoom-in" data-aos-duration="400">
                        <button className='buttonPattern'>CONTATO</button>
                    </a>
                    
                    {/* Hamburger Menu Button - Only visible on mobile */}
                    <div className="hamburger-menu" onClick={toggleMobileMenu}>
                        <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Navigation Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <nav>
                        <ul>
                            <li onClick={toggleMobileMenu}>Quem Somos</li>
                            <a href='#services' onClick={toggleMobileMenu}><li>Serviços</li></a>
                            <li onClick={toggleMobileMenu}>FAQ</li>
                            <a href='https://wa.me/558431902145' target='_blank' onClick={toggleMobileMenu}>
                                <li className="mobile-contact">CONTATO</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header