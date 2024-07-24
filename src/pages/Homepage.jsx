import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../PageNav'
// import {bg} from "/public/bg-fZeaHSuw9-transformed.jpeg"

function Homepage() {
  return (
    <>
    <div className=' p-5 h-screen  w-screen  '>
        <div className='h-full w-full'>
            <img  className=" h-full w-full object-cover object-center brightness-[.3] backdrop-brightness-50"src="/public/bg-fZeaHSuw9-transformed.jpeg " alt="" />

<div className='flex flex-col absolute top-[5%] w-[90%] left-[50%] translate-x-[-50%] space-y-10'>
    <PageNav/>

   
    <div className='mx-auto text-5xl  text-white leading-none font-semibold  text-center w-[65%]'> You travel the world.
        <br></br> Worldwise keeps track of your adventures.</div>
    <div className='mx-auto text-md  text-zinc-300 leading-tight font-light  text-center w-[55%]' > A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences , and show your friends how you have wandered the world.</div>

    <Link className='mx-auto' to="login">
    <button className=' bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase'>Start Tracking Now</button>
    </Link>
        </div>
   
</div>
    </div>
    </>
  )
}

export default Homepage