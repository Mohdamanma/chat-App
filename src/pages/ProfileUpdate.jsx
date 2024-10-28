import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { auth, db } from '../confiq/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { upload } from '../lib/Upload'
import { AppContext } from '../context/AppContext'

function ProfileUpdate() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState(false)
  const [prevImage, setPrevImage] = useState('')
  const [uid, setUid] = useState('')

  const { setUserData } = useContext(AppContext)


  // To Fetch User Data
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUid(user.uid)
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.data().name) {
          setName(docSnap.data().name)
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio)
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar)
        }
      } else {
        navigate('/')
      }
    })
  }, [])


  const profileUpdate = async (e) => {
    e.preventDefault()
    try {
      if (!prevImage && image) {
        toast.error("Upload Profile Picture")
      }
      const docRef = doc(db, "users", uid)
      if (image) {
        const imgURL = await upload(image)
        await updateDoc(docRef, {
          avatar: imgURL,
          name: name,
          bio: bio
        })
      } else {
        updateDoc(docRef, {
          name: name,
          bio: bio
        })
      }
      const data = await getDoc(docRef)
      setUserData(data.data())
      navigate('/chat')
    } catch (error) {
      console.log("error")
      toast.error(error.message)
    }
    console.log("User Profile Updated")
  }

  return (
    <div className="bg-[url('/background.png')] min-h-screen bg-cover flex justify-center items-center">
      <div className='flex items-center justify-between min-w-[700px] bg-white px-8  rounded-lg'>
        <form onSubmit={profileUpdate} action="" className='flex flex-col gap-3 p-8'>
          <h2 className='font-medium font-[poppins]'>Profile Details</h2>
          <label className='flex items-center gap-2 text-gray-600 cursor-pointer'>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} accept='.jpg,jepg' hidden />
            <img src={image ? URL.createObjectURL(image) : prevImage ? prevImage: assets.avatar_icon} className='max-w-[50px] aspect-square mx-auto my-5 rounded-full' alt="" />
            Upload profile image
          </label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Your name' className='p-3 min-w-[300px] border-[#c9c9c9] border-1 border-solid outline-[#077eff]' />
          <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder='Write profile bio' className='p-3 min-w-[300px] border-[#c9c9c9] border-1 border-solid outline-[#077eff]' ></textarea>
          <button type="submit" className='border-none text-white bg-[#077eff] p-2 text-base cursor-pointer'>Save</button>
        </form>
        <img src={image ? URL.createObjectURL(image) : prevImage ? prevImage  :  assets.logo_icon} alt="" className='h-44 rounded-full' />
      </div>
    </div>
  )
}

export default ProfileUpdate