import React from 'react'

interface loginFormProps {
    switchForm: () => void;
}

const LoginForm: React.FC<loginFormProps> = ({switchForm}) => {
    const changeForm: React.MouseEventHandler<HTMLButtonElement> | undefined = e => {
        e.preventDefault();
        switchForm();
    }
    return (
     <form className='h-auto w-4/5 md:w-3/5 flex flex-col items-center justify-center'>
        {/* caption */}
        <div className='flex flex-col items-center justify-center space-y-4 my-10'>
            <h2 className='font-medium text-2xl'>Welcome back</h2>
            <p className='w-9/12 text-md text-gray-700 text-center'>You&lsquo;ve been missed, please fill in your details to continue</p>
        </div>
        {/* Email Address */}
        <div className='h-12 w-full flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-2 overflow-hidden my-1'>
            <i className='la la-at text-2xl text-gray-400'></i>
            <input type="text" className='h-full w-full bg-transparent focus:outline-none' placeholder='Email Address' />
        </div>
        {/* Password Address */}
        <div className='h-12 w-full flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-2 overflow-hidden my-1'>
            <i className='la la-shield text-2xl text-gray-400'></i>
            <input type="password" className='h-full w-full bg-transparent focus:outline-none' placeholder='Password' />
        </div>
        {/* Forgot Password */}
        <div className='h-auto w-full flex items-center justify-end my-1'>
            <button className='font-normal text-sm cursor-pointer text-[#5CB9ED]'>Forgot Password?</button>
        </div>
        {/* Submit */}
        <button type="submit" className='h-12 w-full bg-black text-lg text-white flex items-center justify-center rounded-lg my-1'>Sign In</button>
        {/* Switch Form */}
        <div className='h-auto w-full flex items-center justify-center my-1'>
            <p className='flex items-center justify-center space-x-2'>
                <span className='text-sm text-gray-400'>Are you new here?</span>
                <button onClick={changeForm} className='font-medium text-sm cursor-pointer text-[#5CB9ED]'>Sign Up</button>
            </p>
        </div>
   </form>
  )
}

export default LoginForm