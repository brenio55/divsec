import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ClientsSlider() {
    const { language } = useLanguage();
    
    // Sample client logos - replace with actual client logos
    const clients = [
        { name: "TechCorp", logo: "https://via.placeholder.com/150?text=TechCorp" },
        { name: "DataSolutions", logo: "https://via.placeholder.com/150?text=DataSolutions" },
        { name: "CloudServe", logo: "https://via.placeholder.com/150?text=CloudServe" },
        { name: "ITExperts", logo: "https://via.placeholder.com/150?text=ITExperts" },
        { name: "NetSecurity", logo: "https://via.placeholder.com/150?text=NetSecurity" },
        { name: "DevOpsInc", logo: "https://via.placeholder.com/150?text=DevOpsInc" }
    ];

    return (
        <section className="clients-slider" id="clients">
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                {language === 'pt' ? (
                    <>Empresas que <span className="purpleColor">confiam</span> em nossos serviços</>
                ) : (
                    <>Companies that <span className="purpleColor">trust</span> our services</>
                )}
            </h2>

            <div className="clients-container" data-aos="fade-up" data-aos-duration="400">
                <div className="slider-container">
                    <div className="logo-slider">
                        {clients.map((client, index) => (
                            <div key={index} className="logo-slide" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                                <img src={client.logo} alt={client.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientsSlider; 