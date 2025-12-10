import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App