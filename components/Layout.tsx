import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="container mx-auto min-h-screen min-w-full bg-[url('./img/bg.jpg')] bg-no-repeat  bg-cover " >
    <div className=' bg-gray-400 bg-opacity-40 min-h-screen'>  <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <header className="flex 26-h flex-col items-start p-6  text-left  " >
        <Link className=' text-white text-4xl font-monos  ' href="/">Y Bagaria</Link>
      </header>
      {children}
    </div>
  </div >
)

export default Layout
