import style from './style/newspage.module.css'
import facebook from '../../../assets/news/facebook.svg'
import instagram from '../../../assets/news/instagram.svg'
import telegram from '../../../assets/news/telegram.svg'

const Links = () => {
  return (
    <div className={style.newscard}>
            <p>Yangiliklarni tarmoqlarda ulashing</p>
            <div className={style.newslink}>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}} href="https://www.facebook.com/tosh_babm" target='blank'>
                  <img src={facebook} alt="" />
                  <span>Facebook</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://www.instagram.com/toshbabm" target='blank'>
                  <img src={instagram} alt="" />
                  <span>Instagram</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://t.me/toshkent_babm" target='blank'>
                  <img src={telegram} alt="" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Links