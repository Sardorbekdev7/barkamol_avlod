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

const Photos = () => {
  const {photo_id, setPhotoId, photo, setPhoto, setPhotos, photos} = useAuthStore()
  const {id} = useParams()
  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getPhoto = () => {
    getDataId('photo_gallery', id).then(res => {
      setPhoto(res.data)
      console.log(res.data);
      console.log(location)
    })
  }


  const getPhotos = () => {
    getData('photo_gallery').then(res => {
      setPhotos(res.data)
    }).catch(err => {
      console.log(err);
    })
  } 


  useEffect(() => {
    getPhoto()
    getPhotos()
  }, [photo_id]);

 

  return (
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
                      ? photo.name_uz 
                      : lang == "ru" 
                      ? photo.name_ru 
                      : photo.name_en
                    }</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={img} alt='' />
                <p>{format(photo.date == null ? new Date() : new Date(photo.date), "dd MMM, yyyy")}</p>
              </div>
              <div>
                  <div className={style.photosImg} style={{margin: '15px 0', gap: '5px'}}>
                    {photo.image1 && <img style={{margin: '5px 0'}} src={photo.image1} alt=''  />}
                    {photo.image2 && <img style={{margin: '5px 0'}} src={photo.image2} alt=''  />}
                    {photo.image3 && <img style={{margin: '5px 0'}} src={photo.image3} alt=''  />}
                    {photo.image4 && <img style={{margin: '5px 0'}} src={photo.image4} alt=''  />}
                    {photo.image5 && <img style={{margin: '5px 0'}} src={photo.image5} alt=''  />}
                    {photo.image6 && <img style={{margin: '5px 0'}} src={photo.image6} alt=''  />}
                  </div>
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>{t("Boshqa lavhalar")}</p>
          {photos.slice(0, 10).map((item, key) => (
            <div key={key} style={{margin: "16px"}}>
              <Link  to={`/axborot-xizmati/fotogalereya/${item.id}/`}> {/*onClick={() => setPhotoId(item.id)} */}
                <img src={item.image1} alt='' width={338} height={200} />
              </Link>
              <div style={{display: "flex", alignItems: "center"}}>
                <img src={img} alt='' />                                            
                <p>{format(photo.date == null ? new Date() : new Date(photo.date), "dd MMM, yyyy")}</p>
              </div>
              <h1>{
                      lang == "uz" 
                      ? item.name_uz 
                      : lang == "ru" 
                      ? item.name_ru 
                      : item.name_en
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
  )
}

export default Photos