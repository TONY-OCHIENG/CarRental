import React from 'react'

function About() {
  return (
    <div id='about' className='py-16 h-[100vh] bg-white'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4'>
            <h1 className='text-center text-gray-800 font-extrabold md:text-5xl text-3xl'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-18'>
                <div className='md:h-[500px] md:w-[550px]'>
                    <img src={'src/assets/mercedes.jpeg'} alt="" className='h-full w-full'/>
                </div>
                <div>
                    <p className='text-gray-600'>
                        At ROUTECAB, we believe getting from point A to point B should be simple, reliable, and stress-free. Founded with a passion for exceptional service, we've grown into a trusted name in car rentals, offering a diverse fleet of well-maintained vehicles to suit every journey — whether it's a quick city errand, a family road trip, or a business trip that demands comfort and reliability.
                            We understand that no two customers are the same, which is why we offer flexible rental plans, transparent pricing with no hidden fees, and a seamless booking experience from start to finish. Our team is committed to providing friendly, professional support at every step, ensuring your rental experience is as smooth as the ride itself.
                            From compact cars perfect for navigating busy streets to spacious SUVs built for adventure, our fleet is regularly inspected and maintained to the highest standards of safety and comfort. With convenient pickup and drop-off locations, 24/7 customer support, and a genuine commitment to putting our customers first,ROUTECAB is here to make every mile memorable.
                            Drive with confidence. Drive with ROUTECAB.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About