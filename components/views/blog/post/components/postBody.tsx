import React from 'react'

import {useRouter} from 'next/router'

const PostBody = () => {
    const router = useRouter();
    const postSlug = router.query.name;

    return (
        <div className='h-auto w-full my-16 md:my-32 flex flex-col items-start justify-start space-y-7'>
            <h2 className='w-10/12 md:w-full text-4xl font-medium'>What is Lorem Ipsum?</h2>
            <p className='text-xl md:text-2xl leading-loose font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {/* Statistics Widget */}
            <div className='h-12 w-full flex items-center justify-between'>
                <div className='flex items-center justify-center space-x-3 cursor-pointer'>
                    <i className='la la-share text-2xl'></i>
                    <span className='font-medium text-2xl'>Share</span>
                </div>
                <div className='flex items-center justify-center space-x-7'>
                    {/* Views */}
                    <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                        <i className='la la-eye text-2xl'></i>
                        <span className='font-medium text-2xl'>3k</span>
                    </div>
                    {/* Likes */}
                    <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                        <i className='la la-thumbs-up text-2xl'></i>
                        <span className='font-medium text-2xl'>10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostBody