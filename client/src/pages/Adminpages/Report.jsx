import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Chart as Chartjs} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

function Report() {
  const [category,setCategory] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/vehiclecategory')
    .then((response) => {
      if (response.data.status) {
        setCategory(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
  },[])
  console.log(category)
  return (
    <div className='py-10 px-4 w-full h-full'>
      <div className='mt-8 w-full h-full rounded-md mx-auto flex justify-center items-center flex-col'>
        <div className='flex gap-6 flex-col md:flex-row'>
          <div className='w-[500px] h-[300px] shadow-md bg-white rounded-md'></div>
          <div className='w-[500px] h-[300px] shadow-md bg-white rounded-md'></div>
        </div>
        <div className='w-full md:w-[82%] h-[350px] mt-2 shadow-md bg-white rounded-md'></div>
      </div>
    </div>
  )
}

export default Report