import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({title, keywords, description, children}) => {
  return (
    <div>
       <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />

       </Head>
       <Header/>
       { children } 
       <Footer/>
    </div>
  )
}


export default Layout

Layout.defaultProps = {
   title: "Artic Maze",
   description: "We do design, development and marketing. And we do it right.",
   keywords: "shopify, ecommerce, artic, maze,artic maze"
}