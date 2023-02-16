import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';
import PostHeader from '@/components/views/blog/post/components/postHeader';
import PostBody from '@/components/views/blog/post/components/postBody';
import PostComment from '@/components/views/blog/post/components/postComment';
import Footer from '@/components/globals/templates/footer';

// next
import Link from 'next/link';

interface postIndexPropsI {}

const PostIndex: React.FC<postIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full bg-white px-5 md:px-16'>
      {/* Nav Menu */}
      <NavIndex />
      {/* Header */}
      <PostHeader />
      {/* Body */}
      <PostBody />
      {/* Comment */}
      <PostComment />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PostIndex;