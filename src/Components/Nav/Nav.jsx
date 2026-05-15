import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/characters'><li>Todos los personajes</li></Link>        
            <Link to='/filter'><li>Buscar por filtro</li></Link>        
        </ul>
    </nav>
  )
}

export default Nav