import style from './style/gallery.module.css'
import { Col, Row } from 'antd'


import img from '../../assets/gallery/clock.svg'
import { useEffect } from 'react'
import { format } from 'date-fns'
import { useAuthStore } from '../../store/auth.store'
import { getData } from '../../service/api.service'
import { Link } from 'react-router-dom'
import Links from '../news/newspage/Links'

const Gallery = () => {
  const {photos, setPhotos, photo_id, setPhotoId} = useAuthStore()

  const getPhotos = () => {
    getData('photo_gallery').then(res => {
      setPhotos(res.data)
    }).catch(err => {
      console.log(err);
    })
  } 
  
  useEffect(() => {
    getPhotos()    
  }, [photo_id]);

  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/fotogalereya/'}>Fotogalereya</Link>
        </div>
        <div>
          <h1>Fotogalereya</h1>
          <div>
            <Row>
              {photos.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <div onClick={() => setPhotoId(item.id)}>
                    <Link  to={`/axborot-xizmati/fotogalereya/${item.id}/`}>
                      <div className={style.galleryCard}>
                        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <img src={item.image1} alt='' style={{width: '368px', height: '200px'}}/> 
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

                  </div>
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

export default Gallery