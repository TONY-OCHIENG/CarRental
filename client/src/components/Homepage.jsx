import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/Adminpages/Home'

function Homepage() {
    const [role,setRole] = useState('')
    const [auth,setAuth] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/auth')
        .then((response) => {
            if (response.data.status) {
                setRole(response.data.role)
            } else {
                navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])
  return (
    <>{
        role === 'Admin' && <Home/>
    }</>
  )
}

export default Homepage