import style from './style/edu.module.css'
import { Collapse } from 'antd'
import { useEffect, useState } from 'react'
import OtherNews from '../news/newspage/OtherNews'
import { useAuthStore } from '../../store/auth.store';
import { getData, slugify } from '../../service/api.service';
import { Link } from 'react-router-dom';


const { Panel } = Collapse;


const Edu = () => {
  const {category, setCategory, course, setCourse, course_id, setCourseId} = useAuthStore()

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
        <Link to={'/talim-yonalishlari/'} >Talim yo’nalishlari {'>'}</Link>
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
            <Panel header={item.name_uz} key={key}>
              {course.map((it, key) => (
                <Link key={key} onClick={() => setCourseId(it.id)} to={`/talim-yonalishlari/${it.id}/`} >
                  <p>{item.id == it.category ? it.name_uz : <></>}</p>
                </Link>
              ))}
            </Panel>
          ))}
        </Collapse>
        </div>
        <div className={style.edutextright}>
          <h2>Yangiliklar</h2>
          <OtherNews />
        </div>
      </div>
    </div>
  )
}

export default Edu