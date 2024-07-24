import React from 'react'


function Country({Country}) {
    // const{country}=Country;
  return (
    <div className='country text-white  bg-[#42484D] px-4 text-center py-3 rounded-md border-l-4 border-l-orange-400 cursor-pointer text-2xl'>

        <div className='cityname font-medium'>{Country}</div>
        {/* <span className='grow'></span>
        <div className=' bg-[#242A2E] rounded-full w-6 h-6 font-medium text-center text-sm hover:bg-[#FFB545] hover:text-black cursor-pointer'>x</div> */}


    </div>
  )
}

export default Country