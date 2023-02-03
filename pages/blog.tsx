import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// views
import BlogIndex from '@/components/views/blog/blogIndex'


export default function Blog() {
  return (
    <>
      <Head>
        <title>AutoSick | Blog</title>
        <meta name="description" content="Connecting car owners to several channels of help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto w-screen">
        <BlogIndex />
      </main>
    </>
  )
}
