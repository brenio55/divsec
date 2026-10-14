import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useLanguage } from '../../context/LanguageContext';

function ClientsSlider() {
    const { language } = useLanguage();
    
    // Clientes com suas respectivas imagens e links
    const clients = [
        { 
            name: "HDS Serviço", 
            logo: "/img/pastClients/hds.png",
            url: "https://hds-six.vercel.app/"
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
        },
        { 
            name: "IMED Club", 
            logo: "/img/pastClients/logoimed.png",
            url: "https://imedclube.com/"
        },
        { 
            name: "EBS Bank", 
            logo: "/img/pastClients/ebs.png",
            url: "https://ebsbank.com.br/"
        },
        { 
            name: "SIEPP", 
            logo: "/img/projects/siepp/logo.webp",
            url: "https://siepp.divsec.cloud/"
        },
        { 
            name: "Scale Clinic", 
            logo: "/img/projects/scale/logo.png"
        },
        { 
            name: "Alugue Melhor", 
            logo: "/img/projects/aluguemelhor/logo.png",
            url: "https://play.google.com/store/apps/details?id=com.app.aluguemelhor&hl=pt_BR"
        },
        { 
            name: "Ágape", 
            logo: "/img/projects/agape/logo.webp",
            url: "https://play.google.com/store/apps/details?id=com.app.agape"
        },
        { 
            name: "Antonio Sorbara", 
            logo: "/img/projects/sorbara/logo.png",
            url: "https://www.antoniosorbara.com/"
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
                    modules={[Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    spaceBetween={50}
                    slidesPerView={4}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 5,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            effect: "slide",
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            effect: "slide",
                        },
                        720: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            effect: "coverflow",
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                            effect: "coverflow",
                        },
                    }}
                    className="clients-swiper"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            {client.url ? (
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
                            ) : (
                                <div className="client-link">
                                    <div className="client-logo">
                                        <img src={client.logo} alt={client.name} />
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default ClientsSlider; 