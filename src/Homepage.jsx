import React from 'react'
import HomeHeader from './components/header/HomeHeader'
import Courses from './components/courses/Courses'
import News from './components/news/News'
import Stat from './components/stat/Stat'
import Sponsor from './components/sponsors/Sponsor'
import Navigat from './components/header/Navigat'
import Navbar from './helps/navbar/Navbar'
import Footer from './components/footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
            <Navigat />  
            <HomeHeader />
            <Courses />   
            <News />   
            <Stat />   
            <Sponsor />  
      <Footer />
    </div>
  )
}

export default Homepage