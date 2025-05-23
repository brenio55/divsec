import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function PrivacyPolicy() {
    const { language } = useLanguage();

    const privacyItems = language === 'pt' ? [
        {
            title: "Introdução",
            content: "A DiVSeC está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta política de privacidade explica como coletamos, usamos e protegemos suas informações.",
            list: null
        },
        {
            title: "1. Dados Coletados",
            content: "Podemos coletar os seguintes tipos de informações:",
            list: [
                "Informações de contato (nome, e-mail, telefone, endereço)",
                "Informações profissionais (empresa, cargo)",
                "Dados de acesso ao site (endereço IP, navegador usado, páginas visitadas)",
                "Informações de projeto (requisitos, preferências, histórico de comunicações)"
            ]
        },
        {
            title: "2. Finalidade do Tratamento de Dados",
            content: "Utilizamos seus dados pessoais para:",
            list: [
                "Fornecer e melhorar nossos serviços",
                "Comunicar-nos sobre projetos, atualizações ou suporte",
                "Processar pagamentos",
                "Personalizar sua experiência",
                "Cumprir obrigações legais"
            ]
        },
        {
            title: "3. Base Legal para o Tratamento",
            content: "O tratamento dos dados pessoais é realizado com base nas seguintes condições:",
            list: [
                "Execução de contrato",
                "Consentimento do titular",
                "Interesse legítimo",
                "Cumprimento de obrigações legais"
            ]
        },
        {
            title: "4. Compartilhamento de Dados",
            content: "Podemos compartilhar suas informações com:",
            list: [
                "Funcionários da DiVSeC que necessitam acessá-las para realizar seus trabalhos",
                "Provedores de serviços terceirizados que nos auxiliam na operação (como serviços de hospedagem, processamento de pagamentos)",
                "Autoridades governamentais, quando exigido por lei"
            ]
        },
        {
            title: "5. Segurança dos Dados",
            content: "Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais, incluindo:",
            list: [
                "Criptografia de dados sensíveis",
                "Controles de acesso",
                "Backups regulares",
                "Treinamento de equipe sobre privacidade e segurança"
            ]
        },
        {
            title: "6. Seus Direitos",
            content: "De acordo com a LGPD, você tem os seguintes direitos:",
            list: [
                "Confirmação da existência de tratamento de dados",
                "Acesso aos dados",
                "Correção de dados incompletos ou desatualizados",
                "Anonimização, bloqueio ou eliminação de dados desnecessários",
                "Portabilidade dos dados",
                "Revogação do consentimento"
            ]
        },
        {
            title: "7. Período de Retenção",
            content: "Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contratuais, prestação de contas ou solicitação de autoridades competentes.",
            list: null
        },
        {
            title: "8. Contato do Encarregado de Proteção de Dados (DPO)",
            content: "Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato com nosso DPO através do e-mail: brenio@divsec.cloud",
            list: null
        },
        {
            title: "9. Atualizações desta Política",
            content: "Podemos atualizar esta política periodicamente. Recomendamos que você revise-a regularmente para estar informado sobre como protegemos suas informações.",
            list: null
        }
    ] : [
        {
            title: "Introduction",
            content: "DiVSeC is committed to protecting the privacy and personal data of our clients, in compliance with the General Data Protection Law (LGPD - Law No. 13,709/2018). This privacy policy explains how we collect, use and protect your information.",
            list: null
        },
        {
            title: "1. Data Collected",
            content: "We may collect the following types of information:",
            list: [
                "Contact information (name, email, phone, address)",
                "Professional information (company, position)",
                "Website access data (IP address, browser used, pages visited)",
                "Project information (requirements, preferences, communication history)"
            ]
        },
        {
            title: "2. Purpose of Data Processing",
            content: "We use your personal data to:",
            list: [
                "Provide and improve our services",
                "Communicate about projects, updates or support",
                "Process payments",
                "Personalize your experience",
                "Comply with legal obligations"
            ]
        },
        {
            title: "3. Legal Basis for Processing",
            content: "The processing of personal data is carried out based on the following conditions:",
            list: [
                "Execution of contract",
                "Consent of the data subject",
                "Legitimate interest",
                "Compliance with legal obligations"
            ]
        },
        {
            title: "4. Data Sharing",
            content: "We may share your information with:",
            list: [
                "DiVSeC employees who need to access it to perform their jobs",
                "Outsourced service providers that assist us in operations (such as hosting services, payment processing)",
                "Government authorities, when required by law"
            ]
        },
        {
            title: "5. Data Security",
            content: "We implement technical and organizational measures to protect your personal data, including:",
            list: [
                "Encryption of sensitive data",
                "Access controls",
                "Regular backups",
                "Team training on privacy and security"
            ]
        },
        {
            title: "6. Your Rights",
            content: "According to LGPD, you have the following rights:",
            list: [
                "Confirmation of the existence of data processing",
                "Access to data",
                "Correction of incomplete or outdated data",
                "Anonymization, blocking or deletion of unnecessary data",
                "Data portability",
                "Revocation of consent"
            ]
        },
        {
            title: "7. Retention Period",
            content: "We keep your personal data for as long as necessary to fulfill the purposes for which they were collected, including legal, contractual obligations, accountability or requests from competent authorities.",
            list: null
        },
        {
            title: "8. Data Protection Officer (DPO) Contact",
            content: "To exercise your rights or clarify doubts about the processing of your personal data, contact our DPO through email: brenio@divsec.cloud",
            list: null
        },
        {
            title: "9. Updates to this Policy",
            content: "We may update this policy periodically. We recommend that you review it regularly to stay informed about how we protect your information.",
            list: null
        }
    ];

    return (
        <>
            <Header />
            <div className="privacy-container">
                <div className="privacy-banner" data-aos="fade-up" data-aos-duration="400">
                    <h1 className="titlesIntro" data-aos="fade-up" data-aos-duration="400">
                    {language === 'pt' ? (
                        <>Política de <span className="purpleColor">Privacidade</span></>
                    ) : (
                            <>Privacy <span className="purpleColor">Policy</span></>
                        )}
                    </h1>
                </div>

                <div className="privacy-content">
                    {privacyItems.map((item, index) => (
                        <div key={index} className="about-section" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            {item.list && (
                                <ul>
                                    {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex}>{listItem}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    
                    <div className="privacy-footer" data-aos="fade-up" data-aos-duration="400">
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

export default PrivacyPolicy; 