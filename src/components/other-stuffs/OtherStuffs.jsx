import style from './style/otherstuffs.module.css'
import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/auth.store'
import { Link } from 'react-router-dom'
import { getData } from '../../service/api.service'
import noimage from '../../assets/noimage.png'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";
import Navbar from '../../helps/navbar/Navbar'
import Footer from '../footer/Footer'

const OtherStuffs = () => {
  const {stuffLeader, setStuffLeader} = useAuthStore()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  // const getStuffLeader = () => {
  //   getData('leaders').then(res => {
  //     setStuffLeader(res.data)
  //   })
  // }
  const getStuffLeader = () => {
    getData('employee').then(res => {
      setStuffLeader(res.data.data)
    })
  }

  useEffect(() => {
    getStuffLeader()
  }, []);

  
  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div className={style.stuffs}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/faoliyat/boshqa-xodimlar/'}>{t("Boshqa xodimlar")}</Link>
        </div>
        <div>
          <div className={style.title}>
            <h1>{t("Toshkent shahar “Barkamol Avlod” bolalar maktabining xodimlari")}</h1>
          </div>
          <div>
            <Row>
              {stuffLeader.map((item, key) => {
                if (item.role == 'boshqaxodimlar') return (
                <Col style={{margin: '0 auto'}} key={key} lg={6} md={12} sm={24} >
                  <div className={style.stuffCard}>
                    {item.image == null ? <img src={noimage} alt='' style={{width: '250px', height: '333px'}}/> : <img src={item.image} alt='' style={{width: '250px', height: '333px'}}/>}
                      <div className={style.stuffCardText} >
                      {/* <h1>{
                        lang == "uz" 
                        ? item.position_uz 
                        : lang == "ru" 
                        ? item.position_ru 
                        : item.position_en
                      }</h1> */}
                      <h1>{
                        lang == "uz" 
                        ? item.nameUZ
                        : lang == "ru" 
                        ? item.nameRU 
                        : item.nameEN
                      }</h1>
                      {/* <p>{
                        lang == "uz" 
                        ? item.position_uz 
                        : lang == "ru" 
                        ? item.position_ru 
                        : item.position_en
                      }</p> */}
                      <p>{
                        lang == "uz" 
                        ? item.positionUZ
                        : lang == "ru" 
                        ? item.positionRU 
                        : item.positionEN
                      }</p>
                      <a href={`tel:${item.phoneNumber}`}>{t("Telefon raqami:")} {item.phoneNumber}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>{t("mail")} {item.email}</a>
                    </div>
                  </div>
                </Col>
              )})}
            </Row>
          </div>
        </div>
      <div className='back'>
          <Link to={'/'}>Ortga</Link>
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default OtherStuffs