import React, { useState } from 'react'

function Register() {
    const [userDetails, setUserDetails] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const handleValue = (event) => {
        const { name, value} = event.target
        setUserDetails((prev) => ({
            ...prev,
            [name] : value
        }))
    }
  return (
    <div className='w-full h-[100vh] bg-gray-100 flex items-center justify-center px-4'>
        <div className='p-4 bg-white rounded-md shadow-md md:w-[40%] w-full'>
             <form action="">
                <label htmlFor="firstname" className='text-gray-600 text-lg'>First name</label>
                <input type="text" id='firstname'  onChange={handleValue} name='firstname' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='' required/>
                <label htmlFor="lastname" className='text-gray-600 text-lg'>Last name</label>
                <input type="text" id='lastname' onChange={handleValue}   name='lastname' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='' required/>
                <label htmlFor="username" className='text-gray-600 text-lg'>Email</label>
                <input type="email" id='username'  onChange={handleValue}  name='email' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='johndoe@gmail.com' required/>
                <label htmlFor="password" className='text-gray-600 text-lg'>Password</label>
                <input type="password" id='password' onChange={handleValue}  name='password' className='border-red-700 p-2 w-full rounded-md mb-2 border' required/>
                <button className='w-full py-2 rounded-md cursor-pointer text-red-700 bg-gray-900 text-lg mt-2 font-bold'>Register</button>
                <p className='text-xs text-gray-600 mt-4'>Already have an Account? Click to login</p>
            </form>
        </div>
    </div>
  )
}

export default Register