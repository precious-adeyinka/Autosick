import React from 'react';

interface forumIndexPropsI {}

const ForumIndex: React.FC<forumIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='text-9xl font-medium'>ForumIndex</h1>
    </div>
  )
}

export default ForumIndex;