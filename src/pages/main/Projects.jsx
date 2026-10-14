import { useLanguage } from '../../context/LanguageContext';
import ProjectShowcase from '../../mainComponents/main/ProjectShowcase';
import { projects } from '../../data/projects';
import '../../css/Projects.css';

function Projects() {
    const { language } = useLanguage();

    return (
        <section className="projects" id="projects">
            <h2 className="titlesIntro" data-aos="fade-up" data-aos-duration="400">
                {language === 'pt' ? (
                    <>Veja como já <span className="purpleColor">transformamos ideias</span> em <span className="purpleColor">resultados</span></>
                ) : (
                    <>See how we have already turned <span className="purpleColor">ideas</span> into <span className="purpleColor">results</span></>
                )}
            </h2>

            <h2 className="servicesTitle" data-aos="fade-up" data-aos-duration="400">
                {language === 'pt' ? 'Projetos' : 'Projects'}
            </h2>

            <div className="projectsList">
                {projects.map((project, index) => (
                    <ProjectShowcase key={project.slug} project={project} index={index} />
                ))}
            </div>

            <div className="projectsCta" data-aos="fade-up" data-aos-duration="400">
                <h3>
                    {language === 'pt' ? (
                        <>O próximo pode ser <span className="purpleColor">o seu</span></>
                    ) : (
                        <>The next one could be <span className="purpleColor">yours</span></>
                    )}
                </h3>
                <p className="projectsCtaLead">
                    {language === 'pt'
                        ? 'Vamos conversar e tirar esta ideia do papel?'
                        : "Let's talk and bring your idea to life?"}
                </p>
                <p>
                    {language === 'pt'
                        ? 'Time altamente especializado, com anos de experiência no setor de tecnologia para te ajudar.'
                        : 'A highly specialized team with years of experience in the technology industry, ready to help you.'}
                </p>
                <a href="https://wa.me/558431902145" target="_blank" rel="noopener noreferrer">
                    <button className="buttonPattern brand-gradient">
                        {language === 'pt' ? 'Solicitar orçamento' : 'Request a quote'}
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Projects;
