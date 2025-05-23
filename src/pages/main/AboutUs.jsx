import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function AboutUs() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <div className="about-us-container">
                <div className="about-banner" data-aos="fade-up" data-aos-duration="400">
                    <h1>{language === 'pt' ? 'Quem Somos' : 'About Us'}</h1>
                </div>

                <div className="about-content" data-aos="fade-up" data-aos-duration="400">
                    <div className="about-section">
                        <h2>{language === 'pt' ? 'Nossa História' : 'Our History'}</h2>
                        <p>
                            {language === 'pt' 
                                ? 'A DiVSeC foi fundada com a missão de proporcionar soluções de TI inovadoras e personalizadas para empresas de todos os tamanhos. Nossa equipe de especialistas combina experiência técnica com uma visão estratégica para ajudar nossos clientes a alcançarem seus objetivos de negócios através da tecnologia.' 
                                : 'DiVSeC was founded with the mission of providing innovative and customized IT solutions for companies of all sizes. Our team of experts combines technical expertise with a strategic vision to help our clients achieve their business goals through technology.'}
                        </p>
                    </div>

                    <div className="about-section" data-aos="fade-up" data-aos-duration="400">
                        <h2>{language === 'pt' ? 'Nossa Missão' : 'Our Mission'}</h2>
                        <p>
                            {language === 'pt' 
                                ? 'Impulsionar o sucesso dos nossos clientes através de soluções digitais eficientes e inovadoras, transformando desafios em oportunidades de crescimento.' 
                                : 'To drive our clients\' success through efficient and innovative digital solutions, transforming challenges into growth opportunities.'}
                        </p>
                    </div>

                    <div className="about-section" data-aos="fade-up" data-aos-duration="400">
                        <h2>{language === 'pt' ? 'Nossa Visão' : 'Our Vision'}</h2>
                        <p>
                            {language === 'pt' 
                                ? 'Ser referência em soluções de TI no mercado, reconhecida pela excelência técnica, atendimento personalizado e resultados concretos para nossos clientes.' 
                                : 'To be a reference in IT solutions in the market, recognized for technical excellence, personalized service and concrete results for our clients.'}
                        </p>
                    </div>

                    <div className="about-section" data-aos="fade-up" data-aos-duration="400">
                        <h2>{language === 'pt' ? 'Nossa Equipe' : 'Our Team'}</h2>
                        <p>
                            {language === 'pt' 
                                ? 'Contamos com profissionais capacitados e apaixonados por tecnologia, sempre atualizados com as últimas tendências do mercado para entregar as melhores soluções aos nossos clientes.' 
                                : 'We have trained professionals who are passionate about technology, always updated with the latest market trends to deliver the best solutions to our clients.'}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs; 