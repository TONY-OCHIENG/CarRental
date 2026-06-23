import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Vehicles() {
    const [vehicle,setVehicles] = useState([])
    const [total,setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 5
    useEffect(() => {
      const fetcVehicles = async () => {
        axios.get(`http://localhost:3000/auth/vehicles?page=${page}&limit=${limit}`)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error))
      }
      fetcVehicles()
    },[page])
    const navigate = useNavigate()
  return (
    <div className='py-20  max-w-7xl md:w-[90%] w-full px-4 mx-auto h-[100vh]'>
        <Link to={'/admin/vehicle/add-vehicle'} className='px-8 py-3 cursor-pointer rounded-md shadow-md bg-red-600 text-white font-bold'>Add Vehicles</Link>
      <div className='mt-10 w-full h-full'></div>
    </div>
  )
}

export default Vehicles