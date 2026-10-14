import React from 'react';

function RatingComponent(props){
    let imgService = props.imgService;
    let customerNameService = props.customerNameService;
    let customerReviewService = props.customerReviewService;
    let customerLocation = props.customerLocation;
    let customerFlag = props.customerFlag;
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
                        <h4>{customerNameService}</h4>
                        {customerLocation && (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '-4px', marginBottom: '14px', color: '#444', fontSize: '14px', fontWeight: 600 }}>
                                {customerFlag && (
                                    <img
                                        src={`/img/flags/${customerFlag}.png`}
                                        alt=""
                                        style={{ width: '24px', height: 'auto', borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.15)' }}
                                    />
                                )}
                                <span>{customerLocation}</span>
                            </div>
                        )}
                        <p>"&nbsp;{customerReviewService}&nbsp;"</p>
                    </div>
                </div>
        </article>
        </>
    )
}

export default RatingComponent