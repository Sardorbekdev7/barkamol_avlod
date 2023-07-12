import { Link } from 'react-router-dom'
import facebook from '../../assets/homeheader/facebook.svg'
import instagram from '../../assets/homeheader/instagram.svg'
import telegram from '../../assets/homeheader/telegram.svg'



import style from "./style/homeheader.module.css"

const Navigat = () => {
  return (
    <div className={style.navigat}>
        <Link to={'https://facebook.com/@tosh_babm'} target='__blank'>
          <img src={facebook} alt='facebook' />
        </Link>
        <Link to={'https://instagram.com/@toshbabm'} target='__blank' style={{margin: '10px 0'}}>
          <img src={instagram} alt='instagram' />
        </Link>
        <Link to={'https://t.me/@toshkent_babm'} target='__blank'>
          <img src={telegram} alt='telegram' />
        </Link>
    </div>
  )
}

export default Navigat