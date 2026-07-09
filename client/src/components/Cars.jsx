import React from 'react'

function Cars() {
    const car = [
        {
            name:"Landrover Defender",
            img:"/src/assets/landrover.jpeg",
            desc:"Affordable SUV suitable for family ride and road trip"
        },
           {
            name:"Prado 2025",
            img:"/src/assets/prado2025.jpeg",
            desc:"Affordable SUV suitable for family ride and road trip"
        },
           {
            name:"Landcruiser Prado V8",
            img:"/src/assets/prado.jpg",
            desc:"Affordable SUV suitable for family ride and road trip"
        }
    ]
  return (
    <div id='cars' className='py-16 bg-gray-100 h-[100vh] w-full'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4'>
            <h1 className='text-center md:text-5xl text-3xl text-gray-800 font-extrabold'>
                Most Popular Cars
            </h1>
            <div className='md:mt-10 mt-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    car.map((item) => (
                        <div className='p-4 rounded-md bg-white'>
                            <img src={item.img} alt=""  className='h-[350px] w-full'/>
                            <h1 className='mt-4 text-gray-700 font-extrabold'>{item.name}</h1>
                            <p className='text-gray-600 text-sm mt-2'>{item.desc}</p>
                            <button className='py-2 w-full border border-red-600 text-red-600 mt-4 rounded-md cursor-pointer'>Book Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Cars