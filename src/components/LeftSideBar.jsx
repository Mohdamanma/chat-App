import React from 'react'
import assets from '../assets/assets'

function LeftSideBar() {
  return (
    <div className=' h-[498px] bg-blue-950 '>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <img src={assets.logo} alt="" className='w-32 cursor-pointer' />
          <div className='group relative   py-2'>
            <img src={assets.menu_icon} className='h-4 cursor-pointer' alt="" />
            {/* Sub-Menu */}
            <div className='hidden group-hover:block  absolute top-full right-0 w-32 rounded-md bg-white text-black p-3'>
              <p className='cursor-pointer text-sm font-[poppins]'>Edit Profile</p>
              <hr className='border-none h-[1px] my-2 bg-[#a4a4a4a4]'/>
              <p className='cursor-pointer text-sm font-[poppins]'>Logout</p>
            </div>
          </div>
        </div>
        <div className='flex  items-center gap-3 m-auto max-w-52 mt-3 bg-blue-900 px-5 py-2 rounded-md'>
          <img src={assets.search_icon} alt="" className='h-4 ' />
          <input type="text" placeholder='Search here..' className='text-sm font-[poppins] text-white placeholder-white bg-transparent outline-none ' />
        </div>
      </div>
      {/* Friends List */}
      <div className='flex flex-col h-3/4 overflow-y-scroll  no-scrollbar '>
        {Array(12).fill("").map((item,index) => (
          <div key={index}  className='flex items-center gap-3 py-2 px-5 hover:bg-blue-400   cursor-pointer'>
            <img src={assets.profile_img} alt="" className='rounded-full h-10 w-10' />
            <div className='flex flex-col text-sm text-white '>
              <p className='font-medium font-[poppins] '>Richard sanford</p>
              <span className='text-gray-500 hover:text-white '>Hello, How are you ?</span>
            </div>
          </div>
         ))}
      </div>
    </div>
  )
}

export default LeftSideBar