import React, {useState, useEffect, SetStateAction} from 'react';

//icons
import { FiMail, FiSearch} from "react-icons/fi";

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

const CoreNavIndex: React.FC<navIndexProps> = ({showDrawer, updateDrawer}) => {
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
    <nav className='h-20 w-full bg-white w-full flex items-center justify-between position sticky top-0 z-50'>
        {/* Logo */}
        <div className='flex items-center justify-start md:space-x-5'>
            {/* hamburger */}
            {/* <div className='hidden h-12 w-5 md:flex flex-col items-start justify-center space-y-1 cursor-pointer'>
                <span className='h-[2px] w-1/2 bg-gray-800 rounded-full'></span>
                <span className='h-[2px] w-full bg-gray-800 rounded-full'></span>
                <span className='h-[2px] w-3/5 bg-gray-800 rounded-full'></span>
            </div> */}
            {/* logo */}
            <Link href="/">
                <h1 className='text-lg font-medium group'>
                    <span className='text-black group-hover:text-[#5CB9ED] transition duration-700'>Auto</span>
                    <span className='text-[#5CB9ED] group-hover:text-black transition duration-700'>Sick.</span>
                </h1>
            </Link>
        </div>

        {/* Search */}
        <div className='h-12 w-1/2 rounded-full flex items-center justify-center border border-gray-200 bg-transparent overflow-hidden'>
         <input 
         type="text" 
         placeholder='Search' 
         className='h-full w-full focus:outline-none px-5' />
         <button className='bg-gray-100 px-5 h-full'>
            <FiSearch className='text-2xl text-gray-400 cursor-pointer' />
         </button>
        </div>
        
        {/* Actions */}
        <div className='flex items-center justify-end space-x-2 md:space-x-5'>
          <FiMail className='text-2xl text-gray-400 cursor-pointer' />
          {/* Avatar */}
          <div className='flex flex-col items-start justify-start'>
            {/* photo */}
            <div className='h-10 md:h-12 w-10 md:w-12 bg-gray-100 rounded-full cursor-pointer flex items-center justify-center overflow-hidden position relative'>
                <Image src={'/assets/images/teams/default.jpg'} fill alt={''} />
            </div>
          </div>
        </div>

    </nav>
  )
}

export default CoreNavIndex;