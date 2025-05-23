import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useLanguage } from '../../context/LanguageContext';

function ClientsSlider() {
    const { language } = useLanguage();
    
    // Clientes com suas respectivas imagens e links
    const clients = [
        { 
            name: "HDS Serviço", 
            logo: "/img/pastClients/hds.png",
            url: "https://hdsservico.com.br/"
        },
        { 
            name: "Laio Envelopamento", 
            logo: "/img/pastClients/laio.webp",
            url: "https://laioenvelopamento.com.br/"
        },
        { 
            name: "Calixto Ar Condicionado", 
            logo: "/img/pastClients/logoCalixto.png",
            url: "https://www.calixtoarcondicionado.com.br/#inicio"
        },
        { 
            name: "Etcotur", 
            logo: "/img/pastClients/etcoTur.png",
            url: "https://www.etcotur.com.br/"
        }
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
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        720: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className="clients-swiper"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <a 
                                href={client.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="client-link"
                            >
                                <div className="client-logo">
                                    <img src={client.logo} alt={client.name} />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default ClientsSlider; 