import React, { useState } from 'react'
import assets from '../assets/assets'

function ProfileUpdate() {

  const [image, setImage] = useState(false)
console.log("image upload : ",image)

  return (
    <div className="bg-[url('/background.png')] min-h-screen bg-cover flex justify-center items-center">
      <div className='flex items-center justify-between min-w-[700px] bg-white px-8  rounded-lg'>
        <form action="" className='flex flex-col gap-3 p-8'>
          <h2 className='font-medium font-[poppins]'>Profile Details</h2>
          <label className='flex items-center gap-2 text-gray-600 cursor-pointer'>
            <input type="file" onChange={(e) =>setImage(e.target.files[0])} accept='.jpg,jepg' hidden />
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} className='max-w-[50px] aspect-square mx-auto my-5 rounded-full' alt="" />
            Upload profile image
          </label>
          <input type="text" placeholder='Your name' className='p-3 min-w-[300px] border-[#c9c9c9] border-1 border-solid outline-[#077eff]' />
          <textarea placeholder='Write profile bio' className='p-3 min-w-[300px] border-[#c9c9c9] border-1 border-solid outline-[#077eff]' ></textarea>
          <button type="button" className='border-none text-white bg-[#077eff] p-2 text-base cursor-pointer'>Save</button>
        </form>
        <img src={image ?URL.createObjectURL(image) :assets.logo_icon} alt="" className='h-44 rounded-full' />
      </div>
    </div>
  )
}

export default ProfileUpdate