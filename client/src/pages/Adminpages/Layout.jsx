import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  const navigate = useNavigate()
  const [auth,setAuth] = useState(false)
  axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:3000/auth/role')
        .then((response) => {
          console.log(response)
            if (response.data.status) {
                setAuth(true)
                navigate('/admin')   
            } else {
                setAuth(false)
                navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])
    
   

    let navigateLogin = () => {
      navigate('/login')
    }
  return (
    <div>
      {
        auth  && <div>
              <h1>Layout</h1>
              <Outlet/>
        </div> 
      }
    </div>
  )
}

export default Layout