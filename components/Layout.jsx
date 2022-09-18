import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Next E-commerce JS Mastery</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        { children }
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout