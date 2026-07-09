import React from 'react'
import { Link } from 'react-scroll'
function NavBar() {
    const navigationLink = [
        {name: "Home",href:"home"},
        {name: "Services", href:"services"},
        {name: "About",href:"about"},
        {name: "Cars", href: "cars"},
        {name: "Testimonials", href: "testimonials"},
        {name: "Contact us", href: "contact"}
    ]
  return (
    <div className='h-[10vh] w-full fixed shadow-md bg-gray-100 flex justify-center items-center'>
        <div className='max-w-7xl md:w-[80%] w-full px-2 flex justify-between items-center'>
            <h1 className='text-2xl font-extrabold'>ROUTE<span className='text-red-600'>CAB</span></h1>
           <div>
            <ul className='hidden md:flex gap-10 text-md text-gray-600'>
                {
                    navigationLink.map((item) => (
                        <li className='cursor-pointer'>
                            <Link
                            to={item.href}
                            spy
                            smooth
                            activeClass={"link-active"}
                            >{item.name}</Link>
                        </li>
                    ))
                }
             </ul>
           </div>
           <button className='px-8 py-2 bg-red-600 text-white rounded-md font-bold cursor-pointer'>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar