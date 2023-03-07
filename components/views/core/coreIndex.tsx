import React, {useState, useEffect} from 'react'
// redux
import { useSelector } from 'react-redux';

// next
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

//icons
import { 
    FiMail, 
    FiGrid, 
    FiBookOpen, 
    FiBriefcase, 
    FiHeadphones, 
    FiSettings, 
    FiMoreVertical
} from "react-icons/fi";

// components
import CoreNavIndex from '@/components/globals/nav/coreNavIndex';
import ContentGallery from './components/contentGallery';
import ContentView from './components/contentView';
import ContentUserPage from './components/contentUserPage';

interface ContentI {
    url_slug: URL;
    author_profile_slug: URL;
    avatar_url: any;
    cover_url: any;
    content_title: String;
    author_name: String;
    views_count: number;
    date_created: String;
}

const CoreIndex = () => {
    // router
    const router = useRouter()

    // store
    const {isLoggedIn} = useSelector((state:any) => state.user)

    const [contents, setContents] = useState<ContentI[]>([
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
        {
            url_slug: new URL('https://www.google.com'),
            author_profile_slug: new URL('https://www.google.com'),
            avatar_url: '/assets/images/teams/default.jpg',
            cover_url: '/assets/images/hero-bg-3.jpg',
            content_title: 'When you are stuck in traffic 3 things you must do',
            author_name: 'Bryan Williams',
            views_count: 390,
            date_created: '7 days ago',
        },
    ]);

    // view change states
    const [showGallery, setShowGallery] = useState<boolean>(true);
    const [showContentView, setShowContentView] = useState<boolean>(false);
    const [showContentUser, setShowContentUser] = useState<boolean>(false);

    const toggleGallery:React.MouseEventHandler<any> | undefined = () => {
        setShowGallery(true)
        setShowContentView(false)
        setShowContentUser(false)
    }

    const toggleContentView:React.MouseEventHandler<any> | undefined = () => {
        setShowContentView(true)
        setShowGallery(false)
        setShowContentUser(false)
    }

    const toggleContentUser:React.MouseEventHandler<any> | undefined = () => {
        setShowContentUser(true)
        setShowContentView(false)
        setShowGallery(false)
    }

    const [ShowMenuPanel, setShowMenuPanel] = useState<boolean>(false);
    const toggleShowMenuPanel:React.MouseEventHandler<any> | undefined = () => setShowMenuPanel(prev => !prev)

    const init = async () => {
        await router?.push('/')
    }

    if (!isLoggedIn) {
        console.log(router)
        init()
        return (<div className='h-screen w-full flex items-center justify-center font-medium text-2xl'>Loading...</div>)
    }
    return (
        <div className='h-screen w-full bg-white overflow-hidden scroll-smooth transition duration-700'>
            {/* Nav Menu */}
            
            <div className='px-5 md:px-7'>
                <CoreNavIndex />
            </div>
            {/* Content */}
            <section className='h-full w-full flex items-center justify-start pt-3 position relative'>
                {/* Menu */}
                <div className={`h-full w-3/5 md:w-[20%] bg-white md:flex flex-col items-start justify-start space-y-1 overflow-hidden position fixed md:relative top-0 left-0 z-50 px-2 md:px-2 ${ShowMenuPanel ? 'flex' : 'hidden'} pt-16 md:pt-0`}>
                    {/* Close */}
                    <div 
                    className='hideOnDesktop position absolute top-8 right-5 text-red-500' 
                    onClick={toggleShowMenuPanel}>Close</div>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiGrid className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Home</p>
                        </div>
                    </Link>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiMail className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Messages</p>
                        </div>
                    </Link>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiBookOpen className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Library</p>
                        </div>
                    </Link>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiBriefcase className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Appointments</p>
                        </div>
                    </Link>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiHeadphones className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Support</p>
                        </div>
                    </Link>
                    {/* link */}
                    <Link href="#" className='w-full rounded-lg pl-3 md:pl-5 hover:bg-gray-100 transition duration-300'>
                        <div className='h-12 w-full flex items-center justify-start space-x-5 cursor-pointer'>
                            <FiSettings className='text-2xl text-gray-700 cursor-pointer' />
                            <p className='text-md text-gray-700'>Settings</p>
                        </div>
                    </Link>
                </div>
                {/* View */}
                <div className='h-full w-full pl-3 overflow-x-hidden overflow-y-auto pr-5 md:pr-7'>
                    {
                        showGallery ? (<ContentGallery 
                            toggleBack={toggleGallery}
                            toggleView={toggleContentView} 
                            toggleUser={toggleContentUser}
                            data={contents} 
                        />) : null
                    }
                    {
                        showContentView ? (<ContentView 
                            toggleBack={toggleGallery}
                        />) : null
                    }
                    {
                        showContentUser ? (<ContentUserPage 
                            toggleBack={toggleGallery}
                            data={contents} 
                        />) : null
                    }
                </div>
            </section>

            {/* Decorative widgets for forum panels on mobile */}
            <section>
                {/* Categories */}
                <div 
                onClick={toggleShowMenuPanel}
                className='h-12 w-12 rounded-r-full bg-black position fixed left-0 top-1/2 flex items-center justify-center cursor-pointer hideOnDesktop'>
                <FiGrid className='la la-chart-pie text-xl text-white' />
                </div>
            </section>
        </div>
    )
}

export default CoreIndex