import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Authentication/Login'
import { useState } from 'react'
import Home from './pages/Adminpages/Home'



function App() {
  
  return (
    <> 
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App