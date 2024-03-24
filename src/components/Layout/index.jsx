import React, { useState } from 'react'
import Aside from './Aside'
import Header from './Header'

const Index = ({ children }) => {
    return (
        <>
            <main className='p-2.5 flex min-h-screen relative bg-bgColor'>
                <Aside />
                <section className={` pl-5 flex-1 shrink-0  overflow-y-auto hide_srcoll_bar `}>
                    <Header />
                    <section className={``}>
                        {children}
                    </section>
                </section>
            </main>
        </>
    )
}

export default Index