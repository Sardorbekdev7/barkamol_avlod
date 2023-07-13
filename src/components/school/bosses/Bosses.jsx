import React, { useEffect } from 'react'
import style from './style/bosses.module.css'
import { Col, Row } from 'antd'

import facebook from '../../../assets/bosses/facebook.svg'
import instagram from '../../../assets/bosses/instagram.svg'
import telegram from '../../../assets/bosses/telegram.svg'
import { useAuthStore } from '../../../store/auth.store'
import { getData } from '../../../service/api.service'
import { Link } from 'react-router-dom'


const Bosses = () => {
  const { leaders, setLeaders } = useAuthStore()

  const getLeaders = () => {
    getData('course_owners').then(res => {
      setLeaders(res.data)
      console.log(leaders);
    })
  }

  useEffect(() => {
    getLeaders()
  }, []);


  return (
    <div className={style.bosses}>
      <div className={style.bosseslink}>
        <Link to={'/'}>Maktab</Link><p>{' > '}</p><Link to={'/maktab/rahbariyat/'}>Rahbariyat</Link>
      </div>
      <div>
        <Row>
          {
            leaders.slice(0, 1).map((item, key) => (
              <Row key={key}>
              <Col style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }} 
              lg={12} md={12} sm={24}>
                <div className={style.bosscard}>
                  <img className={style.bossimg} src={item.image} alt='' />
                </div>
              </Col>
              <Col lg={12} md={12} sm={24}>
                <div className={style.bosscard}>
                  <div className={style.boss}>
                    <h1>{item.name_uz}</h1>
                    <p>{item.position_uz}</p>
                    <div className={style.bossConnect}>
                      <a href={`tel:${item.phone}`}>Telefon raqami: {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>E-mail: {item.email}</a>
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
            ))
          }
          {
            leaders.slice(1).map((item, key) => (
              <Col key={key} lg={6} md={12} sm={24}>
                <div className={style.bosscard}>
                  <img className={style.bossimg} src={item.image} alt={item.name_uz} />
                  <div className={style.bossText}>
                    <h1>{item.name_uz}</h1>
                    <p>{item.position_uz}</p>
                    <div className={style.bossConnect}>
                      <a href={`tel:${item.phone}`}>Telefon raqami: {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>E-mail: {item.email}</a>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
      <div className='back'> 
          <Link to={'/'}>Ortga</Link>
      </div>
    </div>
  )
}

export default Bosses