import React from 'react'
import assets from '../assets/assets'

function LeftSideBar() {
  return (
    <div className='bg-blue-950'>
      <div>
        <div className='flex items-center justify-between p-6'>
          <img src={assets.logo} alt="" className='w-28 cursor-pointer' />
          <div>
            <img src={assets.menu_icon} className='h-4 cursor-pointer' alt="" />
          </div>
        </div>
        <div className='flex  items-center gap-3 m-auto max-w-52 bg-blue-900 px-5 py-2 rounded-md'>
          <img src={assets.search_icon} alt="" className='h-4 ' />
          <input type="text" placeholder='Search here..' className='text-sm font-[poppins] text-white placeholder-white bg-transparent outline-none ' />
        </div>
      </div>
      {/* Friends List */}
      <div className='flex flex-col h-3/4 overflow-y-scroll  mt-2 '>
       <div className='flex gap-3 py-2 px-5 hover:bg-blue-400 cursor-pointer'>
       <img src={assets.profile_img} alt="" className='rounded-full h-10 w-10' />
        <div className=' text-sm text-white '>
          <p className='font-semibold'>Richard sanford</p>
          <span className='text-gray-500'>Hello, How are you ?</span>
        </div>
        </div>
      </div>



    </div>
  )
}

export default LeftSideBar