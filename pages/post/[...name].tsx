import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// views
import PostIndex from '@/components/views/blog/post/postIndex'

interface postIndexPropsI {
    title: String
}

export default function Post({ title } : postIndexPropsI) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Connecting car owners to several channels of help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Line Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* Open Graph */}

        {/* Twitter Card */}
      </Head>
      <main className="h-auto w-screen">
        <PostIndex />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
        title: ""
    }, // will be passed to the page component as props
  }
}