import style from './style/newspage.module.css'
import facebook from '../../../assets/news/facebook.svg'
import instagram from '../../../assets/news/instagram.svg'
import telegram from '../../../assets/news/telegram.svg'
import i18n from '../../../locale/i18next'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'

const Links = () => {
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);
  return (
    <div className={style.newscard}>
            <p>{t("Yangiliklarni tarmoqlarda ulashing")}</p>
            <div className={style.newslink}>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}} href="https://www.facebook.com/tosh_babm" target='blank'>
                  <img src={facebook} alt="" />
                  <span>{t("Facebook")}</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://www.instagram.com/toshbabm" target='blank'>
                  <img src={instagram} alt="" />
                  <span>{t("Instagram")}</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://t.me/toshkent_babm" target='blank'>
                  <img src={telegram} alt="" />
                  <span>{t("Telegram")}</span>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Links