function ServiceComponent(props){

    let name = props.name;
    let imgSrc = props.imgSrc;
    let description = props.description;
    let link = props.link

    console.log(imgSrc)
    return (
        <>
            <img src={imgSrc} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>

            <a href={link}><button>Conhecer mais</button></a>
        </>
    )
}

export default ServiceComponent