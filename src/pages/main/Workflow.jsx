import React from 'react';

function Workflow() {
    return (
        <>
        <section className="workFlow">
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                Profissionalidade, entrega rápida e qualidade<span className="purpleColor">:</span> conheça nossa <span className="purpleColor">forma de trabalhar</span>
            </h2>

            <div className="workflow-container">
                <div className="workflow-grid" data-aos="fade-up" data-aos-duration="400">
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>INÍCIO</p></div>
                            <div className="stepDescription"><p>50% DO PAGAMENTO TOTAL &gt; INÍCIO DO PROJETO</p></div>
                        </div>
                    </div>
                    
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>APROVAÇÃO DA DEMO</p></div>
                            <div className="stepDescription"><p>ENTREGA DO PRIMEIRO TRABALHO EM POUCOS DIAS PARA APROVAÇÃO</p></div>
                        </div>
                    </div>
                    
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>SEGUNDA ETAPA</p></div>
                            <div className="stepDescription"><p>COMUNICAÇÃO &gt; INCLUSÃO COMPLETA DE ETAPAS NO ASANA &gt; INÍCIO DO TRABALHO FULL TIME</p></div>
                        </div>
                    </div>
                    
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>APROVAÇÃO DE RESULTADOS</p></div>
                            <div className="stepDescription"><p>APROVAÇÃO DOS RESULTADOS DA SEGUNDA ETAPA PELO CLIENTE</p></div>
                        </div>
                    </div>
                    
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">5</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>FINALIZAÇÃO DO TRABALHO</p></div>
                            <div className="stepDescription"><p>FINALIZAÇÃO DO TRABALHO, CORRIGINDO BUGS E ADICIONANDO INCREMENTOS FINAIS PREVISTOS</p></div>
                        </div>
                    </div>
                    
                    <div className="step-card" data-aos="fade-up" data-aos-duration="400">
                        <div className="step-number">6</div>
                        <div className="step-content">
                            <div className="stepTitle"><p>FINAL</p></div>
                            <div className="stepDescription"><p>50% DO PAGAMENTO FINAL &gt; CLIENTE SATISFEITO</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Workflow