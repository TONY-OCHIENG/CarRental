import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function UserVehicles() {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/auth/vehiclesBooking')
      .then((response) => {
        if (response.data.status) {
          setVehicles(response.data.result)
        }
      })
      .catch((error) => {console.log(error)})
    },[])  
    
  return (
    <div className='py-16 px-4 w-full h-full'></div>
  )
}

export default UserVehicles