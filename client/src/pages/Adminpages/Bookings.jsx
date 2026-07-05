import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { dateFormat } from '../user/dateFormat'
import { toast } from 'react-toastify'
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
  const handleApprove = (id) => {
    axios.put(`http://localhost:3000/auth/approveBookings/${id}`)
    .then((response) => {
      if (response.data.status) {
        toast.success(response.data.message)
        setTimeout(() => {window.location.reload()},4000)
      }
    })
    .catch((error) => { console.log(error)})
  } 
  const handleReturn = (id) => {
    axios.put(`http://localhost:3000/auth/returnBookedvehicle/${id}`)
    .then((response) => {
      if (response.data.status) {
        toast.success(response.data.message) 
        setTimeout(() => {window.location.reload()},4000)       
      }
    })
    .catch((error) => {console.log(error)})
  }
  const handleCancel = (id) => {
    axios.put(`http://localhost:3000/auth/canceledBooking/${id}`)
    .then((response) => {
      if (response.data.status) {
        toast.success(response.data.message)
        setTimeout(() => {window.location.reload()},4000)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
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
                    <button className={`bg-gray-500 mt-2 p-1 text-xs text-white rounded-md cursor-pointer`} onClick={() => handleCancel(item.vehicle_id)}>Cancel</button>
                    <button className='bg-red-600 mt-2 p-1 text-xs text-white rounded-md cursor-pointer' onClick={() => handleReturn(item.vehicle_id)}>Return</button>
                    <button className='bg-green-600 mt-2 p-1 text-xs text-white rounded-md cursor-pointer' onClick={() => handleApprove(item.vehicle_id)}>Approve</button>
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