import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Feedback() {
  const [feedBack,setFeedBack] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/feedback')
    .then((response) => {
      if (response.data.status) {
        setFeedBack(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
  },[])
  return (
    <div className='py-16 px-4 w-full h-full p-2'>
      <div className='mx-auto md:w-[90%] w-full bg-white rounded-md p-2 mt-4'>
        <table className='w-full'>
          <thead className='text-left'>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Feedback</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default Feedback