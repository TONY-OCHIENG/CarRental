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
            <th className='p-2'>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Feedback</th>
          </thead>
          <tbody>
            {
              feedBack.map((item) => (
                <tr className='border even:bg-gray-100 text-gray-600'>
                  <td className='p-2'>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td className='flex-wrap w-[700px]'>{item.feedback}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Feedback