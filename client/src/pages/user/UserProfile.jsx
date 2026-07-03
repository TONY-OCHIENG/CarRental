import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserProfile() {
  const [userId, setUserId] = useState(null)
  const [user, setUserDetails] = useState([])
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
        axios.get(`http://localhost:3000/auth/user/${userId}`)
        .then((response) => {
          if (response.data.status) {
            setUserDetails(response.data.result[0])
          }
        })
        .catch((error) => {console.log(error)})
      },[userId])
      
  return (
    <div className='py-16 md:px-10 px-2 flex justify-center items-center w-full h-full'>
      <div className='w-full md:w-[50%] p-4 bg-white rounded-md shadow-md'>
        <form action="" className='w-full h-full'>
          <label htmlFor="firstName">First name</label>
          <input value={user.firstName} name='firstName' onChange={(event) => setUserDetails({...user, firstName: event.target.value})} type="text" className='w-full p-2 border rounded-md '/>
          <label htmlFor="firstName">Last name</label>
          <input value={user.lastName} name='lastName' onChange={(event) => setUserDetails({...user, lastName: event.target.value})}  type="text" className='w-full p-2 border rounded-md '/>
          <label htmlFor="firstName">Email </label>
          <input value={user.email} name='email' onChange={(event) => setUserDetails({...user, email: event.target.value})}  type="email" className='w-full p-2 border rounded-md '/>
          <button className='w-full p-2 mt-4 font-bold bg-red-600 text-white rounded-md
          cursor-pointer'>Edit profile</button>
        </form>
      </div>
    </div>
  )
}

export default UserProfile