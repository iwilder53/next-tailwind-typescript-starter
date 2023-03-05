import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Welcome = ({ children }: Props) => (
    <div className="container mx-auto  rad box-border min-h-screen min-w-full   bg-[url('./img/bg.jpg')] bg-no-repeat  bg-cover ">
        <div className='pt-6 pl-4 col-auto'>
            <div >

                {children}
            </div>

        </div>
        <div className='container bg-slate-100 opacity-30 min-h-screen min-w-fit  rounded-3xl mt-6 m-6 justify-self-center ' >

        </div>

    </div>
)

export default Welcome
