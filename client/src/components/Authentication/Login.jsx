import React from 'react'

function Login() {
  return (
    <div className='bg-gray-100 flex justify-center items-center px-4 h-screen'>
        <div className='p-4 rounded-md bg-white shadow-md w-full md:w-[40%]'>
            <form action="">
                <label htmlFor="username" className='text-gray-600 text-lg'>Email</label>
                <input type="email" id='username' name='email' className='border-red-700 p-2 w-full rounded-md mb-2 border' placeholder='johndoe@gmail.com' required/>
                <label htmlFor="password" className='text-gray-600 text-lg'>Password</label>
                <input type="password" id='password' name='password' className='border-red-700 p-2 w-full rounded-md mb-2 border' required/>
                <button className='w-full py-2 rounded-md cursor-pointer text-red-700 bg-gray-900 text-lg mt-2 font-bold'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login