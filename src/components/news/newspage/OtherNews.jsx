import style from './style/newspage.module.css'
import time from '../../../assets/newspage/clock.svg'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId } from '../../../service/api.service'
import { Link, useNavigate } from 'react-router-dom'
import { news } from '../../../data/data'

const OtherNews = () => {
  // const {news, setNews, setNewsId, newsId, setNew, new_id} = useAuthStore()

  // const navigate = useNavigate()

  // const getNewData = () =>{
  //   getDataId('news', newsId).then(res => {
  //     setNew(res.data)
  //   })
  // }

  // const getDatas = () => {
  //   getData('news').then(res => {
  //     setNews(res.data)
  //   })
  // }


  // useEffect(() => {
  //   getNewData()
  //   getDatas()
  // }, []);

  return (
    <div>
      {
        news.slice(0, 10).map((item ,key) => (
          <div key={key} >
            <Link to={`/axborot-xizmati/yangiliklar/${item.id}/`}>
              <div className={style.othernew}>
                <div className={style.othernewstime}>
                  <img src={time} alt='' />
                  <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
                </div>
                <p>{item.name_uz}</p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default OtherNews