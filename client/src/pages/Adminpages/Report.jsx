import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Chart as Chartjs, Title} from 'chart.js/auto'
import { Doughnut, Pie } from 'react-chartjs-2'

function Report() {
  const [category,setCategory] = useState([])
  const [booked, setBooked] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/vehiclecategory')
    .then((response) => {
      if (response.data.status) {
        setCategory(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
    axios.get('http://localhost:3000/auth/vehiclebookedcategories')
    .then((response) => {
      if (response.data.status) {
        setBooked(response.data.result)
      }
    })
    .catch((error) => console.log(error))
  },[])
  console.log(category)
  return (
    <div className='py-10 px-4 w-full h-full'>
      <div className='mt-8 w-full h-full rounded-md mx-auto flex justify-center items-center flex-col'>
        <div className='flex gap-6 flex-col md:flex-row'>
          <div className='w-[500px] h-[340px] shadow-md bg-white rounded-md flex justify-center flex-col'>
               <h1 className='text-xs text-gray-600 text-center'>vehicle categories</h1>
               <div className='h-[300px] flex justify-center '>
                   <Pie className='w-full' options={{
                responsive: true             
               }} data = {{
                                datasets: [{
                                    data: category.map((item) => item.total),
                                    backgroundColor:["skyblue",'red','orange']
                                  }],
            
                                // These labels appear in the legend and in the tooltips when hovering different arcs
                                labels: category.map((item) => item.vehicleType),
                            }}/>  
               </div>
          </div>
           <div className='w-[500px] h-[340px] shadow-md bg-white rounded-md flex justify-center flex-col'>
               <h1 className='text-xs text-gray-600 text-center'>Booked categories</h1>
               <div className='h-[300px] flex justify-center '>
                  <Doughnut className='w-full' options={{
                responsive: true             
               }} data = {{
                                datasets: [{
                                    data: category.map((item) => item.total),
                                    backgroundColor:["salmon",'red','orange']
                                  }],
            
                                // These labels appear in the legend and in the tooltips when hovering different arcs
                                labels: category.map((item) => item.vehicleType),
                            }}/>  
               </div>
          </div>
        </div>
        <div className='w-full md:w-[82%] h-[350px] mt-2 shadow-md bg-white rounded-md'></div>
      </div>
    </div>
  )
}

export default Report