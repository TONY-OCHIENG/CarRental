import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dateFormat } from './dateFormat'
import { toast } from 'react-toastify'

function UserBookings() {
  const [userId, setUserId] = useState(null)
  const [bookings,setBookings] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
         axios.get('http://localhost:3000/auth/user')
        .then((response) => {
            if (response.data.status){
                setUserId(response.data.name.userID)
            } else {
              navigate('/user/login')
            }
        })
        .catch((error) => {console.log(error)})
    },[])
    useEffect(() => {
      const fetchBookingDetails = () => {
        axios.get(`http://localhost:3000/auth/getbookingDetail/${userId}`)
        .then((response) => {
           if (response.data.status) {
            setBookings(response.data.result)
           }
        })
        .catch((error) => {console.log(error)})
      }
      fetchBookingDetails()
    },[userId])
    const handleReturn = (id) => {
      axios.put(`http://localhost:3000/auth/returnVehicle/${id}`)
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.message)
        } else {
          toast.error("An error occurred")
        }
      })
      .catch((error) => {console.log(error)})
    }
    const handleCancelBooking = (id) => {
       axios.put(`http://localhost:3000/auth/cancelBooking/${id}`)
      .then((response) => {
        console.log(response)
        if (response.data.status) {
          toast.success(response.data.message)
        } else {
          toast.error("An error occurred")
        }
      })
      .catch((error) => {console.log(error)})
    }    
  return (
     <div className='py-16 px-4'>
      <h1 className='font-bold text-gray-600 mt-4 mb-4'>Bookings</h1>
      <div className='max-md:w-full w-full h-[70vh] p-4 bg-white max-md:overflow-x-auto overflow-y-auto'>
        <table className='w-full'>
          <thead className='text-left'>
            <th className='p-2'>Booking Date</th>
            <th>Customer email</th>
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
                    <td>{item.email}</td>
                    <td>{item.vehicleName}</td>
                    <td>{item.bookingDays}</td>
                    <td>{item.bookingPrice}</td>
                    <td>{item.bookingStatus}</td>
                    <td>{item.bookingState}</td>
                    <td className='flex gap-2 items-center'>
                    <button disabled={item.bookingState === 'Checkpoint'} className={`bg-gray-500 mt-2 p-1 text-xs text-white rounded-md ${item.bookingState === 'Checkpoint' ? 'disabled:opacity-40 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleCancelBooking(item.vehicle_id)}>Cancel</button>
                    <button className='bg-red-600 mt-2 p-1 text-xs text-white rounded-md cursor-pointer' onClick={() => handleReturn(item.vehicle_id)}>Return</button>
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

export default UserBookings