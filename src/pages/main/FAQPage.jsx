import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function FAQPage() {
    const { language } = useLanguage();
    
    // FAQ items in Portuguese
    const ptFaqItems = [
        {
            question: "Quais tipos de serviços de TI a DiVSeC oferece?",
            answer: "Oferecemos uma ampla gama de serviços de TI, incluindo desenvolvimento web, gestão de projetos de TI, gerenciamento de social media, suporte técnico, consultoria em TI, soluções de segurança digital e muito mais, adaptados para empresas de todos os portes."
        },
        {
            question: "Quanto tempo leva para desenvolver um website?",
            answer: "O prazo depende da complexidade do projeto. Websites simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos como e-commerces ou plataformas personalizadas podem levar de 1 a 3 meses. Sempre definimos prazos claros no início do projeto."
        },
        {
            question: "Como funciona o processo de pagamento?",
            answer: "Trabalhamos com um sistema de 50% de entrada no início do projeto e os 50% restantes após a aprovação final. Para projetos maiores, podemos estabelecer cronogramas de pagamento em etapas."
        },
        {
            question: "A DiVSeC oferece manutenção após a conclusão do projeto?",
            answer: "Sim, oferecemos planos de manutenção e suporte contínuo para todos os nossos projetos. Isso inclui atualizações de segurança, correções de bugs e pequenas melhorias."
        },
        {
            question: "Como garantem a segurança dos dados dos clientes?",
            answer: "Seguimos rigorosamente as diretrizes da LGPD e implementamos medidas de segurança robustas, incluindo criptografia de dados, backups regulares, controle de acesso e monitoramento constante para proteger as informações dos nossos clientes."
        },
        {
            question: "É possível expandir os serviços contratados no futuro?",
            answer: "Absolutamente. Nossos serviços são modulares e escaláveis, permitindo que você comece com o essencial e expanda conforme seu negócio cresce, sem perder a integração entre as soluções."
        },
        {
            question: "Vocês trabalham com projetos de pequeno porte?",
            answer: "Sim, atendemos clientes de todos os tamanhos. Nossas soluções são personalizadas de acordo com as necessidades e orçamento de cada cliente, seja para pequenas empresas ou grandes corporações."
        },
        {
            question: "Quais tecnologias vocês utilizam nos projetos?",
            answer: "Utilizamos tecnologias modernas e robustas como React, Node.js, PHP, WordPress, entre outras. A escolha da tecnologia depende das necessidades específicas do projeto, sempre priorizando performance, segurança e escalabilidade."
        }
    ];
    
    // FAQ items in English
    const enFaqItems = [
        {
            question: "What types of IT services does DiVSeC offer?",
            answer: "We offer a wide range of IT services, including web development, IT project management, social media management, technical support, IT consulting, digital security solutions, and much more, tailored for businesses of all sizes."
        },
        {
            question: "How long does it take to develop a website?",
            answer: "The timeframe depends on the project's complexity. Simple websites can take 2-4 weeks, while more complex projects like e-commerce sites or custom platforms can take 1-3 months. We always set clear deadlines at the beginning of the project."
        },
        {
            question: "How does the payment process work?",
            answer: "We work with a system of 50% upfront at the beginning of the project and the remaining 50% after final approval. For larger projects, we can establish milestone-based payment schedules."
        },
        {
            question: "Does DiVSeC offer maintenance after project completion?",
            answer: "Yes, we offer maintenance plans and ongoing support for all our projects. This includes security updates, bug fixes, and minor improvements."
        },
        {
            question: "How do you ensure the security of client data?",
            answer: "We strictly follow LGPD guidelines and implement robust security measures, including data encryption, regular backups, access control, and constant monitoring to protect our clients' information."
        },
        {
            question: "Is it possible to expand contracted services in the future?",
            answer: "Absolutely. Our services are modular and scalable, allowing you to start with the essentials and expand as your business grows, without losing integration between solutions."
        },
        {
            question: "Do you work with small-scale projects?",
            answer: "Yes, we serve clients of all sizes. Our solutions are customized according to each client's needs and budget, whether for small businesses or large corporations."
        },
        {
            question: "Which technologies do you use in your projects?",
            answer: "We use modern and robust technologies such as React, Node.js, PHP, WordPress, among others. The choice of technology depends on the specific needs of the project, always prioritizing performance, security, and scalability."
        }
    ];

    // Select FAQ items based on current language
    const faqItems = language === 'pt' ? ptFaqItems : enFaqItems;
    
    // State to track which FAQ item is open
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle FAQ item open/close
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="faq-page-container">
                <div className="faq-page-banner" data-aos="fade-up" data-aos-duration="400">
                    <h1>{language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}</h1>
                </div>

                <div className="faq-page-content" data-aos="fade-up" data-aos-duration="400">
                    <div className="faq-container">
                        {faqItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                data-aos="fade-up" 
                                data-aos-duration="400" 
                                data-aos-delay={index * 100}
                            >
                                <div 
                                    className="faq-question" 
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3>{item.question}</h3>
                                    <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
                                </div>
                                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="faq-page-contact" data-aos="fade-up" data-aos-duration="400">
                        <p>
                            {language === 'pt' 
                                ? 'Tem alguma dúvida que não encontrou aqui? Entre em contato conosco!' 
                                : 'Have a question you didn\'t find here? Contact us!'}
                        </p>
                        <a href='https://wa.me/558431902145' target='_blank' rel="noopener noreferrer">
                            <button className='buttonPattern white'>
                                {language === 'pt' ? 'Fale Conosco' : 'Contact Us'}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FAQPage; 