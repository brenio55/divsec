import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

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
                                <li><Link to="/about">{language === 'pt' ? 'Quem Somos' : 'About Us'}</Link></li>
                                <li><a href='/#services'>{language === 'pt' ? 'Serviços' : 'Services'}</a></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>                    
                        </div>    
                    </div>                    
                    <div className="flex menuRightWrapper">
                        <div className="menuRight">
                            <h2>{language === 'pt' ? 'Empresa' : 'Company'}</h2>
                            <ul>
                                <li><Link to="/terms">{language === 'pt' ? 'Termos e Condições' : 'Terms and Conditions'}</Link></li>
                                <li><Link to="/privacy">{language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}</Link></li>
                                <li><a href='https://wa.me/558431902145' target='_blank' rel="noopener noreferrer">{language === 'pt' ? 'Contato' : 'Contact'}</a></li>
                            </ul>                    
                            
                        </div>    
                        <div className="flex">
                            <div className="socialMediaFooter">                    
                                    <div className="flex titleFooter">
                                        <div>
                                            <h3>DIVSEC.CLOUD</h3>
                                            <p>{language === 'pt' ? 'Soluções de TI para empresas de todos os portes' : 'IT solutions for businesses of all sizes'}</p>
                                        </div>                            
                                        <p>56.096.623/0001-64</p>
                                    </div>                    

                                    <div className="flex socialMediaIcons">
                                        <a href='https://www.linkedin.com/in/brenio-filho/' target='_blank' rel="noopener noreferrer"><img src="img/linkedin.webp" alt="LinkedIn" /></a>
                                        <a href='https://www.instagram.com/divsec.cloud/' target='_blank' rel="noopener noreferrer"><img src="img/instagramWhite.svg" alt="Instagram" /></a>
                                    </div>
                                    
                            </div>
                
                        </div>     
                        <div className="flex">
                            <div className="copyrightFooter">
                                    <p>{language === 'pt' ? '© 2025 BY DIVSEC - TODOS OS DIREITOS RESERVADOS' : '© 2025 BY DIVSEC - ALL RIGHTS RESERVED'}</p>
                            </div>
                        </div>    
                    </div>            
                </div>            
            </div>            
        </footer>
        </>
    )
}

export default Footer