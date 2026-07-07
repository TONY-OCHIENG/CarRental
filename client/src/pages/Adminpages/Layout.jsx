import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { CalendarCheck, CarFront, CreditCard, FileText, LayoutDashboard, Locate, MessageSquare, MessageSquareQuote, PowerCircle, User, UserIcon, Wrench } from 'lucide-react'
import {toast} from 'react-toastify'
function Layout() {
  const navigate = useNavigate()
  const [auth,setAuth] = useState(false)
  const [role, setRole] = useState('')
  axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:3000/auth/role')
        .then((response) => {
            if (response.data.status) {
               
                setAuth(true)
                setRole(response.data.role)   
            } else {
                setAuth(false)
                navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])

    let navigateLogin = () => {
      navigate('/login')
    }
    const dashBoardLinks = [
      {name:"Dashboard",path:"/admin", icon: LayoutDashboard},
      {name:"Vehicle",path:"/admin/vehicle", icon: CarFront},
      {name:"Bookings",path:"/admin/bookings", icon: CalendarCheck},
      {name:"Payments",path:"/admin/payment", icon: CreditCard},
      {name:"Reports",path:"/admin/report", icon: FileText},
      {name:"Feedbacks",path:"/admin/feedback", icon: MessageSquareQuote},
      {name:"Maintenance",path:"/admin/maintenance", icon: Wrench},
      {name:"Track vehicle",path:"/admin/track", icon: Locate},
    ]
    const handleLogout = () => {
      axios.get('http://localhost:3000/auth/logoutAdmin')
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.message)
          navigate('/login')
        }
      })
      .catch((error) => console.log(error))
    }
  return (
    <div>
      {
        auth  && 
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
                        <p className='flex gap-2 cursor-pointer' onClick={handleLogout}><PowerCircle className='text-red-600'/> <span className='max-md:hidden'>Logout</span></p>
                      </div>
                    
                  </div>
              </div>
              <div className='flex overflow-y-auto flex-col w-full'>
                <div className='fixed  top-0 w-full z-10 h-[8vh] bg-white border-b shadow-md'>
                  <div className='relative w-full h-full flex items-center max-w-[80%]'>
                    <div className='absolute right-0 flex items-center'>
                      <UserIcon className='h-5 w-5 text-red-600'/>
                      <h1 className='font-extrabold text-xl text-red-600'>Hi {role}</h1>
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

export default Layout