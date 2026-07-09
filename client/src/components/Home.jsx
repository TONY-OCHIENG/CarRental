import React from 'react'

function Home() {
  return (
    <div id='home' className='py-16 w-full h-screen  bg-white'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full h-full px-4 flex md:flex-row flex-col justify-between'>
            <div className='mt-40'>
             <h1 className='font-extrabold md:text-5xl text-gray-600 text-4xl'>Find Affordable Dream <br /> Car For Rent</h1>
             <p className='mt-10 text-gray-400'>Fulfill your automotive fantacies without breaking the bank. Check <br />
             our affordable car rentals for an opulent yet economical ride </p>
             <div className='flex md:gap-10 flex-col md:flex-row'>
                <button className='mt-10 px-8 py-2 rounded-full cursor-pointer border bg-red-600 text-white font-extrabold'>Get in Touch</button>
                <button className='mt-10 px-16 py-2 rounded-full cursor-pointer border font-extrabold'>Login</button>
             </div>
             <p className='text-sm text-gray-400 mt-10'>Over 1000+ satisfied clients</p>
            </div>
            <div>
                <img src="/src/assets/hero2.jpg" alt="" />
            </div>
        </div>      
    </div>
  )
}

export default Home