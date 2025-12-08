import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App