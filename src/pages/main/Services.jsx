import ServiceComponent from "../../mainComponents/main/ServiceComponent"

function Services(){
    return (
        <>
            <h2>Faça sua empresa <mark>dobrar o número de vendas</mark> com seu website, <mark>torne real</mark> seu desejo com um dos nossos serviços</h2>

            <h2>Serviços</h2>
            <div className="serviceGrid">
                <ServiceComponent
                    name="Website Making"
                    description="Faça seu website conosco, expondo o seu trabalho para mais pessoas e alcançando um número maior de vendas ou leads para seu negócio! Trabalhamos desde landing pages a lojas online. Clica pra saber mais!"
                    imgSrc="https://static.wixstatic.com/media/50bf6d_e576cc89d7a24b8b9fd1ffa195a976a7~mv2.jpg/v1/fill/w_451,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-image-programer-working-his-desk-office.jpg"
                    link=""
                />
                
            </div>
            
        </>
    )
}

export default Services