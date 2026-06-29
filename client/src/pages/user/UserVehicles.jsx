import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function UserVehicles() {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/auth/vehiclesBooking')
      .then((response) => {
        if (response.data.status) {
          setVehicles(response.data.result)
        }
      })
      .catch((error) => {console.log(error)})
    },[])  
    
  return (
    <div className='py-16 px-4 md:w-[90%] h-[100vh] max-w-7xl mx-auto'>
      <div className='w-full h-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-2'>
        {
          vehicles.length > 0 ? vehicles.map((item) => (
            <div className='bg-white rounded-md shadow-md p-2 h-[60vh]'>
                <img src={`http://localhost:3000/images/`+ item.vehicleImage}  alt="" className='w-full h-[70%] object-cover'/>
                <h1 className='text-gray-600 font-bold mt-2'>{item.vehicleName}</h1>
                <h3 className='text-gray-400 text-sm'>{item.vehicleCapacity} seats</h3>
                <h3 className='text-gray-400 text-sm'>{item.vehicleType} </h3>
                <h3 className='text-gray-400 text-sm'>{item.vehiclePrice} / day</h3>
                <button className='py-1 mt-2  rounded-md cursor-pointer w-full font-bold text-white bg-red-600'>Book</button>
            </div>
          )) : <h1>No available vehicle for booking</h1>
        }
      </div>
    </div>
  )
}

export default UserVehicles