import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Authentication/Login'
import Home from './pages/Adminpages/Home'
import HomeUser from './pages/userPages/HomeUser'
import Homepage from './components/Homepage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Home/>}/>
      <Route path='/user' element={<HomeUser/>}/>
    </Routes>
    </>
  )
}

export default App