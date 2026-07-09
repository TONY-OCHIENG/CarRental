import React from 'react'

function Service() {
    const services = [
        {
            service: "Standard Vehicle Rentals",
            desc:"Daily, weekly, or monthly rentals across a range of vehicle classes (economy, SUV, luxury, van). Include filters by price, seating capacity, transmission type, and fuel type, plus flexible pickup/drop-off locations (airport, city center, hotel delivery)."
        },{
            service:"Chauffeur-Driven",
            desc:"A driver-included option for customers who want to be picked up and dropped off without driving themselves — ideal for airport transfers, business travel, or events. Can be priced per trip or per hour."
        },{
            service:"Corporate Leasing",
            desc:"Extended rental packages (weeks to months) aimed at businesses, relocating professionals, or tourists on extended stays, often with discounted rates, maintenance included, and flexible contract terms."
        }
    ]
  return (
    <div id='services' className='w-full h-[100vh] bg-gray-100 py-16'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full p-4'>
            <h1 className='text-center font-extrabold text-gray-800 text-3xl md:text-5xl'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 md:mt-28'>
                {
                    services.map((item) => (
                        <div className='p-4 rounded-md shadow-md bg-white'>
                            <h1 className='text-center font-bold m-4 text-xl text-gray-800'>{item.service}</h1>
                            <p className='text-gray-600 text-md'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service