import React from 'react'
import { useAuth } from './context/Authcontext'
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate=useNavigate();
    const{user,logout}=useAuth();
  return (
    <div className=' px-2 py-3 rounded-md flex bg-[#2D3439] absolute top-[2%] right-[1%] z-[1000] items-center gap-2 font-medium'>
<img className='h-8 w-8 rounded-full ' src={user.avatar} alt="" />
<div className='text-white'>Welcome ,{user.name}</div>
<button onClick={()=>{
    logout();
    navigate('/');

}
    } className='bg-[#42484D] rounded-md text-xs px-2 py-2 text-white'>LOGOUT</button>
    </div>
  )
}

export default User