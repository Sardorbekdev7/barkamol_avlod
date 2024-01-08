import style from './style/videogallery.module.css'
import { Col, Row } from 'antd'

import img from '../../assets/gallery/clock.svg'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { format } from 'date-fns'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import { Link } from 'react-router-dom'
import Links from '../news/newspage/Links'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";
import Footer from '../footer/Footer'
import Navbar from '../../helps/navbar/Navbar'


const VideoGallery = () => {
  const { videos, setVideos } = useAuthStore()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getVideos = () => {
    getData('videos').then(res => {
      setVideos(res.data.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getVideos()
  }, []);

  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/videogalereya/'}>{t("Videogalereya")}</Link>
        </div>
        <div>
          <h1>{t("Videogalereya")}</h1>
          <div>
            <Row>
              {videos.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <Link to={`/axborot-xizmati/videogalereya/${item.id}/`}>
                    <div className={style.galleryCard}>
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                      <div className={style.galleryText}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                          <img src={img} alt='' />
                          <p>{format(item.createdAt == null ? new Date() : new Date(item.createdAt), "dd MMM, yyyy")}</p>
                        </div>
                        <h1>{
                          lang == "uz" 
                          ? item.titleUZ 
                          : lang == "ru" 
                          ? item.titleRU
                          : item.titleEN
                        }</h1>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div className='back'>
          <Link to={'/'}>{t("Ortga")}</Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
      <Footer />
    </>
  )
}

export default VideoGallery