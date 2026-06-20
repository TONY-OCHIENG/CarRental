import { BadgeDollarSign, Bolt, CarFront, CarIcon, ClockAlert, DollarSign, RotateCcw } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='h-full w-full py-20 '>
      <div className='max-w-7xl md:max-w-[90%] px-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'>Available Vehicles</h1>
          <div className='flex items-center ml-5'>
            <CarFront className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>23 units</h1>
          </div>
         </div>
          <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'>Rented Vehicles</h1>
           <div className='flex items-center ml-5'>
            <DollarSign className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>2 units</h1>
          </div>
         </div>
          <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'>Returned Vehicles</h1>
           <div className='flex items-center ml-5'>
            <RotateCcw className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>3 units</h1>
          </div>
         </div>
          <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'>Overdue Vehicles</h1>
          <div className='flex items-center ml-5'>
            <ClockAlert className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>1 units</h1>
          </div>
         </div>
          <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'> Maintenance</h1>
           <div className='flex items-center ml-5'>
            <Bolt className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>2 units</h1>
          </div>
         </div>
          <div className='rounded-md p-4 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300
         bg-white w-[330px]'>
          <h1 className='text-center font-extrabold'>Total Earnings</h1>
           <div className='flex items-center ml-5'>
            <BadgeDollarSign className='h-8 w-8 text-red-600'/>
            <h1 className='text-md ml-5 text-gray-600'>$ 300</h1>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Dashboard