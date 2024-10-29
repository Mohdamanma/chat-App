import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { auth, db, logout } from '../confiq/firebase'
import { useEffect } from 'react'
import { AppContext } from '../context/AppContext'

function RightSideBar() {

  const { userData } = useContext(AppContext)

  // console.log("USer data is :",userData.name)
  return (
    <div className='bg-[#001030] relative h-[75vh] overflow-y-scroll no-scrollbar text-white'>
      <div className='pt-14 max-w-[80%] text-center flex flex-col items-center m-auto'>
        <img src={assets.profile_img} className='rounded-full w-24 aspect-square' alt="" />
        <h3 className='text-lg font-normal flex items-center gap-2 my-2'>Alison Powell <img src={assets.green_dot} className='h-3' alt="" /></h3>
        <p className='text-sm font-light opacity-80'>Hey,There i am Richard Sanford using Chat app</p>
      </div>
      <hr className='border-[#ffffff50] my-4' />
      <div className='px-5'>
        <p className='text-sm font-medium'>Media</p>
        <div className='grid grid-cols-3 gap-3 max-h-[150px] overflow-y-scroll mt-2'>
          <img src={assets.pic1} alt="" className='w-16 rounded cursor-pointer' />
          <img src={assets.pic2} alt="" className='w-16' />
          <img src={assets.pic3} alt="" className='w-16' />
          <img src={assets.pic4} alt="" className='w-16' />
          <img src={assets.pic1} alt="" className='w-16 rounded cursor-pointer' />

        </div>
      </div>
      <button type="button" className='absolute bottom-4 left-1/2 transform translate-x-[-50%] bg-[#077eff] font-light text-xs px-16 py-2 rounded-full cursor-pointer' onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default RightSideBar