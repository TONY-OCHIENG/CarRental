import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Authentication/Login'
import Home from './pages/Adminpages/Home'
import HomeUser from './pages/userPages/HomeUser'
import Notfound from './Notfound'
import AdminName from './pages/Adminpages/AdminName'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import StaffHome from './pages/Staff/StaffHome'
import UsersHome from './pages/Users/UsersHome'

function App() {
    const [role,setRole] = useState('')
    const [auth,setAuth] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/auth/role')
        .then((response) => {
            if (response.data.status) {
                setRole(response.data.role)
            } else {
                navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])
    console.log(role)
  return (
    <> 
    <Routes>
      <Route path='/login' element={<Login/>}/>
      {role === 'Admin' && <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/name' element={<AdminName/>}/>
      </Route>     
      }
      {role === 'User' && <Route>
          <Route path='/' element={<UsersHome/>}/>
      </Route>     
      }
      {role === 'Staff' && <Route>
          <Route path='/' element={<StaffHome/>}/>
      </Route>     
      }
    </Routes>
    </>
  )
}

export default App