import React from 'react'
import './Home.css'

import mrPoopy from './IMG/mrPoopy.png'

const Home = () => {
  return (

    <div className='Home'>
      <img src={mrPoopy} alt="Mr Poopybutthole" className='floatingCharacter'/>
      <p className='textHome'><strong>Welcome to the Rick and Morty App!</strong></p>
    </div>

  )
}

export default Home
