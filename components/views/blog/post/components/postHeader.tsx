import React from 'react'

import {useRouter} from 'next/router'
import Link from 'next/link'

const PostHeader = () => {
    const router = useRouter();
    const postSlug = router.query.name;

    return (
        <div className='h-auto w-full mt-10 flex flex-col items-start justify-start space-y-5'>
            {/* Breadcrumbs */}
            <div className='flex items-center justify-center space-x-2'>
                <Link href="/blog"><h3 className='text-md font-bold'>Blog</h3></Link>
                <span>/</span>
                <p className='text-gray-400'>{postSlug}</p>
            </div>
            {/* Banner */}
            <div className='h-72 md:h-[30rem] w-full bg-gray-100 rounded-2xl flex items-end justify-center pb-0 overflow-hidden blogCoverImg'>
                    <div className='h-auto md:h-32 pb-5 md:pb-0 w-full bg-gradient-to-t from-black/90 to-bg-transparent fex flex-col items-center justify-start pl-8 md:pl-12'>
                        <h2 className='text-sm font-medium text-white'>Jonas . 20 Jan 2023</h2>
                        <h1 className='w-11/12 text-xl md:text-3xl font-medium my-1 text-white'>Tesla Review Presentations</h1>
                    </div>
                </div>
        </div>
    )
}

export default PostHeader