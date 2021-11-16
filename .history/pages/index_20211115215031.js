import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fivegram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />

    </div>
  )
}