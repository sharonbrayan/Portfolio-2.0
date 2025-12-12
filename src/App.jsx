import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
  )
}

export default App