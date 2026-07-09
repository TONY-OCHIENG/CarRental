import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Cars from './components/Cars'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HeroPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
      <Cars/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HeroPage