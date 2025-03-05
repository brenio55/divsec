// import './mainPages.css';

function Banner (){

    return (
        <>
            <section className="bannerPage">
                <div className="banner" data-aos="fade-up" data-aos-duration="400">
                    <h2 data-aos="fade-up" data-aos-duration="400">Dividir em Seções para conquistar</h2>
                    <h1 data-aos="fade-up" data-aos-duration="400">Crie seu <mark>Website</mark> ou <mark>Projeto artístico</mark> com a gente!</h1>
                </div>

                <div className='roller' data-aos="fade-up" data-aos-duration="400">
                    <h3 data-aos="fade-up" data-aos-duration="400">Seu site, música ou arte digital em nossas mãos, vem saber mais!</h3>
                    <a href="#services" data-aos="zoom-in" data-aos-duration="400"><button className='buttonPattern white'>INICIAR</button></a>
                </div>
            </section>
        </>
    )
}

export default Banner