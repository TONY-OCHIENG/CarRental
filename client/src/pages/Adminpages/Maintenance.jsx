import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Maintenance() {
    const [vehicle, setVehicles] = useState([])
    useEffect(() => {
        const fetcVehicles = () => {
            axios.get('http://localhost:3000/auth/repair')
            .then((result) => {
                if (result.data.status){
                    setVehicles(result.data.result)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
        fetcVehicles()
    },[])
    const handleRepair = (id) => {
        axios.put(`http://localhost:3000/auth/repair/${id}`)
        .then((response) => {
            if (response.data.status){
                toast.success(response.data.message)
            }
        })
        .catch((error) => (console.log(error)))
    }
    console.log(vehicle)
  return (
    <div className='py-16 max-w-7xl md:w-[90%] mx-auto px-4 h-100vh'>
        <div className='w-full h-full'>
            <h1 className='mb-4 font-bold text-lg text-gray-600 mt-4'>Vehicles under maintenance</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            {
                vehicle.map((item) => (
                <div className='relative p-2 bg-white rounded-md shadow-md h-[60vh]'>
                    <img src={`http://localhost:3000/images/`+ item.vehicleImage}  alt="" className='w-full h-[70%] object-cover'/>
                    <h1 className='text-gray-600 font-bold mt-2'>{item.vehicleName}</h1>
                    <h3 className='text-gray-400 text-sm'>{item.vehicleCapacity} seats</h3>
                    <h3 className='text-gray-400 text-sm'>{item.vehicleType} </h3>
                    <h3 className='text-gray-400 text-sm'>{item.vehiclePrice} / day</h3>
                    <button onClick={() => handleRepair(item.vehicle_id)} className='w-full rounded-md text-white py-1 mt-1 bg-red-600 cursor-pointer font-bold'>Repaired</button>
                </div>
            ))
          }
            </div>
        </div>
    </div>
  )
}

export default Maintenance