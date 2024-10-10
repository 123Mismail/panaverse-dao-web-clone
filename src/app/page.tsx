

import React from 'react'
import HeroSection from './components/HeroSection'
import Courses from './components/Courses'
import SpecialTracks from './components/SpecialTracks'
import Outcomes from './components/Outcomes'
import Blogs from './components/Blogs'
import Videos from './components/Videos'

const Home = () => {
  return (
    <main >
      <HeroSection/>
      <Courses/>
      <SpecialTracks/>
      <Blogs/>
      <Videos/>
      <Outcomes/>
    </main>
  )
}

export default Home