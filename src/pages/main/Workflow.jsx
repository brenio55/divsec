import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Workflow() {
    const { language } = useLanguage();

    // Etapas do workflow em português
    const ptSteps = [
        {
            number: 1,
            title: "INÍCIO",
            description: "50% DO PAGAMENTO TOTAL > INÍCIO DO PROJETO"
        },
        {
            number: 2,
            title: "APROVAÇÃO DA DEMO",
            description: "ENTREGA DO PRIMEIRO TRABALHO EM POUCOS DIAS PARA APROVAÇÃO"
        },
        {
            number: 3,
            title: "SEGUNDA ETAPA",
            description: "COMUNICAÇÃO > INCLUSÃO COMPLETA DE ETAPAS NO ASANA > INÍCIO DO TRABALHO FULL TIME"
        },
        {
            number: 4,
            title: "APROVAÇÃO DE RESULTADOS",
            description: "APROVAÇÃO DOS RESULTADOS DA SEGUNDA ETAPA PELO CLIENTE"
        },
        {
            number: 5,
            title: "FINALIZAÇÃO DO TRABALHO",
            description: "FINALIZAÇÃO DO TRABALHO, CORRIGINDO BUGS E ADICIONANDO INCREMENTOS FINAIS PREVISTOS"
        },
        {
            number: 6,
            title: "FINAL",
            description: "50% DO PAGAMENTO FINAL > CLIENTE SATISFEITO"
        }
    ];

    // Etapas do workflow em inglês
    const enSteps = [
        {
            number: 1,
            title: "START",
            description: "50% OF TOTAL PAYMENT > PROJECT START"
        },
        {
            number: 2,
            title: "DEMO APPROVAL",
            description: "DELIVERY OF THE FIRST WORK IN A FEW DAYS FOR APPROVAL"
        },
        {
            number: 3,
            title: "SECOND STAGE",
            description: "COMMUNICATION > COMPLETE INCLUSION OF STEPS IN ASANA > START OF FULL TIME WORK"
        },
        {
            number: 4,
            title: "RESULTS APPROVAL",
            description: "APPROVAL OF SECOND STAGE RESULTS BY THE CLIENT"
        },
        {
            number: 5,
            title: "WORK COMPLETION",
            description: "COMPLETION OF WORK, FIXING BUGS AND ADDING FINAL PLANNED INCREMENTS"
        },
        {
            number: 6,
            title: "FINAL",
            description: "50% FINAL PAYMENT > SATISFIED CLIENT"
        }
    ];

    // Seleciona as etapas com base no idioma atual
    const steps = language === 'pt' ? ptSteps : enSteps;

    return (
        <>
        <section className="workFlow" id="workflow">
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                {language === 'pt' ? (
                    <>Profissionalidade, entrega rápida e qualidade<span className="purpleColor">:</span> conheça nossa <span className="purpleColor">forma de trabalhar</span></>
                ) : (
                    <>Professionalism, quick delivery and quality<span className="purpleColor">:</span> know our <span className="purpleColor">way of working</span></>
                )}
            </h2>

            <div className="workflow-container">
                <div className="workflow-grid" data-aos="fade-up" data-aos-duration="400">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="stepTitle"><p>{step.title}</p></div>
                                <div className="stepDescription"><p>{step.description}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Workflow