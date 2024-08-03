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
                                <li>Serviços</li>
                                <li>FAQ</li>
                            </ul>
                        </nav>
                    </div>
                    <button className='buttonPattern'>CONTATO</button>
                </div>
            </header>
        </>
    )
}

export default Header