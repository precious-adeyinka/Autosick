import React, {useState, useEffect} from 'react'

import {useRouter} from 'next/router'
import Image from 'next/image'

const CommentBlock = () => {
    const [isReplying, setIsReplying] = useState<boolean>(false);
    const [likesCount, setLikesCount] = useState<number>(0);
    const [likes, setLikes] = useState<number>(0);
    const handleLike = () => {
        likesCount !== 1 ? setLikesCount(prev => prev + 1) : false
    }
    const toggleReplyForm = () => setIsReplying(prev => !prev)
    const handleSubmitReply: React.FormEventHandler<HTMLFormElement> | undefined = e => {
        e.preventDefault()
    }

    useEffect(() => {}, [likesCount])

    return (
        <div className='h-auto w-full flex flex-col md:flex-row items-start justify-start space-y-5 md:space-y-0 md:space-x-5 mt-10'>
            {/* Avatar */}
            <div className='h-auto w-[10%] flex flex-col items-start justify-center'>
                <div className='h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden position relative'>
                    <Image src={'/assets/images/teams/default.jpg'} alt="" className='bg-cover' fill />
                </div>
            </div>
            {/* Content */}
            <div className='h-auto w-[90%] flex flex-col items-start justify-start'>
                {/* Author Content */}
                <div className='h-auto w-full flex flex-col items-start justify-center'>
                    {/* Author Name */}
                    <h3 className='font-medium text-xl'>Mike Stanfield</h3>
                    {/* Author Comment */}
                    <p className='text-lg font-normal leading-snug text-gray-700'>Random comment message feel free to remove</p>
                </div>
                {/* Comment Actions */}
                <div className='h-full w-full flex items-center justify-between mt-3'>
                    <div className='h-auto w-1/2 flex items-center jusitfy-start space-x-5'>
                        <span className='font-medium text-md text-gray-600'>1w</span>
                        <button onClick={handleLike} className='font-medium text-md text-gray-600'>Like</button>
                        <button onClick={toggleReplyForm} className='font-medium text-md text-gray-600'>Reply</button>
                    </div>
                    {/* Number of likes */}
                    <div className='h-auto w-1/2 flex items-center justify-center space-x-1 cursor-pointer'>
                        <span className='font-normal text-md text-gray-500'>{likesCount}</span>
                        <i className='la la-heart text-lg text-gray-300'></i>
                    </div>
                </div>
                {/* Repy form */}
                {
                    isReplying ? (
                        <div className='h-auto w-full flex items-start justify-start mt-4'>
                            <form 
                            onSubmit={handleSubmitReply}
                            className='h-auto w-full flex flex-col items-start justify-start space-y-5'>
                                <div className='h-24 w-full border border-gray-100 rounded-lg overflow-hidden'>
                                    <input type="text" className='h-full w-full focus:outline-none p-3' placeholder='Leave a repy' />
                                </div>
                                <div className='h-auto w-full flex items-center justify-start space-x-4'>
                                    {/* submit */}
                                    <button className='h-10 w-1/2 rounded-md flex items-center justify-center text-white font-medium text-md bg-green-400' onClick={() => {}}>Submit</button>
                                    {/* cancel */}
                                    <button className='h-10 w-1/2 rounded-md flex items-center justify-center text-white font-medium text-md bg-red-400' onClick={toggleReplyForm}>Dismiss</button>
                                </div>
                            </form>
                        </div>
                    ) : null
                }
                {/* Multi Level Reply System */}
                {
                    isReplying ? null : (
                        <section className='h-auto w-full flex flex-col items-start justify-center space-y-5 mt-5'>
                            {/* Inner Comment Excerpt */}
                            <div className='h-auto w-full flex flex-col md:flex-row items-start md:items-center justify-start space-y-2 md:space-y-0 md:space-x-2'>
                                {/* Avatar */}
                                <div className='h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden position relative'>
                                    <Image src={'/assets/images/teams/default.jpg'} alt="" className='bg-cover' fill />
                                </div>
                                {/* Author Details */}
                                <div className='h-auto w-auto flex flex-col md:flex-row items-start md:items-center justify-start md:space-x-3'>
                                    {/* Author Name */}
                                    <h3 className='font-medium text-sm'>Mike Stanfield</h3>
                                    {/* Author Comment */}
                                    <p className='text-sm font-normal leading-snug text-gray-700 truncate'>Random comment message feel free to remove</p>
                                </div>
                            </div>
                            {/* Inner Comment Toggle Button */}
                            <button className='font-medium text-md'>View 21 more replies</button>
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default CommentBlock