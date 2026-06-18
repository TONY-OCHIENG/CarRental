import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const handleValues = (event) => {
    const { name, value} = event.target
    setValues((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  axios.defaults.withCredentials = true
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/loginAdmin',values)
    .then((response) => {
      console.log(response)
      if (!response.data.status) {
        toast.error(response.data.message)

      } else {
        toast.success(response.data.message)
        navigate('/')
      }
    })
    .catch((error) => (console.log(error)))
  }
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
    <div className='bg-gray-100 flex justify-center items-center px-4 h-screen'>
        <div className='p-4 rounded-md bg-white shadow-md w-full md:w-[40%]'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username" className='text-gray-600 text-lg'>Email</label>
                <input type="email" id='username' onChange={handleValues} name='email' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='johndoe@gmail.com' required/>
                <label htmlFor="password" className='text-gray-600 text-lg'>Password</label>
                <input type="password" id='password' onChange={handleValues} name='password' className='border-red-700 p-2 w-full rounded-md mb-2 border' required/>
                <button className='w-full py-2 rounded-md cursor-pointer text-red-700 bg-gray-900 text-lg mt-2 font-bold'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login