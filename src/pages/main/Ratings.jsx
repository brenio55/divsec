import React from 'react';
import RatingComponent from "../../mainComponents/main/RatingComponent"
import { useLanguage } from '../../context/LanguageContext';

function Ratings(){
    const { t, language } = useLanguage();
    
    // Depoimentos em português
    const ptTestimonials = [
        {
            img: "img/ratings/tenor.webp",
            name: "tenorivanhoe",
            review: "Um autor jovem, energético e talentoso que ouve a opinião do cliente e faz um trabalho interessante."
        },
        {
            img: "img/ratings/cris.webp",
            name: "celleribellator",
            review: "Mais um trabalho brilhante, definitivamente quero trabalhar com ele novamente."
        },
        {
            img: "img/ratings/kelleemorris.webp",
            name: "kelleemorris",
            review: "Brenio foi ótimo na comunicação e deu vida à minha ideia. Ele ouviu os detalhes que eu queria para meu logo e até me deu algumas outras opções com seu próprio toque. Ele deu uma data estimada de entrega e não ultrapassou isso. Brenio é ótimo e faz um trabalho incrível!"
        },
        {
            img: "img/ratings/freedomTrail.webp",
            name: "freedomtrail204",
            review: "Brenio é uma ótima pessoa para trabalhar. Esta é minha segunda compra e ele fez exatamente o que pedi e fez isso no prazo e dentro do orçamento nas duas vezes. Obrigado Brenio, voltarei em breve! Ótimo trabalho."
        }
    ];
    
    // Depoimentos em inglês (originais)
    const enTestimonials = [
        {
            img: "img/ratings/tenor.webp",
            name: "tenorivanhoe",
            review: "One young energetic talented author who listens to the client's opinion and makes interesting music"
        },
        {
            img: "img/ratings/cris.webp",
            name: "celleribellator",
            review: "Another brilliant piece of work, definitely wanna work with him again"
        },
        {
            img: "img/ratings/kelleemorris.webp",
            name: "kelleemorris",
            review: "Brenio was great at communicating and brought my idea to life. He listened to the details I was wanting for my logo and even gave me some other options with his own twist on it. He gave an estimated delivery date, and didn't go over that. Brenio is great and does amazing work!"
        },
        {
            img: "img/ratings/freedomTrail.webp",
            name: "freedomtrail204",
            review: "Brenio is a great person to work with. This is my second purchase and he has done exactly as I have asked of him and he did it on time and on budget both times. Thank you Brenio I will be back soon! Great job"
        }
    ];
    
    // Seleciona os depoimentos com base no idioma atual
    const testimonials = language === 'pt' ? ptTestimonials : enTestimonials;

    return (
        <>
        <section className="ratings" id="testimonials">        
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                {t('testimonialsTitle')}
            </h2>
            
            <div className="flex center" data-aos="fade-up" data-aos-duration="400">
                <h3>
                    {t('testimonialsSubtitle')}
                </h3>
            </div>

            <div className="flex center ratingComponents" data-aos="fade-up" data-aos-duration="400">
                {testimonials.map((testimonial, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}>
                        <RatingComponent 
                            imgService={testimonial.img}
                            customerNameService={testimonial.name}
                            customerReviewService={testimonial.review}
                        />
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Ratings