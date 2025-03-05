import RatingComponent from "../../mainComponents/main/RatingComponent"

function Ratings(){
    return (
        <>
        <section className="ratings">        
            <h2 
                className="titlesIntro" 
                data-aos="fade-up" 
                data-aos-duration="400"
            >
                Depoimentos de clientes passados
            </h2>
            
            <div className="flex center" data-aos="fade-up" data-aos-duration="400">
                <h3 className="">
                    Prezamos pela <span className="purpleColor">satisfação total</span> do nosso cliente, nos certificamos de fazer a última entrega apenas quando cliente se sentir devidamente satisfeito
                </h3>
            </div>

            <div className="flex center ratingComponents" data-aos="fade-up" data-aos-duration="400">
                <div data-aos="fade-up" data-aos-duration="400">
                    <RatingComponent 
                        imgService="img/ratings/tenor.webp"
                        customerNameService="tenorivanhoe"
                        customerReviewService="One young energetic talented author who listens to the client's opinion and makes interesting music"
                    ></RatingComponent>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="400">
                    <RatingComponent 
                        imgService="img/ratings/cris.webp"
                        customerNameService="celleribellator"
                        customerReviewService="another brilliant peice of work, Definitely wanna work with him again"
                    ></RatingComponent>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="400">
                    <RatingComponent 
                        imgService="img/ratings/kelleemorris.webp"
                        customerNameService="kelleemorris"
                        customerReviewService="Brenio was great at communicating and brought my idea to life. He listened to the details I was wanting for my logo and even gave me some other options with his own twist on it. He gave an estimated delivery date, and didn't go over that. Brenio is great and does amazing work!"
                    ></RatingComponent>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="400">
                    <RatingComponent 
                        imgService="img/ratings/freedomTrail.webp"
                        customerNameService="freedomtrail204"
                        customerReviewService="brenio55 is a great person to work with. this is my second purchase and he has done exactly as i have asked of him and he did it on time and on budget both times. Thank you brenio55 I will be back soon! great job"
                    ></RatingComponent>
                </div>
            </div>
        </section>
        </>
    )
}

export default Ratings