import { useState } from 'react'

function Header() {

  return (
    <>
        <header className='flex spaceEvenly'>
            <div className="logo">
                <img src="img/divsecLogo.png" alt="logo da divsec" />
            </div>
            <div className="menu">
                <ul>
                    <li>Por quê DiVSeC?</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header
