import { Col, Row } from 'antd'

import img1 from '../../assets/stat/img1.svg'
import img2 from '../../assets/stat/img2.svg'
import img3 from '../../assets/stat/img3.svg'
import img4 from '../../assets/stat/img4.svg'

import style from './style/stat.module.css'
import { useEffect, useState } from 'react'
import { getData } from '../../service/api.service'

const Stat = () => {
  const [stat, setStat] = useState([])

  const getStat = () => {
    getData('statistics').then((res) => {
      setStat(res.data.data)
    })
  }

  useEffect(() => {
    getStat()
  }, [])
  


  return (
    <div className={style.container}>
      <div className={style.stat}>
        <Row>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statimg}>
                <div>
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className={style.stattext}>
                <h1>{stat.numberOfStudents}</h1>
                <p>Toshkent BABM ga jalb qilingan o’quvchilar soni</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statimg}>
                <div>
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className={style.stattext}>
                <h1>{stat.ratioToTheNumberOfStudents}%</h1>
                <p>Maktabi o’quvchilari soniga nisbati</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statimg}>
                <div>
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className={style.stattext}>
                <h1>{stat.numberOfEmployees}</h1>
                <p>Toshkent BABM dagi xodimlar soni</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.statcard}>
              <div className={style.statimg}>
                <div>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className={style.stattext}>
                <h1>{stat.numberOfDirections}+</h1>
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