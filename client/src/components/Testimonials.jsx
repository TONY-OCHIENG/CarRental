import { Star } from 'lucide-react'
import React from 'react'

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah M., Business Traveler",
            testimonial:"I've rented cars from several companies over the years, but this was by far the smoothest experience I've had. The booking process took less than five minutes, the car was spotless, and the staff at pickup were incredibly friendly. I'll definitely be back for my next trip!",
        },{
            name:"James T., Family Vacationer",
            testimonial:"We needed a reliable SUV for a family road trip and couldn't have asked for better service. The vehicle was in great condition, pricing was transparent with zero hidden fees, and their customer support answered all our questions right away. Highly recommend!"
        },{
            name:"Amara K., Frequent Renter",
            testimonial:"As someone who rents cars frequently for work, I really appreciate how easy and stress-free this platform makes everything. Flexible pickup locations, well-maintained vehicles, and a support team that actually responds quickly. This is my go-to rental service now."
        }        
    ]
  return (
    <div id='testimonials' className='py-16 h-[100vh] w-full bg-white'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4'>
            <h1 className='md:text-5xl text-3xl text-gray-800 font-extrabold text-center'>Testimonials</h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 md:mt-28'>
                {
                    testimonials.map((item) => (
                        <div className='p-4 rounded-md shadow-lg bg-white'>
                            <h1 className='text-center font-bold m-4 text-xl text-gray-800'>{item.name}</h1>
                            <p className='text-gray-600 text-md'>{item.testimonial}</p>
                            <p className='flex gap-1 mt-5 text-sm'><Star className='fill-amber-400 text-amber-400'/>
                               <Star className='fill-amber-400 text-amber-400'/>
                               <Star className='fill-amber-400 text-amber-400'/>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials