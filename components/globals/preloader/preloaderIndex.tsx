import React from 'react';

interface preladerIndexProps {}

const preloaderIndex: React.FC<preladerIndexProps> = ({}) => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='text-9xl font-medium'>preloaderIndex</h1>
    </div>
  )
}

export default preloaderIndex;