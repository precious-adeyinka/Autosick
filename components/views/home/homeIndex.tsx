import React from 'react';

interface homeIndexPropsI {}

const HomeIndex: React.FC<homeIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='text-9xl font-medium'>HomeIndex</h1>
    </div>
  )
}

export default HomeIndex;