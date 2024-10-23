import React from 'react'
import assets from '../assets/assets'

function ChatBox() {
  return (
    <div className='h-[75vh] relative bg-[#f1f5ff]'>
      <div className='flex items-center py-2 px-4 gap-2 border-b-2 border-2 '>
        <img src={assets.profile_img} className='rounded-full h-9' alt="" />
        <p className='flex-1 flex text-lg font-medium font-[poppins] gap-1'>Richard Sanford <img src={assets.green_dot} className='w-4 h-3 self-center' alt="" /></p>
        <img src={assets.help_icon} className='rounded-full h-6 cursor-pointer ' alt="" />
      </div>

      {/* Chat Message */}
      <div className='h-[calc(100%-70px)] overflow-y-scroll pb-12 flex flex-col-reverse'>
        {/* Sender Message */}
        <div className='flex  items-end justify-end gap-3 px-4'>
          <p className='text-white bg-[#077EFF] p-2 max-w-[200px] text-xs font-light mb-7 rounded-tl-md rounded-tr-md rounded-bl-md'>Sender</p>
          <div className='text-center text-xs'>
            <img src={assets.profile_img} className='w-7 aspect-square rounded-full' alt="" />
            <p className='text-xs font-[poppins]'>2:30</p>
          </div>
        </div>
        <div className='flex  items-end justify-end gap-3 px-4'>
          <img src={assets.pic1} className='max-w-[230px] mb-7 rounded-lg ' alt="" />
          <div className='text-center text-xs'>
            <img src={assets.profile_img} className='w-7 aspect-square rounded-full' alt="" />
            <p className='text-xs font-[poppins]'>2:30</p>
          </div>
        </div>
        {/* Receiver Message */}
        <div className='flex  items-end justify-end gap-4 px-4 flex-row-reverse  '>
          <p className='text-white bg-[#077EFF] p-2 max-w-[200px] text-xs font-light mb-7 rounded-tl-md rounded-tr-md rounded-br-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ipsa?</p>
          <div className='text-center text-xs'>
            <img src={assets.profile_img} alt="" className='w-7 aspect-square rounded-full' />
            <p>2:30</p>
          </div>
        </div>
      </div>



      <div className='absolute bg-white bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3'>
        <input type="text" placeholder='Send a message' className='flex-1  outline-none border-none ' />
        <input type="file" accept='image/png, image/jpeg' id='image' hidden />
        <label for="image" className='flex'>
          <img src={assets.gallery_icon} alt="" className='w-5 cursor-pointer' />
        </label>
        <img src={assets.send_button} alt="" className='w-7 cursor-pointer' />
      </div>
    </div>
  )
}

export default ChatBox