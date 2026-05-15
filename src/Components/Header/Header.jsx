import React from 'react'
import './Header.css'
import textHeader from './IMG/textHeader.png'

const Header = () => {
  return (
    <header>
      <img id='logo' src={textHeader} alt="Loguito" />
      <div className='textito'>
        <h1>FAN PAGE DE RICK AND MORTY</h1>
        <h3>La mejor página para Fans de la serie</h3>
      </div>

    </header>
  )
}

export default Header
