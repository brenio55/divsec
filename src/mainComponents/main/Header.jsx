// import './mainComponents.css';

import '/img/logoCurta.png'

function Header (){


    return (
        <>
            <header>
                <div className='headerLeft'>
                    <img className="logo" src="/img/logoCurta.png" alt="" srcset="" />
                </div>
                <div className='headerRight'>
                    <div className='round'>
                        <nav>
                            <ul>
                                <li>Quem Somos</li>
                                <a href='#services'><li>Serviços</li></a>
                                <li>FAQ</li>
                            </ul>
                        </nav>
                    </div>
                    <a href='https://wa.me/558431902145' target='_blank'><button className='buttonPattern'>CONTATO</button></a>
                </div>
            </header>
        </>
    )
}

export default Header