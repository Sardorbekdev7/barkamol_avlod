import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './style/style.module.css'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import clock from '../../assets/news/clock.svg'

const YangiliklarPage = () => {
  const {news, setNews, setNewsId, newsId} = useAuthStore()

  const getNewsData = () => {
    getData('news').then(res => {
      setNews(res.data)
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
        <p>-Yangiliklar-</p>
        <h1>So’ngi yangilik, e’lon va habarlar</h1>
      </div>
      <Row>
        {news.map((item, key) => (
          <Col key={key} lg={8} md={12} sm={24}>
            <div className={style.newscards}>
              <div className={style.newscardimg}>
                <p>{item.media_type == 'News' ? 'Yangiliklar' : item.media_type}</p>
                <Link onClick={() => setNewsId(item.id)} to={`/axborot-xizmati/yangiliklar/${item.id}/`}>
                  {item.photo == null ? <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png' alt="rasm yo'q" style={{borderRadius: "15px", width: '368px', height: '200px'}}  /> : <img src={item.photo} alt=''  style={{borderRadius: "15px", width: '368px', height: '200px'}} /> }
                </Link>
              </div>
              <div className={style.newscardtext}>
                <div className={style.newscardtime}>
                  <img src={clock} alt='' />
                  <span>03.02.2023</span>
                </div>
                <p>{item.name_uz}</p>
              </div>
            </div>
          </Col>
        ))}
        
      </Row>
      <div className='back' style={{marginBottom: '30px'}}>
          <Link to={'/'}>Ortga</Link>
      </div>
    </div>
  )
}

export default YangiliklarPage