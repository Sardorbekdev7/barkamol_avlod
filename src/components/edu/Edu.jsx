import style from './style/edu.module.css'
import { Collapse } from 'antd'
import { useEffect, useState } from 'react'
import OtherNews from '../news/newspage/OtherNews'
import { useAuthStore } from '../../store/auth.store';
import { getData, slugify } from '../../service/api.service';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next';
import Navbar from '../../helps/navbar/Navbar';
import Footer from '../footer/Footer';


const { Panel } = Collapse;


const Edu = () => {
  const {category, setCategory, course, setCourse, course_id, setCourseId} = useAuthStore()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getCategory = () => {
    getData("category").then(res => {
      setCategory(res.data.data)
    })
  }

  const getCourse = () => {
    getData("directions").then(res => {
      setCourse(res.data.data)
      console.log(res);
    })
  }

  useEffect(() => {
    getCategory()
    getCourse()
  }, [course_id]);
 
  
  return (
    <>
<Navbar/>
    <div className={style.edu}>
      <div className={style.eduimg}>
      </div>
      <div className={style.edutext}>
        <div className={style.edutextleft}>
        <Link to={'/talim-yonalishlari/'} >{t("Talim yo’nalishlari")} {'>'}</Link>
        <Collapse 
          accordion
          // expandIcon={<PlusOutlined />}
          expandIconPosition='end'
          style={{
            border: 'none',
            borderBottom: '1px solid rgba(128, 128, 128, 0.5)',
            backgroundColor: 'white',
            marginTop: '50px',
            boxShadow: 'none',
          }}>
          {category.map((item, key) => (
            <Panel header={
              lang == "uz" 
              ? item.nameUZ 
              : lang == "ru" 
              ? item.nameRU 
              : item.nameEN
            } key={key}>
              {course.map((it, key) => (
                <div className={style.course_gap} key={key} onClick={() => setCourseId(it.id)}>
                  <Link  to={`/talim-yonalishlari/${it.id}/`} >
                    <p>{item.id == it.category.id ? <>
                      {
                        lang == "uz" 
                        ? it.nameUZ
                        : lang == "ru" 
                        ? it.nameRU 
                        : it.nameEN
                      }
                    </> 
                     : <></>}</p>
                  </Link>
                </div>
              ))}
            </Panel>
          ))}
        </Collapse>
        </div>
        <div className={style.edutextright}>
          <h2>{t("Yangiliklar")}</h2>
          <OtherNews />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Edu