import style from './style/gallery.module.css'
import { Col, Row } from 'antd'


import img from '../../assets/gallery/clock.svg'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import { Link } from 'react-router-dom'
import Links from '../news/newspage/Links'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";
import Navbar from '../../helps/navbar/Navbar'
import Footer from '../footer/Footer'

const Gallery = () => {
  const {photos, setPhotos, photo_id, setPhotoId} = useAuthStore()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getPhotos = () => {
    getData('photo').then(res => {
      setPhotos(res.data.data)
    }).catch(err => {
      console.log(err);
    })
  } 
  
  useEffect(() => {
    getPhotos()    
  }, [photo_id]);

  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/fotogalereya/'}>{t("Fotogalereya")}</Link>
        </div>
        <div>
          <h1>{t("Fotogalereya")}</h1>
          <div>
            <Row>
              {photos.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <div onClick={() => setPhotoId(item.id)}>
                    <Link  to={`/axborot-xizmati/fotogalereya/${item.id}/`}>
                      <div className={style.galleryCard}>
                        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <img src={item.images[0].url} alt='' style={{width: '368px', height: '200px'}}/> 
                        </div>
                        <div className={style.galleryText}>
                          <div style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                            <img src={img} alt='' />
                            <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
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

                  </div>
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

export default Gallery