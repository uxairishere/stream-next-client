import Header from '@/components/header'
import Hero from '@/components/home/hero'
import Trending from '@/components/home/trending'
import Social from '@/components/home/social'
import Services from '@/components/home/services'
import Footer from '@/components/footer'

export default function Home() {
  return (
      <div>
        <Header/>
        <div className='body-container'>
          <Hero/>
          <Trending/>
          <Social/>
          <Services/>
          <Footer/>
        </div>
        
      </div>
  )
}
