import React, {useState} from 'react';

// next
import Link from 'next/link';

// components
interface blogPostsPropsI {}
interface BlogI {
    photo: String;
    author: {
        name: String;
    },
    date: String;
    title: String;
    exercpt: String;
    slug: String;
}

const BlogPosts: React.FC<blogPostsPropsI> = ({}) => {
    const [data, setData] = useState<BlogI[]>([
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        },
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        },
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        },
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        },
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        },
        {
            "photo": "/assets/images/blogs/sample-image.jpg",
            "author": {
                "name": "jonas"
            },
            "date": "20 Jan 2022",
            "title": "Tesla Review Presentations",
            "exercpt": "How to create a presentation for your tesla car for your clients for posting",
            "slug": "tesla-preview-presentations"
        }
    ]);

  return (
        <section className='h-auto w-full flex flex-col items-center jusitfy-center pb-10 mt-10 md:mt-0'>
            {/* Featured Blog */}
            <Link href={encodeURI(String((data[0].slug)))} className="h-auto w-full">
                <div className='h-72 md:h-[30rem] w-full bg-gray-100 rounded-2xl flex items-end justify-center pb-0 overflow-hidden blogCoverImg'>
                    <div className='h-auto md:h-32 pb-5 md:pb-0 w-full bg-gradient-to-t from-black/90 to-bg-transparent fex flex-col items-center justify-start pl-8 md:pl-12'>
                        <h2 className='text-sm font-medium text-white'>{data[0].author.name} . {data[0].date}</h2>
                        <h1 className='w-11/12 text-xl md:text-3xl font-medium my-1 text-white'>{data[0].title}</h1>
                        <p className='w-11/12 md:w-6/12 text-sm md:text-md font-light text-white'>{data[0].exercpt}</p>
                    </div>
                </div>
            </Link>

            {/* Posts */}
            <div className='h-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {/* Post */}
                {
                    data && data.map((blog, id) => {
                        return (
                            <div 
                            key={id}
                            className='h-auto w-full flex flex-col items-start justify-start'>
                                {/* Image */}
                                <div className='h-72 w-full rounded-2xl bg-gray-100 mb-4 blogSampleImg'></div>
                                {/* Meta */}
                                <h2 className='text-sm font-medium text-black'>{blog.author.name} . {blog.date}</h2>
                                {/* Title */}
                                <Link href="#">
                                    <div className='h-auto w-full flex items-center justify-between'>
                                        <h1 className='w-full text-xl font-medium my-2 text-black'>{blog.title}</h1>
                                        <i className='la la-external-link-alt text-lg text-black'></i>
                                    </div>
                                </Link>
                                {/* Description */}
                                <p className='w-10/12 text-md font-normal text-black'>{blog.exercpt}</p>
                            </div>
                        )
                    })
                }
            </div>

            {/* Pagination */}
            <div className='h-12 w-full mt-24 flex items-center justify-between'>
                {/* Previous */}
                <div className='flex items-center justify-start space-x-3 cursor-pointer'>
                    <i className='la la-arrow-left text-lg text-black'></i>
                    <span className='font-medium text-md'>Previous</span>
                </div>
                {/* Numbering Pages */}
                <div className='h-auto w-full flex items-center justify-center space-x-5 hideOnMobile'>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-white font-medium cursor-pointer bg-black'>1</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>2</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>3</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>...</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>9</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>10</span>
                    <span className='h-8 w-8 flex items-center justify-center rounded-md text-md text-black font-medium cursor-pointer bg-transparent'>11</span>
                </div>
                {/* Next */}
                <div className='flex items-center justify-start space-x-3 cursor-pointer'>
                    <span className='font-medium text-md'>Next</span>
                    <i className='la la-arrow-right text-lg text-black'></i>
                </div>
            </div>
        </section>
    )
}

export default BlogPosts;