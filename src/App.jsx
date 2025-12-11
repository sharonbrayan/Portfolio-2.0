import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App