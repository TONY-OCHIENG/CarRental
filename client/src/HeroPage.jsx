import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Cars from './components/Cars'
import Testimonials from './components/Testimonials'

function HeroPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
      <Cars/>
      <Testimonials/>
    </div>
  )
}

export default HeroPage