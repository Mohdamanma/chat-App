import React, { useState } from 'react'
import assets from './../assets/assets'

function Login() {
  const [state, setState] = useState("Sign Up")
  return (
    <div className="bg-[url('/background.png')] h-screen bg-cover flex items-center justify-evenly" >
      < img src={assets.logo_big} alt="" className='h-56' />
      <form action="" method="post" className='flex flex-col gap-2 bg-white rounded-lg px-6 py-5'>
        <h2 className='font-[poppins] font-semibold text-lg '>{state}</h2>
        {state == "Sign Up" ? <input type="text" placeholder='username' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required/>: null}
         <input type="email" placeholder='email address' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required/>
        <input type="password" placeholder='password' className='py-2 px-2 outline-blue-500 border-2 border-gray-400 rounded-md' required/>

        <button type='submit' className='bg-blue-500 py-2 rounded-md text-white cursor-pointer'>
          { state =="Sign Up" ?  'Create account' : 'Login now'}
          </button>
        <div className='flex gap-3'>
          <input type="checkbox" className='cursor-pointer'/>
          <p className='text-sm text-gray-500 '>Agree to the term of uses & privacy policy</p>
        </div>
       {state == 'Sign Up' ?  <p className='text-sm'>Already have an  account?<span className='text-blue-500 font-medium cursor-pointer' onClick={()=>setState('Login')}>Login here</span></p> :
       <div>
        <p className='text-sm text-gray-500 mt-2' onClick={()=>setState('Sign Up')}>Create an account <span className='text-blue-500 font-medium cursor-pointer'>Click here</span></p>
        <p className='text-sm text-gray-500 mt-1'>Forget Password ?<span className='text-blue-500 font-medium cursor-pointer'>Click here</span></p>
       </div> }
      </form>
    </div >
  )
}

export default Login