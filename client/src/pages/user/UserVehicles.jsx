import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Pagination from '../../components/Pagination'
import { useNavigate } from 'react-router-dom'
function UserVehicles() {
    const [vehicles, setVehicles] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const limit = 6
    const navigate = useNavigate()
    useEffect(() => {
      const fetcVehicles = () => {
      axios.get(`http://localhost:3000/auth/vehiclesBooking?page=${page}&limit=${limit}`)
      .then((response) => {
        if (response.data.status) {
          setVehicles(response.data.result.result)
          setTotal(response.data.result.total)
        }
      })
      .catch((error) => {console.log(error)})
      }
      fetcVehicles()
    },[page])  
    const handleBooking = (id) => {
      navigate(`/user/rent/${id}`)
    }
  return (
    <div className='py-16 px-4 md:w-[90%] h-screen max-w-7xl mx-auto'>
      <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-2'>
        {
          vehicles.length > 0 ? vehicles.map((item) => (
            <div className='bg-white rounded-md shadow-md p-2 h-[60vh]'>
                <img src={`http://localhost:3000/images/`+ item.vehicleImage}  alt="" className='w-full h-[70%] object-cover'/>
                <h1 className='text-gray-600 font-bold mt-2'>{item.vehicleName}</h1>
                <h3 className='text-gray-400 text-sm'>{item.vehicleCapacity} seats</h3>
                <h3 className='text-gray-400 text-sm'>{item.vehicleType} </h3>
                <h3 className='text-gray-400 text-sm'>{item.vehiclePrice} / day</h3>
                <button onClick={() => handleBooking(item.vehicle_id)} className='py-1 mt-2  rounded-md cursor-pointer w-full font-bold text-white bg-red-600'>Book</button>
            </div>
          )) : <h1 className='font-bold text-gray-800 text-xl text-center'>No available vehicle for booking</h1>
        }
      </div>
        <div className='flex justify-center items-center py-5'>
         <Pagination page = {page} setPage = {setPage} total = {total} limit = {limit}/>
        </div>  
    </div>
  )
}

export default UserVehicles