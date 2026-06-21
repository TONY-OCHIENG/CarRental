import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Vehicles() {
    const navigate = useNavigate()
  return (
    <div className='py-20  max-w-7xl md:w-[90%] w-full px-4 mx-auto h-[100vh]'>
        <Link to={'/admin/vehicle/add-vehicle'} className='px-8 py-3 cursor-pointer rounded-md shadow-md bg-red-600 text-white font-bold'>Add Vehicles</Link>

    </div>
  )
}

export default Vehicles