import React from 'react'
import PageNav from '../PageNav'


function Pricing() {
  return (
    <div className=' p-5'>
    <div className='min-w-[[calc(100vw-2.5rem)]] min-h-[calc(100vh-2.5rem)] overflow-auto bg-[#2D3439] p-6 px-8'>
        <PageNav/>

    <div className='productmain mx-auto space-x-14 text-white my-10 flex w-[60%] '>

        <div className='flex flex-col space-y-8 justify-center'>
            <div className='text-5xl font-semibold '>Simple pricing.<br></br>
            Just $9/month.</div>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore facere expedita dolorum, rerum, sed deleniti esse adipisci, tempora sequi molestiae? Numquam tenetur dignissimos in consequatur fuga blanditiis ea porro?</div>

        </div>
        <img className='h-[25rem] w-[25rem]' src="/img-2.jpg" alt="" />

    </div>
    </div>
</div>
  )
}

export default Pricing