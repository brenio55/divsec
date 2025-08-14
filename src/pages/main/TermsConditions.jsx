import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function TermsConditions() {
    const { language } = useLanguage();

    const terms = language === 'pt' ? [
        {
            title: "1. Aceitação dos Termos",
            content: "Ao utilizar os serviços da DiVSeC, você concorda com estes termos. Por favor, leia-os cuidadosamente."
        },
        {
            title: "2. Descrição dos Serviços",
            content: "A DiVSeC fornece serviços de tecnologia da informação, incluindo desenvolvimento web, gestão de projetos de TI, gerenciamento de social media e outras soluções digitais conforme acordado em contrato específico."
        },
        {
            title: "3. Processo de Contratação",
            content: "A contratação de nossos serviços é formalizada mediante aprovação de orçamento e assinatura de contrato específico, onde serão detalhadas todas as condições particulares do projeto."
        },
        {
            title: "4. Pagamentos",
            content: "Nossos serviços seguem o modelo de 50% de entrada no início do projeto e 50% na entrega final, salvo condições especiais estabelecidas em contrato."
        },
        {
            title: "5. Prazo de Entrega",
            content: "Os prazos de entrega serão estabelecidos em contrato e podem variar de acordo com a complexidade do projeto. Quaisquer alterações no escopo podem impactar o cronograma inicialmente acordado."
        },
        {
            title: "6. Direitos Autorais",
            content: "Após a conclusão do projeto e pagamento integral, o cliente receberá os direitos de uso sobre o produto final, respeitando as limitações previstas em lei."
        },
        {
            title: "7. Confidencialidade",
            content: "Comprometemo-nos a manter a confidencialidade de todas as informações compartilhadas pelo cliente durante o processo de desenvolvimento."
        },
        {
            title: "8. Garantia e Suporte",
            content: "Oferecemos garantia de 30 dias para correção de bugs após a entrega final do projeto, não incluindo alterações de escopo ou funcionalidades adicionais."
        },
        {
            title: "9. Limitação de Responsabilidade",
            content: "A DiVSeC não será responsável por danos indiretos, lucros cessantes ou outras perdas comerciais resultantes do uso dos nossos serviços."
        },
        {
            title: "10. Modificações dos Termos",
            content: "Reservamo-nos o direito de modificar estes termos a qualquer momento, notificando os clientes sobre quaisquer alterações significativas."
        }
    ] : [
        {
            title: "1. Acceptance of Terms",
            content: "By using DiVSeC services, you agree to these terms. Please read them carefully."
        },
        {
            title: "2. Service Description",
            content: "DiVSeC provides information technology services, including web development, IT project management, social media management, and other digital solutions as agreed in a specific contract."
        },
        {
            title: "3. Contracting Process",
            content: "The contracting of our services is formalized through the approval of a quote and signing of a specific contract, which will detail all the particular conditions of the project."
        },
        {
            title: "4. Payments",
            content: "Our services follow the model of 50% upfront at the beginning of the project and 50% on final delivery, unless special conditions are established in the contract."
        },
        {
            title: "5. Delivery Timeline",
            content: "Delivery timelines will be established in the contract and may vary according to the complexity of the project. Any changes in scope may impact the initially agreed schedule."
        },
        {
            title: "6. Copyright",
            content: "After project completion and full payment, the client will receive usage rights to the final product, respecting the limitations provided by law."
        },
        {
            title: "7. Confidentiality",
            content: "We commit to maintaining the confidentiality of all information shared by the client during the development process."
        },
        {
            title: "8. Warranty and Support",
            content: "We offer a 30-day warranty for bug fixes after the final delivery of the project, not including scope changes or additional functionalities."
        },
        {
            title: "9. Limitation of Liability",
            content: "DiVSeC will not be responsible for indirect damages, lost profits or other commercial losses resulting from the use of our services."
        },
        {
            title: "10. Modifications to Terms",
            content: "We reserve the right to modify these terms at any time, notifying customers of any significant changes."
        }
    ];

     useEffect(() => {
            window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="terms-container">
                     <h1 className="titlesIntro" data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' ? (
                            <>Termos e <span className="purpleColor">Condições</span></>
                        ) : (
                                <>Terms <span className="purpleColor">and Conditions</span></>
                            )}
                    </h1>

                <div className="terms-content">
                    {terms.map((term, index) => (
                        <div key={index} className="about-section" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                            <h2>{term.title}</h2>
                            <p>{term.content}</p>
                        </div>
                    ))}
                    
                    <div className="terms-footer" data-aos="fade-up" data-aos-duration="400">
                        <p>
                            {language === 'pt' 
                                ? 'Última atualização: Maio 2025' 
                                : 'Last updated: May 2025'}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TermsConditions; 