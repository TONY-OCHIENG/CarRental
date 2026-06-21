import React from 'react'

function AddVehicles() {
  return (
    <div className='py-16 px-10 h-full w-full flex justify-center mt-10'>
      <div className='md:w-[50%] w-full'>
        <h1 className='text-center font-bold text-2xl text-gray-800'>Add vehicles</h1>
        <form action="" className='w-full rounded-md bg-white p-4'>
            <label htmlFor="name" className='text-gray-600'>Vehicle name</label>
            <input type="text" id='name' name='name' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="capacity" className='text-gray-600'>Vehicle capacity</label>
            <input type="number" id='capacity' name='capacity' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="price" className='text-gray-600'>Vehicle price</label>
            <input type="number" id='price' name='price' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="type" className='text-gray-600'>Vehicle type</label>
            <input type="text" id='type' name='type' className='w-full p-2 border rounded-md mb-2'/>
            <label htmlFor="image" className='text-gray-600'>Vehicle Image</label>
            <input type="file" id='image' name='image' className='w-full p-2 border rounded-md'/>
            <button type='submit' className='w-full mt-4 cursor-pointer text-white font-bold rounded-md bg-red-600 py-3'>Add vehicle</button>
        </form>
      </div>
    </div>
  )
}

export default AddVehicles