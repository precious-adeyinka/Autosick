import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';

interface blogIndexPropsI {}

const BlogIndex: React.FC<blogIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full bg-white px-16'>
        {/* Nav Menu */}
        <NavIndex />
        <h1 className='text-9xl font-medium text-center'>BlogIndex</h1>
    </div>
  )
}

export default BlogIndex;