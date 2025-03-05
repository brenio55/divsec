import ServiceComponent from "../../mainComponents/main/ServiceComponent"
import { useLanguage } from '../../context/LanguageContext';

function Services(){
    const { language } = useLanguage();

    // Serviços em português
    const ptServices = [
        {
            name: "Desenvolvimento Web",
            description: "Faça seu website conosco, expondo o seu trabalho para mais pessoas e alcançando um número maior de vendas ou leads para seu negócio! Trabalhamos desde landing pages a lojas online. Clica pra saber mais!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Produção Musical",
            description: "Exponha seus sentimentos com uma produção musical completa, gravamos sua música, compomos, produzimos, mixamos e masterizamos. Clica pra saber mais!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_f3509a0946fd4d608cb0762c79e89465~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/digital-mixer-recording-studio-with-computer-recording-music.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Design / Arte com IA",
            description: "Procurando uma capa pra seu álbum, ou simplesmente melhores imagens para seu negócio ou site? Você está precisando de um designer ou de um pouco de Inteligência Artificial! Clica pra saber mais!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_8b37667fa850456490206f170a907f1f~mv2.png/v1/fill/w_451,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.png",
            link: "#orcamentoButton"
        }
    ];

    // Serviços em inglês
    const enServices = [
        {
            name: "Web Development",
            description: "Create your website with us, showcasing your work to more people and achieving a higher number of sales or leads for your business! We work from landing pages to online stores. Click to learn more!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Music Production",
            description: "Express your feelings with a complete music production, we record your music, compose, produce, mix and master. Click to learn more!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_f3509a0946fd4d608cb0762c79e89465~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/digital-mixer-recording-studio-with-computer-recording-music.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Design / AI Art",
            description: "Looking for an album cover, or simply better images for your business or website? You need a designer or a bit of Artificial Intelligence! Click to learn more!",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_8b37667fa850456490206f170a907f1f~mv2.png/v1/fill/w_451,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.png",
            link: "#orcamentoButton"
        }
    ];

    // Seleciona os serviços com base no idioma atual
    const services = language === 'pt' ? ptServices : enServices;

    return (
        <>
        <section className="services" id="services">
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                {language === 'pt' ? (
                    <>Faça sua empresa <span className="purpleColor">dobrar o número de vendas</span> com seu website, <span className="purpleColor">torne real</span> seu desejo com um dos nossos <span className="purpleColor">serviços</span></>
                ) : (
                    <>Make your company <span className="purpleColor">double its sales</span> with your website, <span className="purpleColor">make real</span> your desire with one of our <span className="purpleColor">services</span></>
                )}
            </h2>

            <h2 
                className="servicesTitle" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                {language === 'pt' ? 'Serviços' : 'Services'}
            </h2>
            
            <section className="serviceGrid" data-aos="fade-up" data-aos-duration="400">
                {services.map((service, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                        <ServiceComponent
                            name={service.name}
                            description={service.description}
                            imgSrc={service.imgSrc}
                            link={service.link}
                        />
                    </div>
                ))}
            </section>
            
        </section>
        </>
    )
}

export default Services