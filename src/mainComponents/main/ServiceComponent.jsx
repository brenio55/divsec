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
                <div className="serviceImageWrapper">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="serviceContent">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </article>

            <a href={link}><button className="buttonPattern brand-gradient">Saiba Mais</button></a>
        </article>
        </>
    )
}

export default ServiceComponent