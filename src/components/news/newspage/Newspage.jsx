
import img_1 from '../../../assets/gallery/clock.svg'
import style from './style/newspage.module.css'
import OtherNews from './OtherNews'
import Links from './Links'
import { useEffect } from 'react'
import { format } from 'date-fns'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId } from '../../../service/api.service'
import { Link } from 'react-router-dom'

const Newspage = () => {
  const {news, setNews, setNewsId, newsId, setNew, new_id} = useAuthStore()


  const getNewData = () =>{
    getDataId('news', newsId).then(res => {
      setNew(res.data)
    })
  }

  const getDatas = () => {
    getData('news').then(res => {
      setNews(res.data)
    })
  }

  useEffect(() => {
    getNewData()
    getDatas()
  }, [newsId]);


  return (
    <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link to={'/'}>Axborot xizmati</Link> {`>`} <Link to={'/axborot-xizmati/yangiliklar/'}>Yangiliklar</Link></p> 
          </div>
          <h1 className={style.newsH1}>{new_id.name_uz}</h1>
          <div className='clock' style={{display: "flex", alignItems: 'center', justifyContent:'start'}}>
            <img src={img_1} alt="" style={{width: '15px', height: '15px'}} />
            <span style={{margin: "0 0 0 5px"}}>{format(new_id.date == null ? new Date() : new Date(new_id.date), "dd MMM, yyyy")}</span>
          </div>
          <img src={new_id.photo} alt=''/>
          <div className={style.newspagetext}>
            <p>
              {new_id.text_uz}
            </p>
          </div>
          <div className='back'>
            <Link to={'/'}>Ortga</Link>
          </div>

        </div>
        <div className={style.othernews}>
          <h2>Boshqa yangiliklar</h2>
          <OtherNews news={news} id={newsId} setId={setNewsId}  />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
  )
}

export default Newspage