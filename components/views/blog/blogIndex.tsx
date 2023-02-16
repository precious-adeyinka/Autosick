import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';
import BlogHeader from '@/components/views/blog/components/header';
import BlogPosts from './components/posts';
import Footer from '@/components/globals/templates/footer';

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
      <Footer />
    </div>
  )
}

export default BlogIndex;