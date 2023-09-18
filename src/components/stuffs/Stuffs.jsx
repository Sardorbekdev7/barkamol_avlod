import style from './style/stuffs.module.css'
import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/auth.store'
import { Link } from 'react-router-dom'
import { getData } from '../../service/api.service'
import noimage from '../../assets/noimage.png'
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next'

const Stuffs = () => {
  const {stuffLeader, setStuffLeader} = useAuthStore()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getStuffLeader = () => {
    getData('leaders').then(res => {
      setStuffLeader(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getStuffLeader()
  }, []);

  const boshliq = []

  stuffLeader.map((item) => {
    if (item.type == 'Rahbariyat') {
        boshliq.push(item)
    }
  })
  
  return (
    <div className={style.container}>
      <div className={style.stuffs}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'faoliyat/togarak-rahbarlari/'}>{t("To’garak rahbarlari")}</Link>
        </div>
        <div>
          <div className={style.title}>
            <h1>{t("Toshkent shahar “Barkamol Avlod” bolalar maktabining to’garak rahbarlari")}</h1>
          </div>
          <div>
            <Row>
              {stuffLeader.map((item, key) =>
               (
                 <Col style={{margin: '0 auto'}} key={key} lg={6} md={12} sm={24} >
                  <div className={style.stuffCard}>
                      {item.image == null ? <img src={noimage} alt='' style={{width: '250px', height: '333px'}}/> : <img src={item.image} alt='' style={{width: '250px', height: '333px'}}/>}
                      <div className={style.stuffCardText} >
                      <h1>{
                      lang == "uz" 
                        ? item.name_uz 
                        : lang == "ru" 
                        ? item.name_ru 
                        : item.name_en
                      }</h1>
                      <p>{
                        lang == "uz" 
                        ? item.position_uz 
                        : lang == "ru" 
                        ? item.position_ru 
                        : item.position_en
                      }</p>
                      <a href={`tel:${item.phone}`}>{t("Telefon raqami:")} {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>{t("mail")} {item.email}</a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      <div className='back'>
          <Link href={'/'}>{t("Ortga")}</Link>
      </div>
      </div>
    </div>
  )
}

export default Stuffs