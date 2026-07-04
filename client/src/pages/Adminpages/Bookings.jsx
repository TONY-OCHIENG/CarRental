import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { dateFormat } from '../user/dateFormat'
function Bookings() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/userbookings')
    .then((response) => {
      if (response.data.status) {
        setBookings(response.data.result)
      }
    })
    .catch((error) => {console.log(error)})    
  },[])
  return (
    <div className='py-16 px-4'>
      <h1 className='font-bold text-gray-600 mt-4 mb-4'>Bookings</h1>
      <div className='max-md:w-full w-full h-[70vh] p-1 bg-white max-md:overflow-x-auto overflow-y-auto'>
        <table className='w-full'>
          <thead className='text-left'>
            <th className='p-2'>Booking Date</th>
            <th>name</th>
            <th> email</th>
            <th>Car model</th>
            <th>Plan</th>
            <th>Payment</th>
            <th>Status</th>
            <th>State</th>
            <th>Action</th>
          </thead>
          <tbody>
            {
              bookings.map((item) => (
                   <tr className='border even:bg-gray-100 bg-white '>
                    <td className='p-2'>{dateFormat(item.bookingDate)}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.vehicleName}</td>
                    <td>{item.bookingDays}</td>
                    <td>{item.bookingPrice}</td>
                    <td>{item.bookingStatus}</td>
                    <td>{item.bookingState}</td>
                    <td className='flex gap-2'>
                    <button disabled={item.bookingState === 'Checkpoint'} className={`bg-gray-500 mt-2 p-1 text-xs text-white rounded-md ${item.bookingState === 'Checkpoint' ? 'disabled:opacity-40 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleCancelBooking(item.vehicle_id)}>Cancel</button>
                    <button className='bg-red-600 mt-2 p-1 text-xs text-white rounded-md cursor-pointer'>Return</button>
                    <button className='bg-green-600 mt-2 p-1 text-xs text-white rounded-md cursor-pointer'>Approve</button>
                    </td>
                  </tr>    
              ))
            }       
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings