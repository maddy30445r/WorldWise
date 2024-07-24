import React from 'react'
import PageNav from '../PageNav'

function Product() {
  return (
    <div className=' p-5'>
        <div className='min-w-[calc(100vw-2.5rem)] min-h-[calc(100vh-2.5rem)] overflow-x-auto bg-[#2D3439] p-6 px-8'>
            <PageNav/>

        <div className=' h-[40%] productmain mx-auto space-x-14 text-white my-10 flex w-[60%] '>
            <img className='h-[25rem] w-[25rem]' src="/public/img-1.jpg" alt="" />

            <div className='flex flex-col space-y-8 justify-center'>
                <div className='text-4xl font-semibold '>About WorldWise.</div>

            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore facere expedita dolorum, rerum, sed deleniti esse adipisci, tempora sequi molestiae? Numquam tenetur dignissimos in consequatur fuga blanditiis ea porro?</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam veniam provident fugiat ipsa a itaque facere unde quas reiciendis.</div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Product