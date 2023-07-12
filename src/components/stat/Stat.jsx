import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'antd'

import img1 from '../../assets/stat/img1.svg'
import img2 from '../../assets/stat/img2.svg'
import img3 from '../../assets/stat/img3.svg'
import img4 from '../../assets/stat/img4.svg'

import style from './style/stat.module.css'

const Stat = () => {
  return (
    <div className={style.container}>
      <div className={style.stat}>
        <Row>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statcardimg}>
                <img src={img1} alt='' />
              </div>
              <div className={style.statcardtext}>
                <h1>375</h1>
                <p>Toshkent BABM ga jalb <br />  qilingan o’quvchilar soni</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statcardimg}>
                <img src={img2} alt='' />
              </div>
              <div className={style.statcardtext}>
                <h1>3.2%</h1>
                <p>Maktabi o’quvchilari soniga nisbati</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statcardimg}>
                <img src={img3} alt='' />
              </div>
              <div className={style.statcardtext}>
                <h1>35</h1>
                <p>Toshkent BABM dagi xodimlar soni</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statcardimg}>
                <img src={img4} alt='' />
              </div>
              <div className={style.statcardtext}>
                <h1>55+</h1>
                <p>Toshkent BABM dagi to’garaklar soni</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Stat