import React from 'react';

// NEXT
import Image from 'next/image'
import Link from 'next/link'

interface navIndexProps {}

const NavIndex: React.FC<navIndexProps> = ({}) => {
  return (
    <nav className='h-20 bg-transparent w-full flex items-center justify-between'>
        {/* Logo */}
        <h1 className='text-lg font-medium'>AS.</h1>
        {/* Links */}
        <div className='flex items-center justify-center space-x-10 hideOnMobile'>
          <Link href="/" >
            <p className='text-md font-medium text-black activeLink'>Home</p>
          </Link>
          <Link href="/blog" >
            <p className='text-md font-normal text-gray-400'>Blog</p>
          </Link>
          <Link href="/forum" >
            <p className='text-md font-normal text-gray-400'>Forum</p>
          </Link>
        </div>
        {/* Actions */}
        <div className='flex items-center justify-end space-x-5'>
          <button className='bg-gray-100 rounded-full px-5 py-2 text-black flex items-center justify-center'>
          Sign In
          </button>
          {/* hamburger */}
          <div className='h-12 w-12 flex flex-col items-center justify-center space-y-2 cursor-pointer'>
            <span className='h-[3px] w-full bg-gray-800 rounded-full'></span>
            <span className='h-[3px] w-full bg-gray-800 rounded-full'></span>
          </div>
        </div>
    </nav>
  )
}

export default NavIndex;