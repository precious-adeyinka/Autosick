import React, {useState, useEffect} from 'react'
// next
import Image from 'next/image'
// icons
import { FiTriangle, FiShare2 } from "react-icons/fi";
import Comments from '@/components/globals/templates/comments/commentsIndex';

interface ThreadBlockI {
    cb: React.Dispatch<React.SetStateAction<number>>;
}

const ThreadBlock: React.FC<ThreadBlockI> = ({ cb }) => {
    const [dialog, setDialog] = useState<boolean>(false);
    const toggleDialog = () => {
        setDialog(prev => !prev);
        cb(1);
    }
    
    return (
        <div 
        className='h-auto w-full flex flex-col md:flex-row items-start justify-between pb-5 border-b border-gray-200'>
            {/* Info */}
            <div className='h-auto w-full md:w-1/2 flex items-start justify-start space-x-8'>
                <div className='w-[10%] flex flex-col items-start justify-start'>
                    <div className='h-12 w-12 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center position relative'>
                        <Image src={'/assets/images/teams/default.jpg'} alt="" fill />
                    </div>
                </div>
                <div className='h-auto w-[90%] flex flex-col items-start justify-start space-y-1'>
                    <div className='flex items-center justify-start space-x-3'>
                        <h2 className='text-sm text-gray-500 font-medium'>James Stone</h2>
                        <span>-</span>
                        <span className='text-sm text-gray-500'>Mar 22nd, 2019</span>
                    </div>
                    <div 
                    onClick={toggleDialog}
                    className='flex items-start justify-start'>
                        <h1 className='w-10/12 text-md font-medium leading-normal cursor-pointer transition duration-700 hover:underline'>How to choose a modern business car in 2023?</h1>
                    </div>
                </div>
            </div>
            {/* Stats BLOCKS */}
            <div className='h-auto w-full md:w-1/2 grid grid-cols-3 gap-0 mt-7 md:mt-0'>
                {/* Replies */}
                <div className='flex flex-col items-center justify-center space-y-0'>
                    <h2 className='text-lg font-medium'>43</h2>
                    <p className='text-md text-gray-500'>Replies</p>
                </div>
                {/* Views */}
                <div className='flex flex-col items-center justify-center space-y-0'>
                    <h2 className='text-lg font-medium'>43</h2>
                    <p className='text-md text-gray-500'>Views</p>
                </div>
                {/* Votes */}
                <div className='flex items-center justify-start space-x-3'>
                    {/* Upvotes */}
                    <div className='flex flex-col items-center justify-center space-y-0'>
                        <FiTriangle className='la la-chart-pie text-xl text-green-500' />
                        <p className='text-md text-gray-500'>100</p>
                    </div>
                    {/* Downvotes */}
                    <div className='flex flex-col items-center justify-center space-y-0'>
                        <FiTriangle className='la la-chart-pie text-xl text-red-500 transform rotate-180' />
                        <p className='text-md text-gray-500'>350</p>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {
                dialog ? (
                    <div className='h-screen w-full bg-black/90 position fixed top-0 left-0 z-50 flex items-center justify-center'>
                        {/* Board */}
                        <div className='h-full md:h-[35rem] w-full md:w-4/5 bg-white position relative px-5 md:px-10 py-10 overflow-x-hidden overflow-y-auto'>
                            {/* close */}
                            <div 
                            onClick={toggleDialog}
                            className='text-sm text-red-500 cursor-pointer pointer absolute top-8 right-8'>X close</div>

                            {/* Header */}
                            <div className='flex items-center justify-start space-x-3'>
                                <div className='h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden position relative'>
                                    <Image src={"/assets/images/teams/default.jpg"} alt="" fill />
                                </div>
                                <div className='flex flex-col items-start justify-center space-y-0'>
                                    <h3 className='font-medium'>Brother Man</h3>
                                    <p className='text-sm text-gray-500'>1 min ago</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='flex flex-col items-start justify-start space-y-3 mt-8'>
                                <h2 className='text-2xl font-medium'>What is the best way to wash a Tesla at home?</h2>
                                <p className='text-lg text-gray-700 leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy.</p>
                            </div>

                            {/* Statistics Widget */}
                            <div className='h-12 w-full flex items-center justify-between mt-10'>
                                <div className='flex items-center justify-center space-x-3 cursor-pointer'>
                                    <FiShare2 className='la la-chart-pie text-xl text-black' />
                                    <span className='font-normal text-lg'>Share</span>
                                </div>
                                <div className='flex items-center justify-center space-x-5'>
                                    {/* Views */}
                                    <div className='flex items-center justify-center space-x-1 cursor-pointer'>
                                        <FiTriangle className='la la-chart-pie text-xl text-black hover:text-blue-500 transition duration-700' />
                                        <span className='font-normal text-lg'>3k</span>
                                    </div>
                                    {/* Likes */}
                                    <div className='flex items-center justify-center space-x-1 cursor-pointer'>
                                        <FiTriangle className='la la-chart-pie text-xl text-black transform rotate-180 hover:text-red-500 transition duration-700' />
                                        <span className='font-normal text-lg'>10</span>
                                    </div>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className='h-auto w-full md:w-3/5 mr-auto mt-8'>
                                <Comments />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default ThreadBlock