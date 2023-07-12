import React from 'react'
import HomeHeader from './components/header/HomeHeader'
import Courses from './components/courses/Courses'
import News from './components/news/News'
import Stat from './components/stat/Stat'
import Sponsor from './components/sponsors/Sponsor'

const Homepage = () => {
  return (
    <div>
      <HomeHeader />   
            <Courses />   
            <News />   
            <Stat />   
            <Sponsor />  
    </div>
  )
}

export default Homepage