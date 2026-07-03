import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserProfile() {
  const [userId, setUserId] = useState(null)
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
      console.log(userId)
  return (
    <div className='py-16 md:px-10 px-2 flex justify-center items-center w-full h-full'>
      <div className='w-full md:w-[50%] p-4 bg-white rounded-md shadow-md'>
        <form action="" className='w-full h-full'>
          <label htmlFor="firstName">First name</label>
          <input type="text" className='w-full p-2 border rounded-md '/>
          <label htmlFor="firstName">Last name</label>
          <input type="text" className='w-full p-2 border rounded-md '/>
          <label htmlFor="firstName">Email </label>
          <input type="text" className='w-full p-2 border rounded-md '/>
          <button className='w-full p-2 mt-4 font-bold bg-red-600 text-white rounded-md
          cursor-pointer'>Edit profile</button>
        </form>
      </div>
    </div>
  )
}

export default UserProfile