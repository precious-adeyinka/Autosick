import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

//icons
import { 
    FiMoreVertical,
    FiPlusSquare, 
    FiShare2
} from "react-icons/fi";

interface ContentBlockWithoutAvatarPropsI {
    data: ContentI;
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

const ContentBlockWithoutAvatar: React.FC<ContentBlockWithoutAvatarPropsI>  = ({ data }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const handlePopup = () => setShowPopup(prev => !prev)

    return (
        <div className='h-auto w-full flex flex-col items-center justify-center space-y-4'>
            {/* image */}
            <Link href={data.url_slug} className="h-auto w-full">
                <div className='h-32 md:h-52 w-full bg-gray-50 rounded-md overflow-hidden position relative flex items-center justify-center'>
                    <Image src={data.cover_url} fill alt="" />
                </div>
            </Link>
            {/* user */}
            <div className='h-auto w-full flex items-start justify-start space-x-3'>
                {/* <div className='h-auto w-[20%]'>
                    <Link href={data.author_profile_slug}>
                        <div className='h-12 w-12 rounded-full bg-gray-50 overflow-hidden flex items-center justify-center position relative cursor-'>
                            <Image src={data.avatar_url} fill alt="" />
                        </div>
                    </Link>
                </div> */}
                <div className='h-auto w-full flex flex-col items-start justify-start space-y-3'>
                    {/* title */}
                    <div className='flex items-start justify-between group position relative'>
                        <Link href={data.url_slug}>
                            <h2 className='w-full md:w-10/12 text-sm font-medium cursor-pointer leading-tight'>{data.content_title}</h2>
                        </Link>
                        <FiMoreVertical onClick={handlePopup} className={`text-2xl text-gray-700  cursor-pointer group-hover:visible ${showPopup ? 'visible' : 'invisible'}`} />
                        {/* popdialog */}
                        {showPopup ? (
                             <div className='h-20 w-8/12 bg-white shadow-lg rounded-xl position absolute top-full bottom-0 right-0 flex flex-col items-start justify-start space-y-0 overflow-hidden'>
                                <div className='h-10 w-full flex items-center justify-start space-x-4 cursor-pointer hover:bg-gray-50 p-5'>
                                    <FiPlusSquare className='text-gray-600' />
                                    <span className='tex-md text-gray-600'>Add to library</span>
                                </div>
                                <div className='h-10 w-full flex items-center justify-start space-x-4 cursor-pointer hover:bg-gray-50 p-5'>
                                    <FiShare2 className='text-gray-600' />
                                    <span className='tex-md text-gray-600'>Share</span>
                                </div>
                             </div>
                        ) : null}
                    </div>
                    <div className='flex flex-col items-start justify-start space-y-1'>
                        {/* meta */}
                        <p className='text-sm text-gray-400'>{`${data.views_count} views . ${data.date_created}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBlockWithoutAvatar