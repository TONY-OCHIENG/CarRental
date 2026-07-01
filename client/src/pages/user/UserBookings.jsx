import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    console.log(bookings)
  return (
     <div className='py-16 px-4'>
      <h1 className='font-bold text-gray-600 mt-4 mb-4'>Bookings</h1>
      <div className='max-md:w-full w-full h-[70vh] p-4 bg-white max-md:overflow-x-auto'>
        <table className='w-full'>
          <thead className='text-left'>
            <th className='p-2'>Booking Date</th>
            <th>Customer name</th>
            <th>Customer email</th>
            <th>Car model</th>
            <th>Plan</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr className='border even:bg-gray-100 bg-white '>
              <td className='p-2'>12/6/2026</td>
              <td>John Omondi</td>
              <td>john@gmail.com</td>
              <td>Lexus V8</td>
              <td>4days</td>
              <td>Online</td>
              <td>Approved</td>
              <td><button>Approve</button>
              <button>Cancel</button>
              <button>Overdue</button>
              </td>
            </tr>           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserBookings