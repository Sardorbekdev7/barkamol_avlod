import style from './style/structure.module.css'
import img from '../../../assets/structure/img.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../../helps/navbar/Navbar'
import Footer from '../../footer/Footer'

const Structure = () => {
  return (
    <>
    <Navbar/>
    <div className={style.structure}>
      <div className={style.structurelink}>
        <p>Maktab {'>'} </p>
        <Link to={'/maktab/maktab-tuzilmasi/'}>Maktab-tuzilmasi</Link>
      </div>
      <div className={style.structuretext}>
        <h1>Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi</h1>
        <img src={img} alt='' />
      </div>
      <div className='back'>
          <Link to={'/'}>Ortga</Link>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Structure