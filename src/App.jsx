import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <div className="vh-100"></div>
      <div className="vh-100"></div>
      <div className="vh-100"></div>
    </div>
  )
}

export default App