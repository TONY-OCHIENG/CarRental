import React from 'react'
import { CalendarCheck, CarFront, CreditCard, FileText, LayoutDashboard, Locate, MessageSquare, MessageSquareQuote, PowerCircle, User, User2Icon, UserIcon, Wrench } from 'lucide-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function UserLayout() {
   const navigate = useNavigate()
   const [userName, setUserName] = useState('')
   const [auth, setAuth] = useState(false)
   const dashBoardLinks = [
      {name:"Vehicle",path:"/user", icon: CarFront},
      {name:"Bookings",path:"/user/bookings", icon: CalendarCheck},
      {name:"Feedbacks",path:"/user/feedback", icon: MessageSquareQuote},
      {name:"Profile",path:"/user/profile", icon: User2Icon},
    ]
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/auth/user')
        .then((response) => {
            if (response.data.status){
                setAuth(true)
                setUserName(response.data.name)
            } else {
              setAuth(false)
              navigate('/user/login')
            }
        })
        .catch((error) => {console.log(error)})
    },[]) 
  return (
    <div>
      { auth && 
           <div className='w-full h-[100vh] bg-gray-100 flex'>
              <div className='h-[100vh] bg-white border-r w-[18%] md:w-[16%]'>
                <h1 className='text-center md:block hidden mt-4 font-extrabold text-2xl'>ROUTE
                  <span className='text-red-600'>CAB</span></h1>
                  <div className='mt-4 w-full'>
                    {
                      dashBoardLinks.map((link,index) => (
                          <NavLink key={index} to={link.path} end className={({isActive}) => `relative flex items-center
                              max-md:justify-center gap-2 w-full rounded-2 py-2.5 min-md:pl-10 first:mt-6
                              text-gray-900 ${isActive && 'bg-red-600 text-white group'}`}>
                              {({isActive}) => (
                                  <>
                                    <link.icon className={`w-5 h-5 text-red-600 ${isActive && 'text-white'}`}/>
                                    <p className='max-md:hidden'>{link.name}</p>
                                    <span className={`w-1.5 h-10 rounded-1 right-0 absolute ${isActive && 'bg-white'}`}/>
                                  </>
                              )}
                        </NavLink>
                      ))
                    }
                      <div className='min-md:pl-10 pl-5 text-gray-900 mt-2.5'>
                        <p className='flex gap-2 cursor-pointer'><PowerCircle className='text-red-600'/> <span className='max-md:hidden'>Logout</span></p>
                      </div>
                    
                  </div>
              </div>
              <div className='flex overflow-y-auto flex-col w-full'>
                <div className='fixed  top-0 w-full z-10 h-[8vh] bg-white border-b shadow-md'>
                  <div className='relative w-full h-full flex items-center max-w-[80%]'>
                    <div className='absolute right-0 flex items-center'>
                      <UserIcon className='h-5 w-5 text-red-600'/>
                      <h1 className='font-extrabold text-xl text-red-600'>Hi {userName}</h1>
                    </div>
                  </div>
                </div>
                 <Outlet/>
              </div>
        </div> 
     }
    </div>
    
  )
}

export default UserLayout