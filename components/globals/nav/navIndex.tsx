import React, {useState, useEffect, SetStateAction} from 'react';

// NEXT
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import LoginForm from './components/forms/loginForm';
import RegisterForm from './components/forms/registerForm';

interface navIndexProps {
  showDrawer?: boolean;
  updateDrawer?: React.Dispatch<SetStateAction<boolean>>;
}

const NavIndex: React.FC<navIndexProps> = ({showDrawer, updateDrawer}) => {
  const router = useRouter();

  const [path, setPath] = useState<String>('/');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [switchForm, setSwitchForm] = useState<boolean>(false);
  const toggleDrawer = () => {
    updateDrawer && updateDrawer(!openDrawer);
    setOpenDrawer(prev => !prev)
  }
  const toggleForm = () => setSwitchForm(prev => !prev);

  useEffect(() => {
    let currentPath = router.pathname;
    setPath(currentPath);
    setOpenDrawer(showDrawer || openDrawer);
  }, [openDrawer, path, router, showDrawer]);

  return (
    <nav className='h-20 bg-transparent w-full flex items-center justify-between'>
        {/* Logo */}
        <Link href="/">
          <h1 className='text-lg font-medium group'>
            <span className='text-black group-hover:text-[#5CB9ED] transition duration-700'>Auto</span>
            <span className='text-[#5CB9ED] group-hover:text-black transition duration-700'>Sick.</span>
          </h1></Link>
        {/* Links */}
        <div className='flex items-center justify-center space-x-5 md:space-x-10'>
          <Link href="/" >
            <p className={`text-md font-medium ${path === '/' ? 'text-black activeLink transition duration-700' : 'text-gray-400'}`}>Home</p>
          </Link>
          <Link href="/blog" >
            <p className={`text-md font-normal ${path === '/blog' ? 'text-black activeLink transition duration-700' : 'text-gray-400'}`}>Blog</p>
          </Link>
          <Link href="/forum" >
            <p className={`text-md font-normal ${path === '/forum' ? 'text-black activeLink transition duration-700' : 'text-gray-400'}`}>Forum</p>
          </Link>
        </div>
        {/* Mobile Menu */}
        {/* Actions */}
        <div className='flex items-center justify-end space-x-5'>
          <button 
          onClick={toggleDrawer}
          className='bg-gray-100 rounded-full px-5 py-2 text-black flex items-center justify-center hideOnMobile'>
          Sign In
          </button>
          {/* hamburger */}
          <div 
          onClick={toggleDrawer}
          className='h-12 w-12 flex flex-col items-center justify-center space-y-2 cursor-pointer'>
            <span className='h-[3px] w-full bg-gray-800 rounded-full'></span>
            <span className='h-[3px] w-full bg-gray-800 rounded-full'></span>
          </div>
        </div>

        {/* Auth UI Modal */}
        <div className={`h-screen w-full position fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex items-center justify-end ${openDrawer ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition duration-700`}>
          {/* card */}
          <div className={`h-full w-full md:w-2/5 bg-white flex flex-col items-center justify-center space-y-10 position relative ${openDrawer ? 'translate-x-0' : 'translate-x-full'} transition duration-700`}>
            {/* Close Button */}
            <button 
            onClick={toggleDrawer}
            className='h-12 w-12 position absolute top-10 right-6 z-50 rounded-full bg-gray-100'>
             <span className='text-2xl text-gray-400 font-light'>X</span>
            </button>
            
            {
              switchForm ? 
            (<RegisterForm switchForm={toggleForm} />) 
            : (<LoginForm switchForm={toggleForm} />)
            }
          </div>
        </div>
    </nav>
  )
}

export default NavIndex;