import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function AddVehicles() {
  const [value, setValues] = useState({
    name:'',
    capacity:'',
    price:'',
    type:'',
    image:''
  })
  const navigate = useNavigate()
  const handleValueChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name',value.name)
    formData.append('capacity',value.capacity)
    formData.append('price',value.price)
    formData.append('type',value.type)
    formData.append('image',value.image)
    
    axios.post('http://localhost:3000/auth/addvehicles',formData)
    .then((response) => {
      if (response.data.status) {
          toast.success(response.data.message)
          navigate('/admin/vehicle')
      } else {
        toast.error(response.data.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className='py-16 px-10 h-full w-full flex justify-center mt-10'>
      <div className='md:w-[50%] w-full'>
        <h1 className='text-center font-bold text-2xl text-gray-800'>Add vehicles</h1>
        <form action="" onSubmit={handleSubmit} className='w-full rounded-md bg-white p-4'>
            <label htmlFor="name" className='text-gray-600'>Vehicle name</label>
            <input type="text" onChange={handleValueChange} id='name' name='name' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="capacity" className='text-gray-600'>Vehicle capacity</label>
            <input type="number" onChange={handleValueChange} id='capacity' name='capacity' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="price" className='text-gray-600'>Vehicle price</label>
            <input type="number"  onChange={handleValueChange} id='price' name='price' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="type" className='text-gray-600'>Vehicle type</label>
            <input type="text"  onChange={handleValueChange} id='type' name='type' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="image" className='text-gray-600'>Vehicle Image</label>
            <input type="file"  onChange={(event) => {setValues({...value, image: event.target.files[0]})}} id='image' name='image' className='w-full p-2 border rounded-md'/>
            <button type='submit' className='w-full mt-4 cursor-pointer text-white font-bold rounded-md bg-red-600 py-3'>Add vehicle</button>
        </form>
      </div>
    </div>
  )
}

export default AddVehicles