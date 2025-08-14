import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../../mainComponents/main/Header';
import Footer from '../../mainComponents/main/Footer';

function AboutUs() {
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const linkedinUrl = 'https://www.linkedin.com/in/brenio-filho/#recommendations';
    const fiverrUrl = 'https://br.fiverr.com/brenio55?public_mode=true#reviews_header_as_seller';

    return (
        <>
            <Header />
            <style>
                {`
               .about-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 40px;
                }

                .about-photo-container {
                    position: relative;
                    display: inline-block;
                }

                .about-photo {
                    width: 290px;
                    height: 290px;
                    border-radius: 50%;
                    object-fit: cover;
                    box-shadow: 0 0 20px rgba(0,0,0,0.25);
                    border: 4px solid white;
                }

                .about-logo-overlay {
                    border: 1px solid purple;
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    background: black;
                    padding: 8px;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);

                }
                    
                .about-logo {
                    width: 120px;
                    height: 120px;
                    object-fit: contain;
                }
                .about-links {
                    display: flex;
                    gap: 16px;
                    margin: 24px 0;
                    justify-content: center;
                }
                .about-cta {
                    text-align: center;
                    margin-top: 32px;
                }
                `}
            </style>
            <div className="about-us-container">
                <h1 id="aboutUsTitle" className="titlesIntro" data-aos="fade-up" data-aos-duration="400">
                    {language === 'pt' ? (
                        <>Quem <span className="purpleColor">Somos</span></>
                    ) : (
                        <>About <span className="purpleColor">Us</span></>
                    )}
                </h1>

            <div className="about-visual" data-aos="fade-up" data-aos-duration="400">
                <div className="about-photo-container">
                    <img src="/img/brenio.jpg" alt="Foto de Brenio Filho" className="about-photo" />
                    <img src="/img/divsecLogo.png" alt="Logo DiVSeC" className="about-logo-overlay" />
                </div>
            </div>


                <div className="about-content">
                    {language === 'pt' ? (
                        <>
                            <p>
                                A <strong>DiVSeC</strong>, nasceu em Natal/RN aos meados de 2020, com o objetivo de transformar ideias em soluções digitais de alto impacto. Nossa expertise abrange desde o <span className="purpleColor">desenvolvimento de softwares</span> (sites, plataformas, ERPs, etc) sob medida para diferentes públicos até projetos de <span className="purpleColor">design</span>, <span className="purpleColor">gestão de TI</span> e <span className="purpleColor">mídias sociais</span>. E para quem busca algo único, também oferecemos produção musical exclusiva.
                            </p>
                            <p>
                                À frente da DiVSeC está <strong>Brenio Filho</strong>, <span className="purpleColor">Desenvolvedor Sênior</span> com mais de <strong>5 anos de experiência</strong> em desenvolvimento, liderança de projetos e design. 
                            </p>
                            <p>
                                O que começou como um projeto individual rapidamente evoluiu. Hoje, a DiVSeC conta com talentos como <strong>Guilherme M.</strong>, <strong>Julio L.</strong>, <strong>Felipe L.</strong> e outros profissionais que se unem a nós conforme a demanda de cada projeto. Nossa rede de colaboradores é flexível e estratégica, garantindo sempre o melhor resultado.
                            </p>
                            <p>
                                Já são mais de <span className="purpleColor"><strong>100 clientes atendidos</strong></span> e uma reputação construída com <strong>qualidade</strong>, <strong>compromisso</strong> e respeito ao <span className="purpleColor">Triângulo de Ferro</span> da gestão de projetos: prazo, custo e escopo.
                            </p>
                            <p>
                                Verifique um pouco do histórico profissional do nosso principal desenvolvedor, Brenio, nas plataformas abaixo:
                            </p>
                            <div className="about-links">
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="about-linkedin">
                                    <button className="buttonPattern brand-gradient">LinkedIn</button>
                                </a>
                                <a href={fiverrUrl} target="_blank" rel="noopener noreferrer" className="about-fiverr">
                                    <button className="buttonPattern brand-gradient">Fiverr</button>
                                </a>
                            </div>
                            <div className="about-cta">
                                <h2 className="purpleColor">Pronto para elevar seu projeto ao próximo nível?</h2>
                                <p>Fale com a DiVSeC e descubra como podemos impulsionar o seu negócio com tecnologia, criatividade e dedicação total ao seu sucesso.</p>
                            </div>
                            <div className="flex center orcamentoButton" id="orcamentoButton" data-aos="fade-up" data-aos-duration="400">
                                <a href='https://wa.me/558431902145' target='_blank' rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="400">
                                    <button className="buttonPattern brand-gradient">
                                    {language === 'pt' ? 'Solicitar orçamento' : 'Request a quote'}
                                    </button>
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>
                                <strong>DiVSeC</strong>, was founded in Natal/RN around 2020, with the purpose of to turn ideas into high-impact digital solutions. Our expertise ranges from <span className="purpleColor">custom software development</span> (websites, platforms, ERPs, etc) for diverse audiences to <span className="purpleColor">design</span>, <span className="purpleColor">IT project management</span>, and <span className="purpleColor">social media</span>. For those seeking something truly unique, we also offer exclusive music production services.
                            </p>
                            <p>
                                Leading DiVSeC is <strong>Brenio Filho</strong>, a <span className="purpleColor">Senior Developer</span> with over <strong>5 years of experience</strong> in development, project leadership, and design. 
                            </p>
                            <p>
                                What began as a solo project quickly evolved. Today, DiVSeC brings together talents like <strong>Guilherme M.</strong>, <strong>Julio L.</strong>, <strong>Felipe L.</strong>, and other professionals who join us according to each project's needs. Our network of collaborators is flexible and strategic, always ensuring the best results.
                            </p>
                            <p>
                                We have already served more than <span className="purpleColor"><strong>100 clients</strong></span>, building a reputation for <strong>quality</strong>, <strong>commitment</strong>, and respect for the <span className="purpleColor">Iron Triangle</span> of project management: time, cost, and scope.
                            </p>
                            <p>
                                Kindly verify a little of the history of our main developer, Brenio, in the platforms below:
                            </p>
                            <div className="about-links">
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="about-linkedin">
                                    <button className="buttonPattern brand-gradient">LinkedIn</button>
                                </a>
                                <a href={fiverrUrl} target="_blank" rel="noopener noreferrer" className="about-fiverr">
                                    <button className="buttonPattern brand-gradient">Fiverr</button>
                                </a>
                            </div>
                            <div className="about-cta">
                                <h2 className="purpleColor">Ready to take your project to the next level?</h2>
                                <p>Contact DiVSeC and discover how we can boost your business with technology, creativity, and total dedication to your success.</p>
                            </div>
                            <div className="flex center orcamentoButton" id="orcamentoButton" data-aos="fade-up" data-aos-duration="400">
                                <a href='https://wa.me/558431902145' target='_blank' rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="400">
                                    <button className="buttonPattern brand-gradient">
                                    {language === 'pt' ? 'Solicitar orçamento' : 'Request a quote'}
                                    </button>
                                </a>
                            </div>                            
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
