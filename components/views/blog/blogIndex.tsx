import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';
import BlogHeader from '@/components/views/blog/components/header';
import BlogPosts from './components/posts';

// next
import Link from 'next/link';

interface blogIndexPropsI {}

const BlogIndex: React.FC<blogIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full bg-white px-5 md:px-16'>
      {/* Nav Menu */}
      <NavIndex />
      {/* Blog Header */}
      <BlogHeader />
      {/* Blog Posts */}
      <BlogPosts />
      {/* Footer */}
      <footer id="footer" className="h-auto md:h-[30rem] w-full bg-transparent rounded-2xl mt-0 pb-10 flex flex-col items-center justify-center space-y-10">
        {/* CTA */}
        <div className='h-auto md:h-80 w-full bg-black rounded-2xl flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 py-10 px-5 md:px-0 md:py-0'>
          <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center md:pl-20 space-y-7'>
            <h2 className='w-full md:w-9/12 font-normal text-4xl md:text-6xl text-white leading-none'>Contact Us, <br /> We Are All Ears</h2>
            <div className='h-auto w-full flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-3'>
              <a href="mailto:hello@autosick.com" className='border border-gray-300 rounded-full px-10 py-2 text-white flex items-center justify-center'>
              hello@autosick.com
              </a>
              <a href="tel:444-444-444-444" className='border border-gray-300 rounded-full px-10 py-2 text-white flex items-center justify-center'>
              444-444-444-444
              </a>
            </div>
          </div>
          <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center space-y-5'>
            <p className='w-full md:w-8/12 font-light text-xl md:text-2xl text-white leading-normal'>Felling overhelmed? Reach out to us, we are happy to provide support, the light is always on at our place.</p>
          </div>
        </div>
        {/* copyright */}
        <div className='h-auto w-full flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0'>
          <div className='h-auto w-full md:w-1/2 flex items-center justify-center md:justify-start'>
            <p className='font-normal text-sm text-gray-400'>AutoSick - &copy; Copyright 2023 | All Rights Reserved</p>
          </div>
          <div className='h-auto w-full md:w-1/2 flex items-center justify-center md:justify-end space-x-4'>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>Privacy Policy</p>
            </Link>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>Terms of Use</p>
            </Link>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>FAQ</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndex;