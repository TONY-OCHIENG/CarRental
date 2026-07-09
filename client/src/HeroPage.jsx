import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Cars from './components/Cars'

function HeroPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
      <Cars/>
    </div>
  )
}

export default HeroPage