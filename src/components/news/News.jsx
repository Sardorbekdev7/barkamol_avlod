import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import clock from '../../assets/news/clock.svg'

import style from './style/news.module.css'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next'
import { format } from 'date-fns'

const News = () => {
  const {news, setNews, setNewsId, newsId} = useAuthStore()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);
  const getNewsData = () => {
    getData('news').then(res => {
      setNews(res.data)
      console.log(res.data);
    })
  }

  useEffect(() => {
    getNewsData()
  }, []);
  

  return (
    <div className={style.container} style={{
      marginTop: '90px'
    }}>
      <div className={style.newscard}>
        <p>-{t("Yangiliklar")}-</p>
        <h1>{t("So’ngi yangilik, e’lon va habarlar")}</h1>
      </div>
      <Row>
        {news.map((item, key) => (
          <Col key={key} lg={8} md={12} sm={24}>
            <div className={style.newscards}>
              <div className={style.newscardimg}>
                <p>{item.media_type == 'News' ? `${t("Yangiliklar")}` : item.media_type}</p>
                <Link onClick={() => setNewsId(item.id)} to={`/axborot-xizmati/yangiliklar/${item.id}/`}>
                  {item.photo == null ? <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png' alt="rasm yo'q" style={{borderRadius: "15px", width: '368px', height: '200px'}}  /> : <img src={item.photo} alt=''  style={{borderRadius: "15px", width: '368px', height: '200px'}} /> }
                </Link>
              </div>
              <div className={style.newscardtext}>
                <div className={style.newscardtime}>
                  <img src={clock} alt='' />
                  <span>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</span>
                </div>
                <p>{
                  lang == "uz" 
                  ? item.name_uz 
                  : lang == "ru" 
                  ? item.name_ru 
                  : item.name_en
                }</p>
              </div>
            </div>
          </Col>
        ))}
        
      </Row>
      
    </div>
  )
}

export default News