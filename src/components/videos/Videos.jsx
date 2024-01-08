import style from './style/videos.module.css'

import img from '../../assets/gallery/clock.svg'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useAuthStore } from '../../store/auth.store'
import { getData, getDataId } from '../../service/api.service'
import { Link, useParams } from 'react-router-dom'
import Links from '../news/newspage/Links'
import { format } from 'date-fns'
import i18n from '../../locale/i18next'
import { useTranslation } from "react-i18next";
import Navbar from '../../helps/navbar/Navbar'
import Footer from '../footer/Footer'

const Videos = () => {
  const {video_id, setVideoId, video, setVideo, setVideos, videos} = useAuthStore()

  const {id} = useParams()

  const [lang, setLang] = useState();

  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getVideo = () => {
    getDataId('videos', String(id)).then(res => {
      setVideo(res.data.data)
    })
  }

  const getVideos = () => {
    getData('videos').then(res => {
      setVideos(res.data.data)
    })
  }

 
  useEffect(() => {
    getVideo()
    getVideos()
  }, [video_id]);
 

  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div style={{display: "flex", width: "100%"}}>
        <div className={style.photos}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>{t("Axborot xizmatlari")} {'>'}</p>
              <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/axborot-xizmati/fotogalereya/'}>{t("Videogalereya")}</Link>
            </div>
            <div>
              <h1>{
                lang == "uz" 
                ? video.nameUZ 
                : lang == "ru" 
                ? video.nameRU 
                : video.nameEN
              }</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={img} alt='' />
                <p>{format(video.date == null ? new Date() : new Date(video.date), "dd MMM, yyyy")}</p>
              </div>
              <div>
                  <div className={style.photosImg} style={{margin: '15px 0', gap: '5px'}}>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>{t("Boshqa videolar")}</p>
          {videos.slice(0, 10).map((item, key) => (
            <div key={key} style={{margin: "16px"}}>
              <Link  to={`/axborot-xizmati/videogalereya/${item.id}/`}> {/*onClick={() => setVideoId(item.id)}*/}
                <iframe width={'100%'} height={'250px'} src={`https://www.youtube.com/embed/${item.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Link>
              <div style={{display: "flex", alignItems: "center", marginTop: '14px'}}>
                <img src={img} alt='' />
                <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
              </div>
              <h1 style={{margin: '14px 0'}}>{
                lang == "uz" 
                ? item.nameUZ 
                : lang == "ru" 
                ? item.nameRU 
                : item.nameEN
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

export default Videos