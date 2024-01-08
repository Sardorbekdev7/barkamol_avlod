import style from './style/photos.module.css'

import img from '../../assets/gallery/clock.svg'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/auth.store'
import { getData, getDataId } from '../../service/api.service'
import { Link, useParams } from 'react-router-dom'
import Links from '../news/newspage/Links'
import { format } from 'date-fns'
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next'
import Footer from '../footer/Footer'
import Navbar from '../../helps/navbar/Navbar'

const Photos = () => {
  const {photo_id, setPhotoId, photo, setPhoto, setPhotos, photos} = useAuthStore()
  const {id} = useParams()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getPhoto = () => {
    getDataId('photo', String(id)).then(res => {
      setPhoto(res.data.data)
      console.log(res.data.data);
    })
  }


  const getPhotos = () => {
    getData('photo').then(res => {
      setPhotos(res.data.data)
    }).catch(err => {
      console.log(err);
    })
  } 


  useEffect(() => {
    getPhoto()
    getPhotos()
  }, [photo_id]);

 

  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div style={{display: "flex", width: "100%", marginTop: '50px'}}>
        <div className={style.photos}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
              <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/fotogalereya/'}>{t("Fotogalereya")}</Link>
            </div>
            <div>
              <h1>{
                lang == "uz" 
                      ? photo.nameUZ 
                      : lang == "ru" 
                      ? photo.nameRU 
                      : photo.nameEN
                    }</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={img} alt='' />
                <p>{format(photo.date == null ? new Date() : new Date(photo.date), "dd MMM, yyyy")}</p>
              </div>
              <div>
                  <div className={style.photosImg} style={{margin: '15px 0', gap: '5px'}}>
                    {photo.images?.map((item, key) => (
                      <img  width={'auto'} src={item.url} />
                    ))}
                  </div>
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>{t("Boshqa lavhalar")}</p>
          {photos.slice(0, 10).map((item, key) => (
            <div key={key} style={{margin: "16px"}}>
              <Link  to={`/axborot-xizmati/fotogalereya/${item.id}/`}> {/*onClick={() => setPhotoId(item.id)} */}
                <img src={item.images[0].url} alt='' width={338} height={200} />
              </Link>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={img} alt='' />                                            
                <p>{format(photo.createdAt == null ? new Date() : new Date(photo.createdAt), "dd MMM, yyyy")}</p>
              </div>
              <h1>{
                lang == "uz" 
                ? item.titleUZ 
                : lang == "ru" 
                ? item.titleRU 
                : item.titleEN
              }</h1>
            </div>
          ))}
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

export default Photos