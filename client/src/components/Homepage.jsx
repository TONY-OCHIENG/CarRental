import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Homepage() {
    const [role,setRole] = useState('')
    const [auth,setAuth] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/auth')
        .then((response) => {
            console.log(!response)
            if (response) {
                setRole(response.data.role)
                setAuth(true)   
            } else {
                navigate('/login')
                setAuth(false)
            }
        })
        .catch((error) => console.log(error))
    },[])
    useEffect(() => {
        handleNavigation(auth)
    },[auth])
    const handleNavigation = (auth) => {
        if (auth) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }
  return (
    <></>
  )
}

export default Homepage