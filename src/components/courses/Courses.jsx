import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import mad from '../../assets/course/mad.svg'
import tex from '../../assets/course/tex.svg'
import oliy from '../../assets/course/oliy.svg'
import jis from '../../assets/course/jis.svg'
import hunar from '../../assets/course/hunar.svg'
import xorij from '../../assets/course/xorij.svg'
import eko from '../../assets/course/eko.svg'
import style from './style/couses.module.css'
import { Link } from 'react-router-dom'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";

const Courses = () => {
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  return (
    <div className={style.container} >
      <div className={style.coursecard}>
        <p>-{t("To`garaklar")}-</p>
        <h1>{t("Maktabimizdagi mavjud to`garaklar bilan tanishing")}</h1>
      </div>
      <Row align={'middle'} >
      <Col lg={6} md={12} sm={24} xs={24}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card1}`}>
              <div className={style.courseText}>
                <div>
                  <h1>{t("Madaniyat ba san`at")}</h1>
                  <div className={style.coursecardoption}>
                    <p>{t("Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud")}</p> 
                  </div>
                </div>
                <div style={{display: 'flex', }}>
                  <img src={mad} alt=''/>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
        <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card2}`}>
              <div className={style.courseText}>
                <div>
                <h1>{t("Texnika konstruktorlik va modellashtirish")}</h1>
                <div className={style.coursecardoption}>
                  <p>{t("Ushbu yo‘nalishida 17 turdagi to‘garak mavjud")}</p> 
                </div>
                </div>
                <img src={tex} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card3}`}>
              <div className={style.courseText}>
                <div>
                <h1>{t("Oliy ta’lim muassasalari va maltablarga tayyorlov")}</h1>
                <div className={style.coursecardoption}>
                  <p>{t("Oliy ta’lim muassasalari va maktabga tayyorlov yo‘nalishida 8 turdagi (Ona tili va adabiyoti, Biologiya, Kimyo, Fizika, Matematika, Tarix, Mental arifmetika, Logika, matematika, husnixat, o’qish, tasviriy san’at, teatr va raqs) to‘garaklar mavjud")}</p> 
                </div>
                </div>
                  <img src={oliy} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card4}`}>
              <div className={style.courseText}>
                <div>
                <h1>{t("Jismoniy tarbiya va sport")}</h1>
                <div className={style.coursecardoption}>
                  <p>{t("Ushbu yo‘nalishida 4 turdagi to‘garak mavjud")}</p> 
                </div>
                </div>
                  <img src={jis} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card5}`}>
              <div className={style.courseText}>
                <div>
                  <h1>{t("Hunarmandchilik va qo’l mehnati")}</h1>
                  <div className={style.coursecardoption}>
                    <p>{t("Ushbu yo‘nalishida 14 turdagi to‘garak mavjud")}</p> 
                  </div>
                </div>
                <img src={hunar} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24} style={{width: '100%'}}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card6}`}>
              <div className={style.courseText}>
                <div>
                <h1>{t("Ekologiya va turizm")}</h1>
                <div className={style.coursecardoption}>
                  <p>{t("Ekologiya va turizm")}</p> 
                </div>
                </div>
                  <img src={eko} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Link to={'/talim-yonalishlari/'}>
            <div className={`${style.coursecards} ${style.card7}`}>
              <div className={style.courseText}>
                <div className={style.courseText1}>
                <h1>{t("Xorijiy Tillar")}</h1>
                <div className={style.coursecardoption}>
                <p>{t("Ushbu yo‘nalishida 14 turdagi to‘garak mavjud")}</p> 
                </div>
                </div>
                <img src={xorij} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        {/* <Col lg={6} md={12} sm={24}>
          <Link to={'/talim-yonalishlari/madaniyat-sanat'}>
            <div className={style.coursecards}>
              <h1>Madaniayt <br /> ba san`at</h1>
              <div className={style.coursecardoption}>
                <p>Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud</p> 
                <img src={mad} alt=''/>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Texnika konstruktorlik va modellashtirish</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 17 turdagi to‘garak mavjud</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={12} md={24} sm={24}>
          <div className={style.coursecards}>
            <h1>Oliy ta’lim muassasalari va maltablarga tayyorlov</h1>
            <div className={style.coursecardoption}>
              <p>Oliy ta’lim muassasalari va maktabga tayyorlov yo‘nalishida 8 turdagi (Ona tili va adabiyoti, Biologiya, Kimyo, Fizika, Matematika, Tarix, Mental arifmetika, Logika, matematika, husnixat, o’qish, tasviriy san’at, teatr va raqs) to‘garaklar mavjud</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Jismoniy tarbiya va sport</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 4 turdagi to‘garak mavjud</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Hunarmandchilik va qo’l mehnati</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 14 turdagi to‘garak mavjud</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Ekologiya va turizm</h1>
            <div className={style.coursecardoption}>
              <p>Ekologiya va turizm</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Xorijiy Tillar</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 14 turdagi to‘garak mavjud</p> 
              <img src={mad} alt=''/>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  )
}

export default Courses