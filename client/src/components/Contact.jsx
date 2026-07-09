import React from 'react'

function Contact() {
  return (
    <div id='contact' className='py-16 bg-gray-100 h-[100vh]'>
        <h1 className='md:text-5xl text-3xl text-gray-800 font-extrabold text-center mb-4'>Contact Us</h1>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31912.88996057807!2d35.850748745292115!3d-1.0786990802984637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182c0301de8b0645%3A0x226cac4459fc8e39!2sNarok!5e0!3m2!1sen!2ske!4v1783614814980!5m2!1sen!2ske" 
        
            className='md:w-[500px] md:h-[450px] h-[200px] w-full'
            style={{border:"0"}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div className='bg-white p-4  rounded-md'>
         <form action="" className='w-full h-full'>
          <label htmlFor="firstName" className='text-md text-gray-600'>First name</label>
          <input type="text"  className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='firstName'/>
           <label htmlFor="firstName" className='text-md text-gray-600'>Last name</label>
          <input type="text" className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='lastName'/>
           <label htmlFor="email" className='text-md text-gray-600'>Email</label>
          <input type="email"  className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='email'/>
          <label htmlFor="text" className='text-md text-gray-600'>Message</label>
          <textarea name="text" id="text" className='p-2 text-gray-400 text-md w-full border md:h-[40%] rounded-md'></textarea>
          <button className='w-full p-2 mt-1 bg-red-600 rounded-md font-bold cursor-pointer text-white'>Submit message</button>
        </form>
        </div>
      
        </div>
    </div>
  )
}

export default Contact