import React, { useEffect, useState } from 'react'
import brand from '../../assets/navbar/brand.svg'
import style from './style/navbar.module.css'
import DrawerBarkamol from './Drawer'
import useMatchMedia from 'use-match-media-hook'
import Maktab from './dropdown/Maktab'
import HujjatlarNavbar from './dropdown/Hujjatlar'
import Talim from './dropdown/Talim'
import Faoliyat from './dropdown/Faoliyat'
import Axborot from './dropdown/Axborot'
import { Link } from 'react-router-dom'
import Yangiliklar from './dropdown/Yangiliklar'
import Tillar from '../../components/tillar/Tillar'

const queries = [
  '(max-width: 1024px)',
]

const Navbar = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [mobile] = useMatchMedia(queries)

  return (
    <div className={style.navbar}>
      <div className={style.nav}>
      <div className={style.brand}>
        <Link to={'/'}>
          <img src={brand} alt='brand' />
        </Link>
      </div>
      <div className={style.navItem}>
        {domLoaded && (
          <>
        {mobile ? <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}><Tillar /> <DrawerBarkamol /></div>  : 
        <div className={style.navItems}>  
          <div style={{cursor: 'pointer'}}>
            <Maktab />
          </div>
          <div style={{cursor: 'pointer'}}>
            <HujjatlarNavbar />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Talim />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Faoliyat />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Axborot />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Yangiliklar />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Tillar />
          </div>
        </div>
        }
        </>
        )}
      </div>
      </div>
      </div>
  )
}

export default Navbar