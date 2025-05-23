import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function PrivacyPolicy() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <div className="privacy-container">
                <div className="privacy-banner" data-aos="fade-up" data-aos-duration="400">
                    <h1>{language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}</h1>
                </div>

                <div className="privacy-content" data-aos="fade-up" data-aos-duration="400">
                    {language === 'pt' ? (
                        <>
                            <h2>Introdução</h2>
                            <p>A DiVSeC está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta política de privacidade explica como coletamos, usamos e protegemos suas informações.</p>

                            <h2>1. Dados Coletados</h2>
                            <p>Podemos coletar os seguintes tipos de informações:</p>
                            <ul>
                                <li>Informações de contato (nome, e-mail, telefone, endereço)</li>
                                <li>Informações profissionais (empresa, cargo)</li>
                                <li>Dados de acesso ao site (endereço IP, navegador usado, páginas visitadas)</li>
                                <li>Informações de projeto (requisitos, preferências, histórico de comunicações)</li>
                            </ul>

                            <h2>2. Finalidade do Tratamento de Dados</h2>
                            <p>Utilizamos seus dados pessoais para:</p>
                            <ul>
                                <li>Fornecer e melhorar nossos serviços</li>
                                <li>Comunicar-nos sobre projetos, atualizações ou suporte</li>
                                <li>Processar pagamentos</li>
                                <li>Personalizar sua experiência</li>
                                <li>Cumprir obrigações legais</li>
                            </ul>

                            <h2>3. Base Legal para o Tratamento</h2>
                            <p>O tratamento dos dados pessoais é realizado com base nas seguintes condições:</p>
                            <ul>
                                <li>Execução de contrato</li>
                                <li>Consentimento do titular</li>
                                <li>Interesse legítimo</li>
                                <li>Cumprimento de obrigações legais</li>
                            </ul>

                            <h2>4. Compartilhamento de Dados</h2>
                            <p>Podemos compartilhar suas informações com:</p>
                            <ul>
                                <li>Funcionários da DiVSeC que necessitam acessá-las para realizar seus trabalhos</li>
                                <li>Provedores de serviços terceirizados que nos auxiliam na operação (como serviços de hospedagem, processamento de pagamentos)</li>
                                <li>Autoridades governamentais, quando exigido por lei</li>
                            </ul>

                            <h2>5. Segurança dos Dados</h2>
                            <p>Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais, incluindo:</p>
                            <ul>
                                <li>Criptografia de dados sensíveis</li>
                                <li>Controles de acesso</li>
                                <li>Backups regulares</li>
                                <li>Treinamento de equipe sobre privacidade e segurança</li>
                            </ul>

                            <h2>6. Seus Direitos</h2>
                            <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                            <ul>
                                <li>Confirmação da existência de tratamento de dados</li>
                                <li>Acesso aos dados</li>
                                <li>Correção de dados incompletos ou desatualizados</li>
                                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                                <li>Portabilidade dos dados</li>
                                <li>Revogação do consentimento</li>
                            </ul>

                            <h2>7. Período de Retenção</h2>
                            <p>Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contratuais, prestação de contas ou solicitação de autoridades competentes.</p>

                            <h2>8. Contato do Encarregado de Proteção de Dados (DPO)</h2>
                            <p>Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato com nosso DPO através do e-mail: dpo@divsec.com</p>

                            <h2>9. Atualizações desta Política</h2>
                            <p>Podemos atualizar esta política periodicamente. Recomendamos que você revise-a regularmente para estar informado sobre como protegemos suas informações.</p>
                        </>
                    ) : (
                        <>
                            <h2>Introduction</h2>
                            <p>DiVSeC is committed to protecting the privacy and personal data of our clients, in compliance with the General Data Protection Law (LGPD - Law No. 13,709/2018). This privacy policy explains how we collect, use and protect your information.</p>

                            <h2>1. Data Collected</h2>
                            <p>We may collect the following types of information:</p>
                            <ul>
                                <li>Contact information (name, email, phone, address)</li>
                                <li>Professional information (company, position)</li>
                                <li>Website access data (IP address, browser used, pages visited)</li>
                                <li>Project information (requirements, preferences, communication history)</li>
                            </ul>

                            <h2>2. Purpose of Data Processing</h2>
                            <p>We use your personal data to:</p>
                            <ul>
                                <li>Provide and improve our services</li>
                                <li>Communicate about projects, updates or support</li>
                                <li>Process payments</li>
                                <li>Personalize your experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2>3. Legal Basis for Processing</h2>
                            <p>The processing of personal data is carried out based on the following conditions:</p>
                            <ul>
                                <li>Execution of contract</li>
                                <li>Consent of the data subject</li>
                                <li>Legitimate interest</li>
                                <li>Compliance with legal obligations</li>
                            </ul>

                            <h2>4. Data Sharing</h2>
                            <p>We may share your information with:</p>
                            <ul>
                                <li>DiVSeC employees who need to access it to perform their jobs</li>
                                <li>Outsourced service providers that assist us in operations (such as hosting services, payment processing)</li>
                                <li>Government authorities, when required by law</li>
                            </ul>

                            <h2>5. Data Security</h2>
                            <p>We implement technical and organizational measures to protect your personal data, including:</p>
                            <ul>
                                <li>Encryption of sensitive data</li>
                                <li>Access controls</li>
                                <li>Regular backups</li>
                                <li>Team training on privacy and security</li>
                            </ul>

                            <h2>6. Your Rights</h2>
                            <p>According to LGPD, you have the following rights:</p>
                            <ul>
                                <li>Confirmation of the existence of data processing</li>
                                <li>Access to data</li>
                                <li>Correction of incomplete or outdated data</li>
                                <li>Anonymization, blocking or deletion of unnecessary data</li>
                                <li>Data portability</li>
                                <li>Revocation of consent</li>
                            </ul>

                            <h2>7. Retention Period</h2>
                            <p>We keep your personal data for as long as necessary to fulfill the purposes for which they were collected, including legal, contractual obligations, accountability or requests from competent authorities.</p>

                            <h2>8. Data Protection Officer (DPO) Contact</h2>
                            <p>To exercise your rights or clarify doubts about the processing of your personal data, contact our DPO through email: dpo@divsec.com</p>

                            <h2>9. Updates to this Policy</h2>
                            <p>We may update this policy periodically. We recommend that you review it regularly to stay informed about how we protect your information.</p>
                        </>
                    )}
                    
                    <div className="privacy-footer" data-aos="fade-up" data-aos-duration="400">
                        <p>
                            {language === 'pt' 
                                ? 'Última atualização: Julho 2023' 
                                : 'Last updated: July 2023'}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy; 