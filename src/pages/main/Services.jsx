import ServiceComponent from "../../mainComponents/main/ServiceComponent"

function Services(){
    return (
        <>
        <section className="services">
            <h2 className="titlesIntro">Faça sua empresa <span className="purpleColor">dobrar o número de vendas</span> com seu website, <span className="purpleColor">torne real</span> seu desejo com um dos nossos <span className="purpleColor">serviços</span></h2>

            <h2 className="servicesTitle">Serviços</h2>
            <section className="serviceGrid">
                <ServiceComponent
                    name="Website Making"
                    description="Faça seu website conosco, expondo o seu trabalho para mais pessoas e alcançando um número maior de vendas ou leads para seu negócio! Trabalhamos desde landing pages a lojas online. Clica pra saber mais!"
                    imgSrc="https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg"
                    link=""
                />
                <ServiceComponent
                    name="Produção Musical"
                    description="Exponha seus sentimentos com uma produção musical completa, gravamos sua música, compomos, produzimos, mixamos e masterizamos. Clica pra saber mais!"
                    imgSrc="https://static.wixstatic.com/media/50bf6d_f3509a0946fd4d608cb0762c79e89465~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/digital-mixer-recording-studio-with-computer-recording-music.jpg"
                    link=""
                />
                <ServiceComponent
                    name="Design Making / AI Art"
                    description="Procurando uma capa pra seu álbum, ou simplesmente melhores imagens para seu negócio ou site? Você está precisando de um designer ou de um pouco de Inteligência Artificial! Clica pra saber mais!"
                    imgSrc="https://static.wixstatic.com/media/50bf6d_8b37667fa850456490206f170a907f1f~mv2.png/v1/fill/w_451,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brenio55_something_that_represents_a_gamma_of_colors_digital_ar_ca81437d-4187-474a-855f-d6.png"
                    link=""
                />  
            </section>
            
        </section>
        </>
    )
}

export default Services