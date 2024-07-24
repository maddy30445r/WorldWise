import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {
  return (
    <div className='flex  my-12 text-white  uppercase text-xs font-medium rounded-md bg-[#42484D]  '>

       <NavLink className="appnav   " to="cities">
         <div className=' px-3 py-2'>Cities</div>
        </NavLink>
       <NavLink className="appnav " to="countries">
        <div className='  px-3 py-2'>Countries</div>
        </NavLink>

    </div>
  )
}

export default AppNav