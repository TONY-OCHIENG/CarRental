import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination'

function Vehicles() {
    const [vehicle,setVehicles] = useState([])
    const [total,setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 3
    useEffect(() => {
      const fetcVehicles = async () => {
        axios.get(`http://localhost:3000/auth/vehicles?page=${page}&limit=${limit}`)
        .then((response) => {
          if (response.data.status) {
            setVehicles(response.data.result.result)
            setTotal(response.data.result.total)
          }
        })
        .catch((error) => console.log(error))
      }
      fetcVehicles()
    },[page])
    const navigate = useNavigate()
    const handleNavigate = (id) => {
      navigate(`/admin/vehicle/${id}`)
    }
  return (
    <div className='py-20  max-w-7xl md:w-[90%] w-full px-4 mx-auto h-[100vh]'>
        <Link to={'/admin/vehicle/add-vehicle'} className='px-8 py-3 cursor-pointer rounded-md shadow-md bg-red-600 text-white font-bold'>Add Vehicles</Link>
      <div className='mt-10 w-full h-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          {
            vehicle.map((item) => (
              <div className='p-2 bg-white rounded-md shadow-md h-[60vh]'>
                <img src={`http://localhost:3000/images/`+ item.vehicleImage}  alt="" className='w-full h-[70%] object-cover'/>
                <h1 className='text-gray-600 font-bold mt-2'>{item.vehicleName}</h1>
                <h3 className='text-gray-400 text-sm'>{item.vehicleCapacity} seats</h3>
                <h3 className='text-gray-400 text-sm'>{item.vehicleType} </h3>
                <h3 className='text-gray-400 text-sm'>{item.vehiclePrice} / day</h3>
                <button onClick={() => handleNavigate(item.vehicle_id)} className='w-full rounded-md text-white py-1 mt-1 bg-red-600 cursor-pointer'>Edit</button>
              </div>
            ))
          }
        </div>
         <div className='flex justify-center items-center mt-13'>
         <Pagination page = {page} setPage = {setPage} total = {total} limit = {limit}/>
        </div>  
      </div>
    </div>
  )
}

export default Vehicles