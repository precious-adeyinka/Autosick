import React from 'react';

interface navIndexProps {}

const NavIndex: React.FC<navIndexProps> = ({}) => {
  return (
    <nav className='h-20 bg-gray-200 w-full flex items-center justify-center'>
        <h1 className='text-lg font-medium'>Nav Menu</h1>
    </nav>
  )
}

export default NavIndex;