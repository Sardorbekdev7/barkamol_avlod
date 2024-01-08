import style from './style/style.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import brand from '../../assets/navbar/brand.svg'
import { useEffect, useState } from 'react'
import useMatchMedia from 'use-match-media-hook'
import News from './news/News'

const queries = [
    '(max-width: 1024px)',
  ]
  

const Dashboard = () => {
    const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [mobile] = useMatchMedia(queries)

  return (
    <div>
        <div className={style.navbar}>
        <div className={style.nav}>
        <div className={style.brand}>
            <Link to={'/admin'}>
            <img src={brand} alt='brand' />
            </Link>
        </div>
        <div className={style.navItem}>
            {domLoaded && (
            <>
            <div className={style.navItems}>  
                <Link to="/admin/category">Kurs kategoreyasi</Link>
                <Link to="/admin/kurs">Kurslar</Link>
                <Link to="/admin/video">Video</Link>
                <Link to="/admin/rasm">Rasmlar</Link>
                <Link to="/admin/rahbariyat">Rahbariyat</Link>
                <Link to="/admin/haqida">Maktab haqida</Link>
                <Link to="/admin/yangiliklar">Yangiliklar</Link>
            </div>
            </>
            )}
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard