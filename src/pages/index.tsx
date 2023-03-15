import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/components/header'
import Hero from '@/components/home/hero'
import Trending from '@/components/home/trending'
import Footer from '@/components/footer'
import About from '@/components/home/about'
import Services from '@/components/services/services'

export default function Home() {
  return (
      <div>
        <Header/>
        <div className='body-container'>
          <Hero/>
          <Trending/>
          <About/>
          <Services/>
        </div>
        <Footer/> 
      </div>
  )
}
