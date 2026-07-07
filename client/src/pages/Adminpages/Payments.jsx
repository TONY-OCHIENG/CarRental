import React from 'react'
import { Chart as Chartjs} from 'chart.js/auto'
import { Bar, Doughnut } from 'react-chartjs-2'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Payments() {
  const [vehicleType,setVehicle] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/auth/vehicleTypes`)
    .then((response) => {
      console.log(response)
      if (response.data.status) {
        setVehicle(response.data.result)
      }
    })
    .catch((error) => {console.log(error)})
  },[])

  console.log(vehicleType)
  return (
    <div className='py-16 max-w-7xl w-full md:w-[90%] mx-auto p-4 h-[80vh] mt-10'>
      <div className='bg-white rounded-md md:h-[550px] w-full h-full'>
          <Bar options={{
            responsive: true,
            scales: {
              y:{
                title: {
                  display: true,
                  text: "KSH",
                  color: 'grey',
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                }
              }
            }
          }} data = {{
                      datasets: [{
                          data: vehicleType.map((item) => item.totalPrice),
                          label: "Vehicle type"
                        }],

                      // These labels appear in the legend and in the tooltips when hovering different arcs
                      labels: ["SUV","Sedun","Hatchback"]
          }}/>  
      </div>
    </div>
  )
}

export default Payments