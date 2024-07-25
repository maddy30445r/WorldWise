import React from 'react'
import AppNav from './AppNav'
import { Outlet,Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[calc(max(40vw,400px))] flex flex-col  items-center py-7'>

<Link to="/">
<img className="w-[210px] h-[50px] " src="/logo.png " alt="" />
</Link>

<AppNav/>
 
<Outlet/>
<span className='grow'></span>

<div className='text-[#A2A2A3] font-normal text-xs '>© Copyright 2024 by WorldWise Inc.</div>


        
    </div>


  )
}

export default Sidebar