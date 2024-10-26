import React, { useState } from 'react'
import assets from './../assets/assets'
import { app, login } from '../confiq/firebase'
import { signup } from '../confiq/firebase'

function Login() {
  const [currState, setState] = useState("Sign Up")
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  })
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (currState == 'Sign Up') {
      signup(formData)
    } else {
      login(formData)
    }
  }


  return (
    <div className="bg-[url('/background.png')] h-screen bg-cover flex items-center justify-evenly" >
      < img src={assets.logo_big} alt="" className='h-56' />
      <form onSubmit={onSubmitHandler} action="" method="post" className='flex flex-col gap-2 bg-white rounded-lg px-6 py-5'>
        <h2 className='font-[poppins] font-semibold text-lg '>{currState}</h2>
        {currState == "Sign Up" ? <input type="text" name='name' value={formData.name} onChange={formHandler} placeholder='username' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required /> : null}
        <input type="email" name='email' value={formData.email} onChange={formHandler} placeholder='email address' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required />
        <input type="password" name='password' value={formData.password} onChange={formHandler} placeholder='password' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required />

        <button type='submit' className='bg-blue-500 py-2 rounded-md text-white cursor-pointer'>
          {currState == "Sign Up" ? 'Create account' : 'Login now'}
        </button>
        <div className='flex gap-3'>
          <input type="checkbox" className='cursor-pointer' />
          <p className='text-sm text-gray-500 '>Agree to the term of uses & privacy policy</p>
        </div>
        {currState == 'Sign Up' ? <p className='text-sm'>Already have an  account?<span className='text-blue-500 font-medium cursor-pointer' onClick={() => setState('Login')}>Login here</span></p> :
          <div>
            <p className='text-sm text-gray-500 mt-2' onClick={() => setState('Sign Up')}>Create an account <span className='text-blue-500 font-light cursor-pointer'>Click here</span></p>
            <p className='text-sm text-gray-500 mt-1'>Forget Password ? <span className='text-blue-500 font-light cursor-pointer'>Click here</span></p>
          </div>}
      </form>
    </div >
  )
}

export default Login