import React from 'react'
import { Link } from 'react-scroll'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
function NavBar() {
    const navigationLink = [
        {name: "Home",href:"home"},
        {name: "Services", href:"services"},
        {name: "About",href:"about"},
        {name: "Cars", href: "cars"},
        {name: "Testimonials", href: "testimonials"},
        {name: "Contact us", href: "contact"}
    ]
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <div className='relative'>
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
           <button className='hidden md:block px-8 py-2 bg-red-600 text-white rounded-md font-bold cursor-pointer'>Sign in</button>
           <div onClick={() => handleOpen()}>
            {
                open ? <XIcon className='md:hidden mr-4 font-2xl cursor-pointer font-bold'/> : <MenuIcon className='md:hidden mr-4 font-2xl cursor-pointer font-bold'/>
            }
             
           </div>
        </div>
        
     </div>
     <div className={`absolute fixed h-[100vh] w-[80%] ${open ? 'left-0 transition-all duration-300 ' : 'left-[-100%] transition-all duration-300 '} shadow-md bg-white`}>
         <h1 className='text-2xl font-extrabold m-10'>ROUTE<span className='text-red-600'>CAB</span></h1>
          <ul className='m-10 text-md text-gray-600 text-xl'>
                {
                    navigationLink.map((item) => (
                        <li className='mb-5 cursor-pointer' >
                            <Link 
                            onClick={() => handleOpen()}
                            to={item.href}
                            spy
                            smooth
                            activeClass={"link-active"}
                            >{item.name}</Link>
                        </li>
                    ))
                }
             </ul>
        <button className='ml-10 px-8 py-2 bg-red-600 text-white rounded-md font-bold cursor-pointer'>Sign in</button>
     </div>
   </div>
  )
}

export default NavBar