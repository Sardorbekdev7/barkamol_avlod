
import React from 'react'
import style from './style/layout.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Layout = ( { children } ) => {
  return (
    <div>
      <Navbar/>
        <div className={style.layout}>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout