import ServiceComponent from "../../mainComponents/main/ServiceComponent"
import { useLanguage } from '../../context/LanguageContext';

function Services(){
    const { language } = useLanguage();

    // Serviços em português
    const ptServices = [
        {
            name: "Desenvolvimento Web Avançado",
            description: "Faça seu website conosco, expondo o seu trabalho para mais pessoas e alcançando um número maior de vendas ou leads para seu negócio! Trabalhamos desde landing pages a lojas online e projetos complexos.",
            imgSrc: "/img/close-up-image-programer-working-his-desk-office.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Gestão Avançada em Projetos de TI",
            description: "Maximize a eficiência do seu negócio com nossa gestão especializada de projetos de TI. Implementamos metodologias ágeis para garantir entregas de valor dentro do prazo e orçamento.",
            imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Gerenciamento de Social Media",
            description: "Potencialize sua marca nas redes sociais! Criamos estratégias personalizadas que conectam seu negócio ao público ideal, aumentando o engajamento e convertendo seguidores em clientes.",
            imgSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Consultoria em Produção Musical",
            description: "Exponha seus sentimentos com uma produção musical completa, gravamos sua música, compomos, produzimos, mixamos e masterizamos. Transforme sua arte em realidade!",
            imgSrc: "/img/digital-mixer-recording-studio-with-computer-recording-music.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Design e UX / UI",
            description: "Procurando uma capa pra seu álbum, ou simplesmente melhores imagens para seu negócio ou site? Você está precisando de um designer ou de um pouco de Inteligência Artificial!",
            imgSrc: "/img/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.webp",
            link: "#orcamentoButton"
        }
    ];

    // Serviços em inglês
    const enServices = [
        {
            name: "Advanced Web Development",
            description: "Create your website with us, exposing your work to more people and achieving greater sales or leads for your business! We work from landing pages to online stores and complex projects.",
            imgSrc: "/img/close-up-image-programer-working-his-desk-office.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Advanced IT Project Management",
            description: "Maximize your business efficiency with our specialized IT project management. We implement agile methodologies to ensure value deliveries within time and budget.",
            imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Social Media Management",
            description: "Boost your brand on social networks! We create personalized strategies that connect your business to the ideal audience, increasing engagement and converting followers into customers.",
            imgSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Music Production",
            description: "Express your feelings with complete music production, we record your music, compose, produce, mix and master. Transform your art into reality!",
            imgSrc: "/img/digital-mixer-recording-studio-with-computer-recording-music.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Design / AI Art",
            description: "Looking for a cover for your album, or simply better images for your business or website? You need a designer or a little Artificial Intelligence!",
            imgSrc: "/img/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.webp",
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
                    <>Transforme sua <span className="purpleColor">presença digital</span> e <span className="purpleColor">alavanque seus resultados</span> com nossas soluções de TI personalizadas</>
                ) : (
                    <>Transform your <span className="purpleColor">digital presence</span> and <span className="purpleColor">boost your results</span> with our customized IT solutions</>
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