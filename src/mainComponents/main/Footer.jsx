import { useLanguage } from '../../context/LanguageContext';

function Footer(){
    const { language } = useLanguage();

    return (
        <>
        <footer id="contact">
            <div className="flex leftSideLine">
                <div className="logoFooter">
                    <img src="img/logoPequena.webp" alt="DivSec Logo" />
                </div>
                <div className="menuFooter">
                    <div className="flex">
                        <div className="menuLeft">
                            <h2>DiVSeC</h2>
                            <ul>
                                <li>{language === 'pt' ? 'Quem Somos' : 'About Us'}</li>
                                <a href='#services'><li>{language === 'pt' ? 'Serviços' : 'Services'}</li></a>
                                <li>FAQ</li>
                            </ul>                    
                        </div>    
                    </div>                    
                    <div className="flex">
                        <div className="menuRight">
                            <h2>{language === 'pt' ? 'Empresa' : 'Company'}</h2>
                            <ul>
                                <li>{language === 'pt' ? 'Termos e Condições' : 'Terms and Conditions'}</li>
                                <li>{language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}</li>
                                <a href='https://www.instagram.com/divsec.cloud/' target='_blank'><li>{language === 'pt' ? 'Contato' : 'Contact'}</li></a>
                            </ul>                    
                        </div>    
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="socialMediaFooter">                    
                        <div className="flex titleFooter">
                            <div>
                                <h3>DIVSEC.CLOUD</h3>
                                <p>{language === 'pt' ? 'Dividindo Seções, Conquistando com Tecnologia em Nuvem' : 'Dividing Sections, Conquering with Cloud Technology'}</p>
                            </div>                            
                            <p>56.096.623/0001-64</p>
                        </div>                    

                        <div className="flex socialMediaIcons">
                            <a href='https://www.linkedin.com/in/brenio-filho/' target='_blank'><img src="img/linkedin.webp" alt="LinkedIn" /></a>
                            <a href='https://www.instagram.com/divsec.cloud/' target='_blank'><img src="img/instagramWhite.svg" alt="Instagram" /></a>
                        </div>
                        
                </div>
                
            </div>     
            <div className="flex">
                <div className="copyrightFooter">
                        <p>{language === 'pt' ? '© 2024 BY DIVSEC - TODOS OS DIREITOS RESERVADOS' : '© 2024 BY DIVSEC - ALL RIGHTS RESERVED'}</p>
                </div>
            </div>      
        </footer>
        </>
    )
}

export default Footer