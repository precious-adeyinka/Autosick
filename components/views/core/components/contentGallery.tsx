import React from 'react'

// components
import ContentBlock from './contentBlock';

interface ContentGalleryI {
    data: ContentI[];
    toggleView: React.MouseEventHandler<any>;
    toggleUser: React.MouseEventHandler<any>;
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

const ContentGallery: React.FC<ContentGalleryI> = ({ data, toggleView, toggleUser, toggleBack }) => {
    return (
        <div className='h-full w-full flex flex-col items-start justify-start space-y-7 position relative'>
            {/* content */}
            <div className='h-auto w-full bg-white flex items-center justify-start space-x-5 position sticky top-0 bg-white z-10'>
                <button className='py-2 px-2 flex items-center justify-center font-medium text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md border-b-2 border-gray-800'>All</button>
                <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>Videos</button>
                <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>Articles</button>
                <button className='py-2 px-2 flex items-center justify-center text-md text-gray-800 bg-transparent hover:bg-gray-100 hover:rounded-md'>Presentation</button>
            </div>
            {/* Galleries */}
            <section className='h-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-12 pb-32'>
                {/* Content Block */}
                {
                    data && data.map((content, id) => {
                        return (
                            <ContentBlock 
                            navigateFunc={toggleView}
                            navigateUserFunc={toggleUser}
                            key={id}
                            data={content}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default ContentGallery