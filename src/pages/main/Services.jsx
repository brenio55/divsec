import ServiceComponent from "../../mainComponents/main/ServiceComponent"
import { useLanguage } from '../../context/LanguageContext';

function Services(){
    const { language } = useLanguage();

    // Serviços em português
    const ptServices = [
        {
            name: "Desenvolvimento Web",
            description: "Amplie seu alcance digital com um site otimizado para conversão! Criamos soluções web personalizadas para aumentar suas vendas e conquistar mais clientes. De landing pages a e-commerces completos, transformamos sua presença online em resultados reais.",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Gestão Avançada em Projetos de TI",
            description: "Maximize a eficiência do seu negócio com nossa gestão especializada de projetos de TI. Implementamos metodologias ágeis para garantir entregas de valor dentro do prazo e orçamento, com foco total em seus objetivos estratégicos.",
            imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Gerenciamento de Social Media",
            description: "Potencialize sua marca nas redes sociais! Criamos estratégias personalizadas que conectam seu negócio ao público ideal, aumentando o engajamento e convertendo seguidores em clientes. Cuidamos de tudo: do planejamento à análise de resultados.",
            imgSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Consultoria em TI",
            description: "Otimize sua infraestrutura tecnológica com nossa consultoria especializada. Analisamos suas necessidades e desenvolvemos estratégias de TI alinhadas ao seu negócio, garantindo maior produtividade e redução de custos operacionais.",
            imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Design / Arte com IA",
            description: "Diferencie sua marca com designs únicos potencializados por IA! Criamos identidades visuais impactantes e materiais gráficos otimizados para seu negócio. Transformamos conceitos em designs que convertem e fortalecem sua presença digital.",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_8b37667fa850456490206f170a907f1f~mv2.png/v1/fill/w_451,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.png",
            link: "#orcamentoButton"
        }
    ];

    // Serviços em inglês
    const enServices = [
        {
            name: "Web Development",
            description: "Expand your digital reach with a conversion-optimized website! We create customized web solutions to increase your sales and win more customers. From landing pages to complete e-commerce sites, we transform your online presence into real results.",
            imgSrc: "https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg",
            link: "#orcamentoButton"
        },
        {
            name: "Advanced IT Project Management",
            description: "Maximize your business efficiency with our specialized IT project management. We implement agile methodologies to ensure value deliveries on time and within budget, with a total focus on your strategic objectives.",
            imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Social Media Management",
            description: "Boost your brand on social networks! We create personalized strategies that connect your business to the ideal audience, increasing engagement and converting followers into customers. We take care of everything: from planning to results analysis.",
            imgSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "IT Consulting",
            description: "Optimize your technological infrastructure with our specialized consulting. We analyze your needs and develop IT strategies aligned with your business, ensuring greater productivity and reduced operational costs.",
            imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            link: "#orcamentoButton"
        },
        {
            name: "Design / AI Art",
            description: "Differentiate your brand with unique AI-powered designs! We create impactful visual identities and optimized graphic materials for your business. We transform concepts into designs that convert and strengthen your digital presence.",
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