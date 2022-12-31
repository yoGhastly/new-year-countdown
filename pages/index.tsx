import type { NextPage } from 'next'
import Head from 'next/head'
import { Countdown } from '../components/NewYearCountDown'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>New Year Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
          New Year Counter 2023! 🎉
        </h1>
        <Countdown />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://twitter.com/diego_jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Diego
        </a>
      </footer>
    </div>
  )
}

export default Home
