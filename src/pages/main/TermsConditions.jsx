import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function TermsConditions() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <div className="terms-container">
                <div className="terms-banner" data-aos="fade-up" data-aos-duration="400">
                    <h1>{language === 'pt' ? 'Termos e Condições' : 'Terms and Conditions'}</h1>
                </div>

                <div className="terms-content" data-aos="fade-up" data-aos-duration="400">
                    {language === 'pt' ? (
                        <>
                            <h2>1. Aceitação dos Termos</h2>
                            <p>Ao utilizar os serviços da DiVSeC, você concorda com estes termos. Por favor, leia-os cuidadosamente.</p>

                            <h2>2. Descrição dos Serviços</h2>
                            <p>A DiVSeC fornece serviços de tecnologia da informação, incluindo desenvolvimento web, gestão de projetos de TI, gerenciamento de social media e outras soluções digitais conforme acordado em contrato específico.</p>

                            <h2>3. Processo de Contratação</h2>
                            <p>A contratação de nossos serviços é formalizada mediante aprovação de orçamento e assinatura de contrato específico, onde serão detalhadas todas as condições particulares do projeto.</p>

                            <h2>4. Pagamentos</h2>
                            <p>Nossos serviços seguem o modelo de 50% de entrada no início do projeto e 50% na entrega final, salvo condições especiais estabelecidas em contrato.</p>

                            <h2>5. Prazo de Entrega</h2>
                            <p>Os prazos de entrega serão estabelecidos em contrato e podem variar de acordo com a complexidade do projeto. Quaisquer alterações no escopo podem impactar o cronograma inicialmente acordado.</p>

                            <h2>6. Direitos Autorais</h2>
                            <p>Após a conclusão do projeto e pagamento integral, o cliente receberá os direitos de uso sobre o produto final, respeitando as limitações previstas em lei.</p>

                            <h2>7. Confidencialidade</h2>
                            <p>Comprometemo-nos a manter a confidencialidade de todas as informações compartilhadas pelo cliente durante o processo de desenvolvimento.</p>

                            <h2>8. Garantia e Suporte</h2>
                            <p>Oferecemos garantia de 30 dias para correção de bugs após a entrega final do projeto, não incluindo alterações de escopo ou funcionalidades adicionais.</p>

                            <h2>9. Limitação de Responsabilidade</h2>
                            <p>A DiVSeC não será responsável por danos indiretos, lucros cessantes ou outras perdas comerciais resultantes do uso dos nossos serviços.</p>

                            <h2>10. Modificações dos Termos</h2>
                            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, notificando os clientes sobre quaisquer alterações significativas.</p>
                        </>
                    ) : (
                        <>
                            <h2>1. Acceptance of Terms</h2>
                            <p>By using DiVSeC services, you agree to these terms. Please read them carefully.</p>

                            <h2>2. Service Description</h2>
                            <p>DiVSeC provides information technology services, including web development, IT project management, social media management, and other digital solutions as agreed in a specific contract.</p>

                            <h2>3. Contracting Process</h2>
                            <p>The contracting of our services is formalized through the approval of a quote and signing of a specific contract, which will detail all the particular conditions of the project.</p>

                            <h2>4. Payments</h2>
                            <p>Our services follow the model of 50% upfront at the beginning of the project and 50% on final delivery, unless special conditions are established in the contract.</p>

                            <h2>5. Delivery Timeline</h2>
                            <p>Delivery timelines will be established in the contract and may vary according to the complexity of the project. Any changes in scope may impact the initially agreed schedule.</p>

                            <h2>6. Copyright</h2>
                            <p>After project completion and full payment, the client will receive usage rights to the final product, respecting the limitations provided by law.</p>

                            <h2>7. Confidentiality</h2>
                            <p>We commit to maintaining the confidentiality of all information shared by the client during the development process.</p>

                            <h2>8. Warranty and Support</h2>
                            <p>We offer a 30-day warranty for bug fixes after the final delivery of the project, not including scope changes or additional functionalities.</p>

                            <h2>9. Limitation of Liability</h2>
                            <p>DiVSeC will not be responsible for indirect damages, lost profits or other commercial losses resulting from the use of our services.</p>

                            <h2>10. Modifications to Terms</h2>
                            <p>We reserve the right to modify these terms at any time, notifying customers of any significant changes.</p>
                        </>
                    )}
                    
                    <div className="terms-footer" data-aos="fade-up" data-aos-duration="400">
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

export default TermsConditions; 