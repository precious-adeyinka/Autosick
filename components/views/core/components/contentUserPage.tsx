import React from 'react'

// helper components
import Image from 'next/image'


//icons
import { 
    FiShare2,
    FiBookmark,
    FiHeart
} from "react-icons/fi";

// components
import ContentBlock from './contentBlock';
import ContentBlockWithoutAvatar from './contentBlockWithoutAvatar';

interface ContentUserPageI {
    data: ContentI[];
    toggleBack: React.MouseEventHandler<any>;
}

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

const ContentUserPage: React.FC<ContentUserPageI> = ({ data, toggleBack }) => {
  return (
    <div className='h-auto w-full flex flex-col items-start justify-start space-y-7 pb-32 position relative'>
        {/* Breadcrumbs */}
        <div className='flex items-center justify-center space-x-2'>
            <h3 onClick={e => toggleBack(e)} className='text-md font-bold cursor-pointer'>Gallery</h3>
            <span>/</span>
            <p className='text-gray-400'>Profile</p>
        </div>
        {/* Content Area */}
        <div className='h-52 w-full bg-transparent rounded-lg flex items-center justify-center overflow-hidden position relative'>
            <Image src={'/assets/images/hero-bg.jpg'}  alt={''} height={1000} width={1500} className='bg-contain' />
        </div>
        {/* Content & Author Information Block */}
        <div className='h-auto w-full flex flex-col items-start justify-start space-y-5'>
            <div className='h-auto w-full flex items-center justify-between'>
                <div className='h-auto w-1/2 flex items-center justify-start space-x-5'>
                    <div className='h-auto w-auto flex items-center justify-start space-x-3 md:space-x-4'>
                        <div className='h-16 w-16 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center position relative'>
                            <Image src={'/assets/images/teams/default.jpg'} fill alt="" />
                        </div>
                        <div className='h-auto w-auto flex flex-col items-start justify-start space-y-0'>
                            <h3 className='text-md font-medium'>Johnas Tega</h3>
                            <h4 className='text-sm font-normal text-gray-400'>1k Followers</h4>
                        </div>
                    </div>
                </div>
                <div className='h-auto w-1/2 flex flex-col space-y-2 md:space-y-0 md:flex-row items-end md:items-center justify-end space-x-5'>
                    <button className='w-auto bg-blue-400 rounded-full px-4 md:px-8 py-1 text-white text-sm flex items-center justify-center'>+ Create Appointment</button>
                    {/* <button className='w-24 bg-gray-100 rounded-full px-8 py-1 text-gray-700 text-sm flex items-center justify-center'>following</button> */}
                    <button className='w-24 bg-black rounded-full px-3 md:px-8 py-1 text-white text-sm flex items-center justify-center'>Follow</button>
                </div>
            </div>
        </div>
        {/* Tab View */}
         <div className='h-auto w-full bg-white flex items-center justify-start space-x-5 position sticky top-0 bg-white z-10'>
            <button className='py-2 px-2 flex items-center justify-center font-medium text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md border-b-2 border-gray-800'>Videos</button>
            <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>Articles</button>
            <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>Presentation</button>
            <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>About</button>
        </div>
        {/* Tab Content */}
        <div className='h-auto w-full'>
            {/* Galleries */}
            <section className='h-auto w-full grid grid-cols-2 md:grid-cols-3 gap-5 gap-y-12 pb-32'>
                {/* Content Block */}
                {
                    data && data.map((content, id) => {
                        return (
                            <ContentBlockWithoutAvatar 
                            key={id}
                            data={content}
                            />
                        )
                    })
                }
            </section>
        </div>
    </div>
  )
}

export default ContentUserPage