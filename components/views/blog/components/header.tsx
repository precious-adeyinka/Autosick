import React from 'react';

// components
interface blogHeaderI {}

const BlogHeader: React.FC<blogHeaderI> = ({}) => {
  return (
    <header className='h-auto md:h-96 w-full flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 mt-8 md:mt-0'>
        {/* Left */}
        <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center'>
            <h2 className='text-lg font-medium'>The Blog</h2>
            <h1 className='w-11/12 text-4xl md:text-6xl font-medium my-4'>Writings from our community and other sources</h1>
            <p className='w-10/12 md:w-6/12 text-lg font-normal'>The latest industry news, trends, technologies and resources</p>
        </div>
        {/* Right */}
        <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center md:pl-52'>
            <p className='w-11/12 md:w-9/12 text-lg font-medium'>New stories, the latest in technology, solutions and updates.</p>
            <form action="" className='h-auto w-full md:w-10/12 my-5'>
                <div className='h-12 w-full border border-gray-300 rounded-full flex items-center justify-center overflow-hidden position relative'>
                    <input type="text" placeholder='Enter your email address' className='w-full h-full focus:outline-none px-5'/>
                    <button className='h-full w-60 rounded-full bg-black text-white flex items-center justify-center text-md font-medium'>Subscribe</button>
                </div>
            </form>
        </div>
    </header>
  )
}

export default BlogHeader;