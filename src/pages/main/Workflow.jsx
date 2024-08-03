function Workflow(){

    return (
        <>
        <section className="workFlow">
            <h2 className="titlesIntro">Profissionalidade, entrega rápida e qualidade<span className="purpleColor">:</span> conheça nossa <span className="purpleColor">forma de trabalhar</span></h2>

            <div className="scrollBar">
                <article className="step">
                    <div className="stepTitle"><p>1. INÍCIO</p></div>
                    <div className="stepDescription">50% DO PAGAMENTO TOTAL &gt; INÍCIO DO PROJETO</div>
                </article>
                <article className="step">
                    <div className="stepTitle"><p>2. APROVAÇÃO DA DEMO</p></div>
                    <div className="stepDescription">ENTREGA DO PRIMEIRO TRABALHO EM POUCOS DIAS PARA APROVAÇÃO</div>
                </article>
                <article className="step">
                    <div className="stepTitle"><p>3. SEGUNDA ETAPA DO TRABALHO</p></div>
                    <div className="stepDescription">COMUNICAÇÃO &gt; INCLUSÃO COMPLETA DE ETAPAS NO ASANA &gt; INÍCIO DO TRABALHO FULL TIME</div>
                </article>
            </div>

            <div className="scrollBar">
            <article className="step">
                <div className="stepTitle"><p>4. APROVAÇÃO DE RESULTADOS DA SEGUNDA ETAPA</p></div>
                <div className="stepDescription">APROVAÇÃO DOS RESULTADOS DA SEGUNDA ETAPA PELO CLIENTE</div>
            </article>
            <article className="step">
                <div className="stepTitle"><p>5. FINALIZAÇÃO DO TRABALHO  FEATURES E INCREMENTOS</p></div>
                <div className="stepDescription">FINALIZAÇÃO DO TRABALHO, CORRIGINDO BUGS E ADICIONANDO INCREMENTOS FINAIS PREVISTOS</div>
            </article>
            <article className="step">
                <div className="stepTitle"><p>6. FINAL</p></div>
                <div className="stepDescription">50% DO PAGAMENTO FINAL &gt; CLIENTE SATISFEITO</div>
            </article>
            </div>
        </section>
        </>
    )
}

export default Workflow