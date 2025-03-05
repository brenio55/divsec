// import './mainComponents.css';
import React from 'react';

function ServiceComponent(props){

    let name = props.name;
    let imgSrc = props.imgSrc;
    let description = props.description;
    let link = props.link

    console.log(imgSrc)
    return (
        <>
        <article className="serviceComponentMain"> 
            <article className="serviceComponent">
                <img src={imgSrc} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>

                
            </article>

            <a href={link}><button className="buttonPattern white squareBorder">Conhecer mais</button></a>
        </article>
        </>
    )
}

export default ServiceComponent