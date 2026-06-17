import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
   axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/auth/role')
        .then((response) => {
            if (response.data.status) {
              navigate('/')                
            } else {
                navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])
  return (
    <div>Admin Home</div>
  )
}

export default Home