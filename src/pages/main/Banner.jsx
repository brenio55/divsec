import './mainPages.css';

function Banner (){

    return (
        <>
            <section className="bannerPage">
                <div className="banner">
                    <h2>Dividir para conquistar</h2>
                    <h1>Crie seu <mark>Website</mark> ou <mark>Projeto artístico</mark> com a gente!</h1>
                </div>

                <div className='roller'>
                    <h3>Seu site, música ou arte digital em nossas mãos, vem saber mais!</h3>
                    <button className='buttonPattern white'>INICIAR</button>
                </div>
            </section>
        </>
    )
}

export default Banner