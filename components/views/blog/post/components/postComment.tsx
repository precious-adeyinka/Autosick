import React, {useState, useEffect} from 'react'

import {useRouter} from 'next/router'
import Image from 'next/image'

// components
import CommentBlock from './templates/commentBlock';

const PostComment = () => {
    const router = useRouter();
    const postSlug = router.query.name;

    const [comments, setComments] = useState<number[]>([1,2,3,4,5])

    return (
        <div className='h-auto w-full md:w-1/2 mx-auto my-32 flex flex-col items-start justify-start space-y-7'>
            <label htmlFor="comment" className='text-2xl'>Leave a comment</label>
            <form className='h-auto w-full'>
                <div className='h-16 w-full border border-gray-300 rounded-lg position relative flex items-center justify-between pr-3 overflow-hidden'>
                    <input id="comment" type="text" placeholder='Write a comment' className='px-5 h-full w-full focus:outline-none text-xl' />
                    <i className='la la-paper-plane text-3xl cursor-pointer text-gray-800'></i>
                </div>
            </form>

            {/* Comments Tree */}
            <section  className='h-auto w-full'>
                {/* Comment Block */}
                {
                    comments && comments.map((comment, id) => {
                        return (
                            <CommentBlock key={id} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default PostComment