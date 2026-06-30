import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookingPage() {
    const [vehicle, setVehicle] = useState([])
    const [days, setDays] = useState({
        days:1
    })
    const { id } = useParams()
    useEffect(() => {
        const fetchSingleVehicle = () => {
            axios.get(`http://localhost:3000/auth/vehicleSingle/${id}`)
            .then((response) => {
                if (response.data.status) {
                    setVehicle(response.data.result)
                }
            })
            .catch((error) => {console.log(error)})
        }
        fetchSingleVehicle()
    },[id])
    const handleValueChange  = (event) => {
        const { name, value} = event.target
        setDays((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    
  return (
    <div className='py-16 max-w-7xl md:w-[90%] mx-auto px-4'>
        <div className='p-4 rounded-md bg-white shadow-md mt-4'>
            <div className='md:w-[50%] w-full'>
                {
                    vehicle.map((item) => (
                        <div>
                             <img src={`http://localhost:3000/images/`+ item.vehicleImage} alt="" className='w-full object-cover' />
                             <h1 className='text-gray-600 '>{item.vehicleName}</h1>
                             <h1 className='text-gray-600'>{item.vehiclePrice} / Day</h1>
                             <form action="" className='flex flex-col'>
                                <label htmlFor="" className='text-gray-600'>Rental days</label>
                                <input type="number" name='days' onChange={handleValueChange} className='border p-2 rounded-md w-[40%] mt-1'/>
                                <label htmlFor="" className='text-gray-600 mt-2'>Total payout</label>
                                <input type="number" value={item.vehiclePrice} className='border p-2 rounded-md w-[40%]'/>
                             </form>
                             <button className='py-2 px-12 bg-red-600 text-white cursor-pointer rounded-md cursor-pointer mt-4'>Proceed to payment</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BookingPage