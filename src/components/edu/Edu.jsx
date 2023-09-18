import style from './style/edu.module.css'
import { Collapse } from 'antd'
import { useEffect, useState } from 'react'
import OtherNews from '../news/newspage/OtherNews'
import { useAuthStore } from '../../store/auth.store';
import { getData, slugify } from '../../service/api.service';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next';


const { Panel } = Collapse;


const Edu = () => {
  const {category, setCategory, course, setCourse, course_id, setCourseId} = useAuthStore()
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const getCategory = () => {
    getData("categories").then(res => {
      setCategory(res.data)
    })
  }

  const getCourse = () => {
    getData("courses").then(res => {
      setCourse(res.data)
    })
  }

  useEffect(() => {
    getCategory()
    getCourse()
  }, [course_id]);
 
  
  return (
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
              ? item.name_uz 
              : lang == "ru" 
              ? item.name_ru 
              : item.name_en
            } key={key}>
              {course.map((it, key) => (
                <div key={key} onClick={() => setCourseId(it.id)}>
                  <Link  to={`/talim-yonalishlari/${it.id}/`} >
                    <p>{item.id == it.category ? <>
                      {
                        lang == "uz" 
                        ? item.name_uz 
                        : lang == "ru" 
                        ? item.name_ru 
                        : item.name_en
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
  )
}

export default Edu