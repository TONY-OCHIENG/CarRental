import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'

function HeroPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
    </div>
  )
}

export default HeroPage