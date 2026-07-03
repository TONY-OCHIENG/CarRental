import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function UserFeedback() {
  const [feedback, setFeedback] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: ''
  })

  const handleInput = (event) => {
    const {name, value} = event.target
    setFeedback((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/feedback')
    .then((response) => {
      if (response.data.status) {
        toast.success(response.data.message)
      } else {
        toast.error("An error occured")
      }
    })
    .catch((error) => { console.log(error)})
  }
  return (
    <div className='py-16 md:px-10 px-4 flex justify-center items-center'>
      <div className='mt-10 md:w-[50%] rounded-md w-full h-[75vh] p-4 bg-white max-md:overflow-x-auto'>
        <form action="" className='w-full h-full' onSubmit={handleSubmit}>
          <label htmlFor="firstName" className='text-md text-gray-600'>First name</label>
          <input type="text" onChange={handleInput} className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='firstName'/>
           <label htmlFor="firstName" className='text-md text-gray-600'>Last name</label>
          <input type="text" onChange={handleInput} className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='lastName'/>
           <label htmlFor="email" className='text-md text-gray-600'>Email</label>
          <input type="email" onChange={handleInput} className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='email'/>
          <label htmlFor="text" className='text-md text-gray-600'>Message</label>
          <textarea name="text" onChange={handleInput} id="text" className='p-2 text-gray-400 text-md w-full border h-[50%] rounded-md'></textarea>
          <button className='w-full p-2 mt-1 bg-red-600 rounded-md font-bold cursor-pointer text-white'>Submit message</button>
        </form>
      </div>
    </div>
  )
}

export default UserFeedback