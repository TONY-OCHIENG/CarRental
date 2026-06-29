import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookingPage() {
    const [vehicle, setVehicle] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchSingleVehicle = () => {
            axios.get(`http://localhost:3000/auth/vehicleSingle/${id}`)
            .then((response) => {
                if (response.data.status) {
                    setVehicle(response.data.result)
                }
            })
            .catch((error) => {console.log(error)})
        }
        fetchSingleVehicle()
    },[id])
  return (
    <div>BookingPage</div>
  )
}

export default BookingPage