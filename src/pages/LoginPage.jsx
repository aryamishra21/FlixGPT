import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
    const[isSignInForm,setIsSignInForm]=useState(true)
    const[showPass,setShowPass]=useState(false)
  return (
    <div className='w-[100dvw] h-[100dvh] border border-red-500 bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg")] flex items-center justify-center'>
        <form action="" className='w-[27rem] min-h-[24rem] bg-black mt-5 text-white p-14 bg-opacity-80'>
            <p className='text-3xl mb-6 font-bold'>{isSignInForm?'Sign In':'Login'}</p>
            {isSignInForm && <>
                <label htmlFor="" className='block mt-1 text-sm'>Full Name</label>
                <input type="text" className='my-2 p-3 bg-opacity-30 bg-blue-200 w-full rounded-md focus:bg-black focus:bg-opacity-100' placeholder='Name'/>
                </>}

            <label htmlFor="" className='block mt-1 text-sm'>Email</label>
            <input type="text" className='my-2 p-3 bg-opacity-30 bg-blue-200 w-full rounded-md focus:bg-black focus:bg-opacity-100' placeholder='Email' />

            <label htmlFor="" className='block mt-1 text-sm '>Password</label>
            <div className='flex items-center bg-opacity-30 bg-blue-200 w-full rounded-md my-2 focus-within:bg-black focus-within:bg-opacity-100 focus-within:border-white focus-within:border' >
            <input type={showPass?"text":"password"} className='p-3 bg-transparent outline-none w-[90%]' placeholder='Password' />
            <div className='w-[10%] cursor-pointer' onClick={()=>setShowPass(!showPass)} >
            <FaEye/>
            </div>
            </div>

            <button className='px-3 bg-red-600 hover:bg-red-700 w-full py-2.5 my-4 rounded-md text-white font-semibold'>{isSignInForm?'Sign In':'Login'}</button>
            <p className='cursor-pointer' onClick={()=>setIsSignInForm(!isSignInForm)}>{isSignInForm?'Already registered ? Login':'New user ? Sign up now'}</p>
        </form>
    </div>
  )
}

export default LoginPage