import React from 'react'

function Report() {
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