import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style/style.module.css'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import clock from '../../assets/news/clock.svg'
import Navbar from '../../helps/navbar/Navbar'
import Footer from '../footer/Footer'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";

const YangiliklarPage = () => {
  const {news, setNews, setNewsId, newsId} = useAuthStore()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);
  const getNewsData = () => {
    getData('news').then(res => {
      setNews(res.data.data)
      console.log(res.data.data)
    })
  }

  useEffect(() => {
    getNewsData()
  }, []);

  return (
    <>
    <Navbar/>
    <div className={style.container} style={{
      marginTop: '90px'
    }}>
      <div className={style.newscard}>
        <p>-Yangiliklar-</p>
        <h1>So’ngi yangilik, e’lon va habarlar</h1>
      </div>
      <Row>
        {news.map((item, key) => (
          <Col key={key} lg={8} md={12} sm={24}>
            <div className={style.newscards}>
              <div className={style.newscardimg}>
                <p>{
                    lang == "uz" 
                    ? item.subTitleUZ
                    : lang == "ru" 
                    ? item.subTitleRU
                    : item.subTitleEN
                  }</p>
                <Link onClick={() => setNewsId(item.id)} to={`/axborot-xizmati/yangiliklar/${item.id}/`}>
                  {item.image == null ? <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png' alt="rasm yo'q" style={{borderRadius: "15px", width: '368px', height: '200px'}}  /> : <img src={item.image} alt=''  style={{borderRadius: "15px", width: '368px', height: '200px'}} /> }
                </Link>
              </div>
              <div className={style.newscardtext}>
                <div className={style.newscardtime}>
                  <img src={clock} alt='' />
                  <span>{item.createdAt.slice(0, 10)}</span>
                </div>
                <p>{
                          lang == "uz" 
                          ? item.titleUZ
                          : lang == "ru" 
                          ? item.titleRU 
                          : item.titleEN
                        }</p>
              </div>
            </div>
          </Col>
        ))}
        
      </Row>
      <div className='back' style={{marginBottom: '30px'}}>
          <Link to={'/'}>Ortga</Link>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default YangiliklarPage