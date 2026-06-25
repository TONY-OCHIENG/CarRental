import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Authentication/Login'
import { useState } from 'react'
import Home from './pages/Adminpages/Home'
import Layout from './pages/Adminpages/Layout'
import Dashboard from './pages/Adminpages/Dashboard'
import AdminName from './pages/Adminpages/AdminName'
import Vehicles from './pages/Adminpages/Vehicles'
import AddVehicles from './pages/Adminpages/AddVehicles'
import EditVehicle from './pages/Adminpages/EditVehicle'
import Bookings from './pages/Adminpages/Bookings'
import Payments from './pages/Adminpages/Payments'
import Report from './pages/Adminpages/Report'
import Message from './pages/Adminpages/Message'
import Feedback from './pages/Adminpages/Feedback'
import Maintenance from './pages/Adminpages/Maintenance'
import Track from './pages/Adminpages/Track'



function App() {
  
  return (
    <> 
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Layout/>}>
          <Route path='' element={<Dashboard/>}/>
          <Route path='/admin/vehicle' element={<Vehicles/>}/>
          <Route path='/admin/vehicle/add-vehicle' element={<AddVehicles/>}/>
          <Route path='/admin/vehicle/:id' element={<EditVehicle/>}/>
          <Route path='/admin/bookings' element={<Bookings/>}/>
          <Route path='/admin/payment' element={<Payments/>}/>
          <Route path='/admin/report' element={<Report/>}/>
          <Route path='/admin/message' element={<Message/>}/>
          <Route path='/admin/feedback' element={<Feedback/>}/>
          <Route path='/admin/maintenance' element={<Maintenance/>}/>
          <Route path='/admin/track' element={<Track/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App