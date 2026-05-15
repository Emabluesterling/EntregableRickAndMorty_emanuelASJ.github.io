import {useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//Components
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Footer from './Components/Footer/Footer.jsx'



//Pages
import Home from './Pages/Home/Home.jsx'
import Characters from './Pages/Characters/Characters.jsx'
import Error from './Pages/Error/Error.jsx'
import Details from './Pages/Details/Details.jsx'
import FilterCharacters from './Pages/FilterCharacters/FilterCharacters.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Header/>
    <Router>
      <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/characters/:id' element={<Details />} />
            <Route path='/filter' element={<FilterCharacters />} />          
            <Route path='*' element={<Error />} />                      
          </Routes>
    </Router>
    <Footer/>
      
    </div>
    
    </>
  )
}

export default App
