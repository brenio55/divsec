// import './mainPages.css';
import { useLanguage } from '../../context/LanguageContext';

function Banner (){
    const { language } = useLanguage();

    return (
        <>
            <section className="bannerPage" id="home">
                <div className="banner" data-aos="fade-up" data-aos-duration="400">
                    <h2 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' ? 'Soluções de TI que transformam negócios' : 'IT solutions that transform businesses'}
                    </h2>
                    <h1 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' ? (
                            <>Tecnologia <mark>estratégica</mark> para empresas de <mark>todos os portes</mark></>
                        ) : (
                            <>Strategic <mark>technology</mark> for businesses of <mark>all sizes</mark></>
                        )}
                    </h1>
                </div>

                <div className='roller' data-aos="fade-up" data-aos-duration="400">
                    <h3 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' 
                            ? 'Maximize seus resultados com soluções digitais personalizadas!' 
                            : 'Maximize your results with customized digital solutions!'}
                    </h3>
                    <a href="#services" data-aos="zoom-in" data-aos-duration="400">
                        <button className='buttonPattern white'>
                            {language === 'pt' ? 'DESCOBRIR' : 'DISCOVER'}
                        </button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Banner