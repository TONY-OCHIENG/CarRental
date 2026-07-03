import React, { useState } from 'react'

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
  return (
    <div className='py-16 md:px-10 px-4 flex justify-center items-center'>
      <div className='mt-10 md:w-[50%] rounded-md w-full h-[75vh] p-4 bg-white max-md:overflow-x-auto'>
        <form action="" className='w-full h-full'>
          <label htmlFor="firstName" className='text-md text-gray-600'>First name</label>
          <input type="text" className='border w-full p-1 rounded-md mb-1' name='firstName'/>
           <label htmlFor="firstName" className='text-md text-gray-600'>Last name</label>
          <input type="text" className='border w-full p-1 rounded-md mb-1' name='lastName'/>
           <label htmlFor="email" className='text-md text-gray-600'>Email</label>
          <input type="email" className='border w-full p-1 rounded-md mb-1' name='email'/>
          <label htmlFor="text" className='text-md text-gray-600'>Message</label>
          <textarea name="text" id="text" className='w-full border h-[50%] rounded-md'></textarea>
          <button className='w-full p-2 mt-1 bg-red-600 rounded-md font-bold cursor-pointer text-white'>Submit message</button>
        </form>
      </div>
    </div>
  )
}

export default UserFeedback