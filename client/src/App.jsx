import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Authentication/Login'
import { useState } from 'react'
import Home from './pages/Adminpages/Home'
import Layout from './pages/Adminpages/Layout'
import Dashboard from './pages/Adminpages/Dashboard'
import AdminName from './pages/Adminpages/AdminName'



function App() {
  
  return (
    <> 
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Layout/>}>
          <Route path='' element={<Dashboard/>}/>
          <Route path='/admin/vehicle' element={<AdminName/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App