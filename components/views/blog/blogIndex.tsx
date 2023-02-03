import React from 'react';

interface blogIndexPropsI {}

const BlogIndex: React.FC<blogIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='text-9xl font-medium'>BlogIndex</h1>
    </div>
  )
}

export default BlogIndex;