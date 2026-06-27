import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function UserLogin() {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const handleValueChange = (event) => {
        const { name, value } = event.target
        setUserDetails((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/loginUser',userDetails)
        .then((response) => {
            if (response.data.status){
                toast.success(response.data.message)
                navigate('/user')
            } else {
                toast.error(response.data.message)
            }
        })
        .catch((error) => console.log(error))
    }
  return (
      <div className='bg-gray-100 flex justify-center items-center px-4 h-screen'>
        <div className='p-4 rounded-md bg-white shadow-md w-full md:w-[40%]'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username" className='text-gray-600 text-lg'>Email</label>
                <input type="email" id='username' onChange={handleValueChange} name='email' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='johndoe@gmail.com' required/>
                <label htmlFor="password" className='text-gray-600 text-lg'>Password</label>
                <input type="password" id='password' onChange={handleValueChange} name='password' className='border-red-700 p-2 w-full rounded-md mb-2 border' required/>
                <button className='w-full py-2 rounded-md cursor-pointer text-red-700 bg-gray-900 text-lg mt-2 font-bold'>Login</button>
                <p className='text-gray-600 mt-4 text-xs'>Don't have an Account? <Link to={'/user/register'} className='font-bold'>Click to register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default UserLogin