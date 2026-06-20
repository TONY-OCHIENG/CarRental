import { BadgeDollarSign, Bolt, CarFront, CarIcon, ClockAlert, Delete, DollarSign, RotateCcw } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  const [value, setValue] = useState({
    name:''
  })
  const [reminder,SetReminder] = useState([])
  const handleValue = (event) => {
    const { name, value} = event.target
    setValue((prev) => ({
      ...prev,
      [name]: value
    }))
    
  }
  let reminderValues = JSON.parse(localStorage.getItem('reminder')) || []
  const handleSubmit = (event) => {
    const { name } = value
    event.preventDefault()
    window.location.reload()
    reminderValues.push({id: Math.floor(Math.random() * 10000) + 1, value:name})
    localStorage.setItem('reminder',JSON.stringify(reminderValues))
    setValue({name:''})    
  }
  useEffect(() => {
    SetReminder(reminderValues)
  },[])
  const handleDelete = (id) => {
    reminderValues = reminderValues.filter((item) => item.id !== id)
    localStorage.setItem('reminder',JSON.stringify(reminderValues))
    window.location.reload()
  }
  return (
    <div className='h-full w-full py-20 '>
      <div className='max-w-7xl md:max-w-[90%] px-2 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
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
         <div className='mt-10 grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
          <div className='flex flex-col'>
            <h1 className='text-gray-900 font-bold'>Rent Status</h1>
            <div className='p-4 h-[350px] md:w-[500px] w-full bg-white rounded-md shadow-md'></div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-gray-900 font-bold'>Reminders</h1>
            <div className='h-[350px] md:w-[540px] w-full bg-white rounded-md shadow-md p-4'>
              <form action="" onSubmit={handleSubmit} className='flex gap-2'>
                <input type="text" onChange={handleValue} required className='p-2 border md:w-[80%] rounded-md' name='name' placeholder='Enter reminder...'/>
                <button className='py-2 px-4 text-white rounded-md bg-red-600'>Add</button>
              </form>
              <div className='md:w-[94%] w-full p-4 rounded-md overflow-y-auto border h-[250px] mt-4'>
                {reminder.map((item,index) => (
                  <ul>
                    <li className='p-2 flex items-center justify-between text-sm bg-red-50 rounded-1 text-gray-600 mb-2'>{item.value} <Delete className='text-red-600 cursor-pointer' onClick={() => handleDelete(item.id)}/></li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Dashboard