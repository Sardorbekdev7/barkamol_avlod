import React, { useEffect, useState } from 'react'
import style from './style/bosses.module.css'
import { Col, Row } from 'antd'

import facebook from '../../../assets/bosses/facebook.svg'
import instagram from '../../../assets/bosses/instagram.svg'
import telegram from '../../../assets/bosses/telegram.svg'
import { useAuthStore } from '../../../store/auth.store'
import { getData } from '../../../service/api.service'
import { Link } from 'react-router-dom'
import i18n from '../../../locale/i18next'
import { useTranslation } from "react-i18next";
import Navbar from '../../../helps/navbar/Navbar'
import Footer from '../../footer/Footer'

const Bosses = () => {
  const { leaders, setLeaders } = useAuthStore()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getLeaders = () => {
    getData('employee').then(res => {
      setLeaders(res.data.data)
    })
  }

  useEffect(() => {
    getLeaders()
  }, []);


  return (
    <>
    <Navbar/>
    <div className={style.bosses}>
      <div className={style.bosseslink}>
        <Link to={'/'}>{t("maktab")}</Link><p>{' > '}</p><Link to={'/maktab/rahbariyat/'}>{t("Rahbariyat")}</Link>
      </div>
      <div>
          {
            leaders.slice(0, 1).map((item, key) => {
              if(item.role == 'rahbariyat'){
                return (
                  <Row key={key}>
                  <Col style={{display: 'flex', alignItems: "center", justifyContent: "center"}} lg={12} md={12} sm={24}>
                    <div className={style.bosscard}>
                      <img className={style.bossimg} src={item.image} alt='' />
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={24}>
                    <div className={style.bosscard}>
                      <div className={style.boss}>
                        <h1>{
                          lang == "uz" 
                          ? item.nameUZ
                          : lang == "ru" 
                          ? item.nameRU 
                          : item.nameEN
                        }</h1>
                        <p>{
                          lang == "uz" 
                          ? item.positionUZ
                          : lang == "ru" 
                          ? item.positionRU 
                          : item.positionEN
                        }</p>
                        <div className={style.bossConnect}>
                          <a href={`tel:${item.phoneNumber}`}>{t("Telefon raqami:")} {item.phoneNumber}</a>
                          <br />
                          <a href={`mailto:${item.email}`}>{t("E-mail:")} {item.email}</a>
                        </div>
                        <div>
                          <a href={'https://www.facebook.com/tosh_babm'} target='blank'>
                            <img src={facebook} alt='' />
                          </a>
                          <a href="https://www.instagram.com/toshbabm" target='blank'>
                            <img src={instagram} alt='' />
                          </a>
                          <a href="https://t.me/toshkent_babm" target='blank'>
                            <img src={telegram} alt='' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                  </Row>
                )
              }
            } )
          }
          <Row>
          {
            leaders.slice(1).map((item, key) => {
              if(item.role == 'rahbariyat'){
                return (
                  <Col key={key} lg={6} md={12} sm={24}>
                    <div className={style.bosscard}>
                      <img className={style.bossimg} src={item.image} alt={item.nameUZ} />
                      <div className={style.bossText}>
                        <h1>{
                          lang == "uz" 
                          ? item.nameUZ
                          : lang == "ru" 
                          ? item.nameRU 
                          : item.nameEN
                        }</h1>
                        <p>{
                          lang == "uz" 
                          ? item.positionUZ
                          : lang == "ru" 
                          ? item.positionRU 
                          : item.positionEN
                        }</p>
                        <div className={style.bossConnect}>
                          <a href={`tel:${item.phoneNumber}`}>{t("Telefon raqami:")} {item.phoneNumber}</a>
                          <br />
                          <a href={`mailto:${item.email}`}>{t("mail")} {item.email}</a>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              }
            })
          }
          </Row>
      </div>
      <div className='back'> 
          <Link to={'/'}>{t("Ortga")}</Link>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Bosses