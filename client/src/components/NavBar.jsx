import React from 'react'

function NavBar() {
  return (
    <div className='h-[10vh] w-full fixed shadow-md bg-gray-100 flex justify-center items-center'>
        <div className='max-w-7xl md:w-[80%] w-full px-2 flex justify-between items-center'>
            <h1 className='text-2xl font-extrabold'>ROUTE<span className='text-red-600'>CAB</span></h1>
           <div>
            <ul className='hidden md:flex gap-10 text-md'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Cars</li>
                <li>Testimonial</li>
                <li>Contact us</li>
             </ul>
           </div>
           <button className='px-8 py-2 bg-red-600 text-white rounded-md font-bold cursor-pointer'>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar