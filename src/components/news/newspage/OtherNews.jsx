import style from './style/newspage.module.css'
import time from '../../../assets/newspage/clock.svg'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId } from '../../../service/api.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next'


const OtherNews = () => {
  const {news, setNews, setNewsId, newsId, setNew, new_id} = useAuthStore()

  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const navigate = useNavigate()

  const getNewData = () =>{
    getDataId('news', newsId).then(res => {
      setNew(res.data.data)
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
  }, []);

  return (
    <div>
      {
        news.slice(0, 10).map((item, key) => (
          <div key={key} >
            <Link to={`/axborot-xizmati/yangiliklar/${item.id}/`}>
              <div className={style.othernew}>
                <div className={style.othernewstime}>
                  <img src={time} alt='' />
                  <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
                </div>
                <p>{
                      lang == "uz" 
                      ? item.titleUZ 
                      : lang == "ru" 
                      ? item.titleRU
                      : item.titleEN
                    }
                  </p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default OtherNews