import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function EditVehicle() {
    const [vehicle, setVehicle] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchSingleVehicle = () => {
            axios.get(`http://localhost:3000/auth/vehicles/${id}`)
            .then((response) => {
                if (response.data.status) {
                    setVehicle(response.data.result[0])
                }
            })
            .catch((error) => console.log(error))
        }
        fetchSingleVehicle()
    },[id])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/auth/vehicles/${id}`, vehicle)
        .then((response) => {
            if (response.data.status) {
                toast.success(response.data.message)
            }
        })
        .catch((error) => console.log(error))        
    }
  return (
    <div className='py-16 px-10 w-full h-[100vh]'>
        <div className='flex justify-center  w-full '>
                
                <div className='w-full md:w-[50%] bg-white rounded-md shado-md p-4'>
                    <img src={`http://localhost:3000/images/`+ vehicle.vehicleImage} alt="" className='w-full object-cover' />
                    <form action="" onSubmit={handleSubmit}>
                    <div className='flex md:flex-row flex-col  justify-between gap-2'>
                        <div className='md:w-[50%] w-full'>
                            <label htmlFor="name">Name</label>
                            <input type="text" value={vehicle.vehicleName} onChange={(event) => setVehicle({...vehicle, vehicleName:event.target.value})} className='border rounded-md w-full p-2'/>
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <label htmlFor="name">Capacity</label>
                            <input type="number" value={vehicle.vehicleCapacity} onChange={(event) => setVehicle({...vehicle, vehicleCapacity:event.target.value})}  className='border rounded-md w-full p-2'/>
                        </div>
                    </div>
                        <div className='flex md:flex-row flex-col  gap-2'>
                        <div className='md:w-[50%] w-full'>
                            <label htmlFor="name">Price</label>
                            <input type="number" value={vehicle.vehiclePrice}  onChange={(event) => setVehicle({...vehicle, vehiclePrice:event.target.value})} className='border rounded-md w-full p-2'/>
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <label htmlFor="name">Type</label>
                            <input type="text"  value={vehicle.vehicleType}  onChange={(event) => setVehicle({...vehicle, vehicleType:event.target.value})} className='border rounded-md w-full p-2'/>
                        </div>
                    </div>
                    <button className='py-2 w-full mt-2 bg-red-600 font-bold text-white rounded-md cursor-pointer'>Edit</button>
                    </form>
                </div>          
             
           
        </div>
    </div>
  )
}

export default EditVehicle