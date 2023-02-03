import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// views
import ForumIndex from '@/components/views/forum/forumIndex'


export default function Forum() {
  return (
    <>
      <Head>
        <title>AutoSick | Forum</title>
        <meta name="description" content="Connecting car owners to several channels of help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto w-screen">
        <ForumIndex />
      </main>
    </>
  )
}
