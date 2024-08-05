function Footer(){
    return (
        <>
        <footer>
            <div className="flex leftSideLine">
                <div className="logoFooter">
                    <img src="img/logoPequena.webp" alt="" srcset="" />
                </div>
                <div className="menuFooter">
                    <div className="flex">
                        <div className="menuLeft">
                            <h2>DiVSeC</h2>
                            <ul>
                                <li>Quem Somos</li>
                                <li>Serviços</li>
                                <li>FAQ</li>
                            </ul>                    
                        </div>    
                    </div>                    
                    <div className="flex">
                        <div className="menuRight">
                            <h2>Empresa</h2>
                            <ul>
                                <li>Termos e Condições</li>
                                <li>Política de Privacidade</li>
                                <li>Contato</li>
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
                                <p>Dividing Sections, Conquering with Cloud Technology</p>
                            </div>                            
                            <p>56.096.623/0001-64</p>
                        </div>                    

                        <div className="flex socialMediaIcons">
                            <img src="img/linkedin.webp" alt="" srcset="" />
                            <img src="img/instagramWhite.svg" alt="" />
                        </div>
                        
                </div>
                
            </div>     
            <div className="flex">
                <div className="copyrightFooter">
                        <p>© 2024  BY DIVSEC - TODOS OS DIREITOS RESERVADOS</p>
                </div>
            </div>      
        </footer>
        </>
    )
}

export default Footer