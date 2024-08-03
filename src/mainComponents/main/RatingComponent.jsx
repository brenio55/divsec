function RatingComponent(props){
    let imgService = props.imgService;
    let customerNameService = props.customerNameService;
    let customerReviewService = props.customerReviewService;

    return (
        <>
        <article className="ratingComponent">
                <div className="flex spaceBetween">
                    <img src={imgService} alt="" srcset="" />
                    <div className="customerRatingContent">
                        <h4>{customerNameService}</h4>
                        <p>“&nbsp;{customerReviewService}&nbsp;”</p>
                    </div>
                </div>
        </article>
        </>
    )

}

export default RatingComponent