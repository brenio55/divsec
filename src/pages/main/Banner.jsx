// import './mainPages.css';
import { useLanguage } from '../../context/LanguageContext';

function Banner (){
    const { t, language } = useLanguage();

    return (
        <>
            <section className="bannerPage" id="home">
                <div className="banner" data-aos="fade-up" data-aos-duration="400">
                    <h2 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' ? 'Dividir em Seções para conquistar' : 'Divide into Sections to conquer'}
                    </h2>
                    <h1 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' ? (
                            <>Crie seu <mark>Website</mark> ou <mark>Projeto artístico</mark> com a gente!</>
                        ) : (
                            <>Create your <mark>Website</mark> or <mark>Artistic Project</mark> with us!</>
                        )}
                    </h1>
                </div>

                <div className='roller' data-aos="fade-up" data-aos-duration="400">
                    <h3 data-aos="fade-up" data-aos-duration="400">
                        {language === 'pt' 
                            ? 'Seu site, música ou arte digital em nossas mãos, vem saber mais!' 
                            : 'Your website, music or digital art in our hands, come learn more!'}
                    </h3>
                    <a href="#services" data-aos="zoom-in" data-aos-duration="400">
                        <button className='buttonPattern white'>
                            {language === 'pt' ? 'INICIAR' : 'START'}
                        </button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Banner