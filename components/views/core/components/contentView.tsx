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
import PostComment from '@/components/globals/templates/comments/commentsIndex'

interface ContentViewI {
    toggleBack: React.MouseEventHandler<any>;
}

const ContentView: React.FC<ContentViewI> = ({toggleBack}) => {
  return (
    <div className='h-auto w-full flex flex-col items-start justify-start space-y-7 pb-32 position relative'>
        {/* Breadcrumbs */}
        <div className='flex items-center justify-center space-x-2'>
            <h3 onClick={e => toggleBack(e)} className='text-md font-bold cursor-pointer'>Gallery</h3>
            <span>/</span>
            <p className='text-gray-400'>View</p>
        </div>
        {/* Content Area */}
        <div className='h-52 md:h-[30rem] w-full bg-transparent rounded-lg flex items-center justify-center overflow-hidden position relative'>
            <Image src={'/assets/images/hero-bg.jpg'}  alt={''} height={1000} width={1500} className='bg-contain' />
        </div>
        {/* Content & Author Information Block */}
        <div className='h-auto w-full flex flex-col items-start justify-start space-y-5'>
            <div className='h-auto w-full flex items-center justify-start'>
                <h3 className='text-xl font-medium'>When you are stuck in traffic 3 things you must do</h3>
            </div>
            <div className='h-auto w-full flex flex-col md:flex-row space-y-7 md:space-y-0 items-start md:items-center justify-between'>
                <div className='h-auto w-full md:w-1/2 flex items-center justify-start space-x-5'>
                    <div className='h-auto w-auto flex items-center justify-start space-x-4'>
                        <div className='h-16 w-16 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center position relative'>
                            <Image src={'/assets/images/teams/default.jpg'} fill alt="" />
                        </div>
                        <div className='h-auto w-auto flex flex-col items-start justify-start space-y-0'>
                            <h3 className='text-md font-medium'>Johnas Tega</h3>
                            <h4 className='text-sm font-normal text-gray-400'>1k Followers</h4>
                        </div>
                    </div>
                    <div className='h-auto w-auto flex items-center justify-start'>
                        <button className='w-24 bg-black rounded-full px-8 py-1 text-white text-sm'>follow</button>
                    </div>
                </div>
                <div className='h-auto w-full md:w-1/2 flex items-center justify-start md:justify-end space-x-5'>
                    <div className='flex items-center justify-start space-x-2'>
                        <span className='text-gray-500'>32k</span>
                        <FiHeart className='text-gray-600 text-xl cursor-pointer' />
                    </div>
                    <FiShare2 className='text-gray-600 text-xl cursor-pointer' />
                    <FiBookmark className='text-gray-600 text-xl cursor-pointer' />
                </div>
            </div>
        </div>
        {/* Description *& Timestamp */}
        <div className='h-auto w-full rounded-lg bg-gray-50 p-5 flex flex-col items-start justify-start space-y-4'>
            <div className='h-auto w-full flex items-center justify-start space-x-7'>
                <h3 className='font-medium text-md'>309k views</h3>
                <h3 className='font-normal text-sm text-gray-400'>7 days ago</h3>
            </div>
            <p className='w-full md:w-10/12 leading-loose text-md font-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, alias enim. Modi dolor consectetur, tempora molestias quo vero! Minus, vel iure tempora ullam adipisci non consectetur? Aliquid fuga sequi obcaecati. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fuga nisi beatae. Sequi iusto officiis, sunt veniam totam in similique. Fugit veritatis ducimus sit minima dolores laboriosam quos maxime velit?</p>
        </div>
        {/* Comments */}
        <div className='h-auto w-full md:w-3/5'>
            <PostComment />
        </div>
    </div>
  )
}

export default ContentView