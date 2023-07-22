import React from 'react'
import HomeHeader from './components/header/HomeHeader'
import Courses from './components/courses/Courses'
import News from './components/news/News'
import Stat from './components/stat/Stat'
import Sponsor from './components/sponsors/Sponsor'
import Navigat from './components/header/Navigat'

const Homepage = () => {
  return (
    <div>
            <Navigat />  
            <HomeHeader />
            <Courses />   
            <News />   
            <Stat />   
            <Sponsor />  
    </div>
  )
}

export default Homepage