import style from './style/videogallery.module.css'
import { Col, Row } from 'antd'

import img from '../../assets/gallery/clock.svg'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { format } from 'date-fns'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import { Link } from 'react-router-dom'
import Links from '../news/newspage/Links'



const VideoGallery = () => {
  const { videos, setVideos } = useAuthStore()

  const getVideos = () => {
    getData('video_gallery').then(res => {
      setVideos(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getVideos()
  }, []);

  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/videogalereya/'}>Videogalereya</Link>
        </div>
        <div>
          <h1>Videogalereya</h1>
          <div>
            <Row>
              {videos.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <Link to={`/axborot-xizmati/videogalereya/${item.id}/`}>
                    <div className={style.galleryCard}>
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactPlayer
                          url={item.video1}
                          width="368px"
                          height="200px"
                          controls
                        />
                      </div>
                      <div className={style.galleryText}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                          <img src={img} alt='' />
                          <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
                        </div>
                        <h1>{item.name_uz}</h1>
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
          <Link to={'/'}>Ortga</Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
  )
}

export default VideoGallery