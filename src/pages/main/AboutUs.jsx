import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function AboutUs() {
    const { language } = useLanguage();

    const aboutSections = [
        {
            title: language === 'pt' ? 'Nossa História' : 'Our History',
            content: language === 'pt' 
                ? 'A DiVSeC foi fundada com a missão de proporcionar soluções de TI inovadoras e personalizadas para empresas de todos os tamanhos, tudo pelos meios digitais - por meio da nuvem. Nossa equipe de especialistas combina experiência técnica com uma visão estratégica para ajudar nossos clientes a alcançarem seus objetivos de negócios através da tecnologia.' 
                : 'DiVSeC was founded with the mission of providing innovative and customized IT solutions for companies of all sizes, all through digital means - cloud based. Our team of experts combines technical expertise with a strategic vision to help our clients achieve their business goals through technology.'
        },
        {
            title: language === 'pt' ? 'Nossa Missão' : 'Our Mission',
            content: language === 'pt' 
                ? 'Impulsionar o sucesso dos nossos clientes através de soluções digitais eficientes e inovadoras, transformando desafios em oportunidades de crescimento.' 
                : 'To drive our clients\' success through efficient and innovative digital solutions, transforming challenges into growth opportunities.'
        },
        {
            title: language === 'pt' ? 'Nossa Visão' : 'Our Vision',
            content: language === 'pt' 
                ? 'Ser referência em soluções de TI no mercado, reconhecida pela excelência técnica, atendimento personalizado e resultados concretos para nossos clientes.' 
                : 'To be a reference in IT solutions in the market, recognized for technical excellence, personalized service and concrete results for our clients.'
        },
        {
            title: language === 'pt' ? 'Nossa Equipe' : 'Our Team',
            content: language === 'pt' 
                ? 'Contamos com profissionais capacitados e apaixonados por tecnologia, sempre atualizados com as últimas tendências do mercado para entregar as melhores soluções aos nossos clientes.' 
                : 'We have trained professionals who are passionate about technology, always updated with the latest market trends to deliver the best solutions to our clients.'
        }
    ];

    return (
        <>
            <Header />
            <div className="about-us-container">
                <h1 className="titlesIntro" data-aos="fade-up" data-aos-duration="400">
                    {language === 'pt' ? (
                        <>Quem <span className="purpleColor">Somos</span></>
                    ) : (
                        <>About <span className="purpleColor">Us</span></>
                    )}
                </h1>

                <div className="about-content">
                    {aboutSections.map((section, index) => (
                        <div key={index} className="about-section" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs; 