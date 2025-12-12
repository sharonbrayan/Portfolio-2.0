import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { FaAngleUp } from 'react-icons/fa'
const App = () => {
  return (
    <div>
      <div className="round position-fixed bottom-0 end-0 me-5 go-to-top pointer">
        <a href="#home"><FaAngleUp size={40} className='text-white'/></a>
      </div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App