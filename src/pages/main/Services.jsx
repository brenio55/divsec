import ServiceComponent from "../../mainComponents/main/ServiceComponent"
import { useLanguage } from '../../context/LanguageContext';

function Services(){
    const { language } = useLanguage();

    // Serviços em português
    const ptServices = [
        {
            name: "Desenvolvimento de Software e Integrações",
            description: "Criamos aplicativos sob medida, sistemas web e integrações complexas. De landing pages a plataformas robustas, transformamos sua ideia em realidade tecnológica.",
            imgSrc: "/img/close-up-image-programer-working-his-desk-office.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Gestão de TI Avançada",
            description: "Gestão completa de servidores, suporte técnico com helpdesk (gestão de chamados) e manutenção contínua de sites e sistemas. Focamos na sua infraestrutura ou projeto, para você focar diretamente no seu negócio.",
            imgSrc: "https://images.unsplash.com/photo-1590402494756-10c265b9d736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#orcamentoButton"
        },
        {
            name: "Design de Interface e Experiência (UI/UX)",
            description: "Criamos interfaces modernas e intuitivas para sites e aplicativos. Unimos estética e funcionalidade para maximizar a conversão e o engajamento do seu público.",
            imgSrc: "/img/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.webp",
            link: "#orcamentoButton"
        },
        // {
        //     name: "Gerenciamento de Social Media",
        //     description: "Potencialize sua marca nas redes sociais! Criamos estratégias personalizadas que conectam seu negócio ao público ideal, aumentando o engajamento e convertendo seguidores em clientes.",
        //     imgSrc: "https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     link: "#orcamentoButton"
        // },
        // {
        //     name: "Consultoria em Produção Musical",
        //     description: "Exponha seus sentimentos com uma produção musical completa, gravamos sua música, compomos, produzimos, mixamos e masterizamos. Transforme sua arte em realidade!",
        //     imgSrc: "/img/digital-mixer-recording-studio-with-computer-recording-music.webp",
        //     link: "#orcamentoButton"
        // }
       
    ];

    // Serviços em inglês
    const enServices = [
        {
            name: "Software Development & Integrations",
            description: "We build custom apps, web systems, and complex integrations. From landing pages to robust platforms, we turn your ideas into technological reality.",
            imgSrc: "/img/close-up-image-programer-working-his-desk-office.webp",
            link: "#orcamentoButton"
        },
        {
            name: "Advanced IT Management",
            description: "Complete server management, technical support with helpdesk (ticketing system), and continuous maintenance for websites and systems. We focus on your infrastructure or project so you can focus directly on your business.",
            imgSrc: "https://images.unsplash.com/photo-1590402494756-10c265b9d736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#orcamentoButton"
        },
        {
            name: "User Interface & Experience Design (UI/UX)",
            description: "We create modern, intuitive, and user-centric interfaces for websites and applications. We combine aesthetics with functionality to maximize conversions and audience engagement.",
            imgSrc: "/img/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.webp",
            link: "#orcamentoButton"
        },
        // {
        //     name: "Social Media Management",
        //     description: "Boost your brand on social networks! We create personalized strategies that connect your business to the ideal audience, increasing engagement and converting followers into customers.",
        //     imgSrc: "https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     link: "#orcamentoButton"
        // },
        // {
        //     name: "Music Production",
        //     description: "Express your feelings with complete music production, we record your music, compose, produce, mix and master. Transform your art into reality!",
        //     imgSrc: "/img/digital-mixer-recording-studio-with-computer-recording-music.webp",
        //     link: "#orcamentoButton"
        // }
       
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