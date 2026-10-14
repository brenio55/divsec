import React from 'react';

function RatingComponent(props){
    let imgService = props.imgService;
    let customerNameService = props.customerNameService;
    let customerReviewService = props.customerReviewService;
    let customerLocation = props.customerLocation;
    let imgContain = props.imgContain;

    return (
        <>
        <article className="ratingComponent">
                <div className="flex spaceBetween">
                    <img
                        src={imgService}
                        alt={customerNameService}
                        style={imgContain ? { objectFit: 'contain', backgroundColor: '#fff', padding: '22px', boxSizing: 'border-box' } : undefined}
                    />
                    <div className="customerRatingContent">
                        <h4>{customerLocation ? `${customerNameService}, ${customerLocation}` : customerNameService}</h4>
                        <p>"&nbsp;{customerReviewService}&nbsp;"</p>
                    </div>
                </div>
        </article>
        </>
    )
}

export default RatingComponent