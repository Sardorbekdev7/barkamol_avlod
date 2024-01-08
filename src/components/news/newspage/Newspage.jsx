
import img_1 from '../../../assets/gallery/clock.svg'
import style from './style/newspage.module.css'
import OtherNews from './OtherNews'
import Links from './Links'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId } from '../../../service/api.service'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../helps/navbar/Navbar'
import Footer from '../../footer/Footer'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next'

const Newspage = () => {
  const {newsId} = useParams()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  const {news, setNews, setNewsId,  setNew, new_id} = useAuthStore()
  useEffect(() => {
    setLang(i18n.language);
    console.log(newsId);
  }, [i18n.language]);

  const getNewData = async () =>{
    const res = await getDataId('news', String(newsId)).then(res => {
      setNew(res.data.data)
      console.log(res.data.data);
    })
  }

  const getDatas = () => {
    getData('news').then(res => {
      setNews(res.data.data)
    })
  }

  useEffect(() => {
    getNewData()
    getDatas()
    console.log(new_id);
  }, [newsId]);


  return (
    <>
    <Navbar/>
    <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link to={'/'}>{t("Axborot xizmatlari")}</Link> {`>`} <Link to={'/axborot-xizmati/yangiliklar/'}>{t("Yangiliklar")}</Link></p> 
          </div>
          <h1 className={style.newsH1}>{
                      lang == "uz" 
                      ? new_id?.titleUZ 
                      : lang == "ru" 
                      ? new_id?.titleRU
                      : new_id?.titleEN
                    }</h1>
          <div className='clock' style={{display: "flex", alignItems: 'center', justifyContent:'start'}}>
            <img src={img_1} alt="" style={{width: '15px', height: '15px'}} />
            <span style={{margin: "0 0 0 5px"}}>{format(new_id?.createdAt == null ? new Date() : new Date(new_id?.createdAt), "dd MMM, yyyy")}</span>
          </div>
          <img src={new_id?.image} alt=''/>
          <div className={style.newspagetext}>
            <p>
              {
                lang == 'uz'
                ? new_id?.descriptionUZ :
                lang == 'ru'
                ? new_id?.descriptionRU :
                new_id?.descriptionEN
              }
            </p>
          </div>
          <div className='back'>
            <Link to={'/'}>{t("Ortga")}</Link>
          </div>

        </div>
        <div className={style.othernews}>
          <h2>Boshqa yangiliklar</h2>
          <OtherNews news={news} id={newsId} />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Newspage