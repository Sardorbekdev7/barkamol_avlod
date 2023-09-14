import React, { useEffect, useRef } from 'react'
import style from './style/course.module.css'
import { Button } from 'antd'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId, makeTitle } from '../../../service/api.service'
import { Link, useParams } from 'react-router-dom'
import Links from '../../news/newspage/Links'


const Course = () => {
  const { course, setCourse, course_id, setCourseId, coursewithid, setCoursewithid, path, setPath } = useAuthStore()

  const {userId} = useParams()
  
  const getId = () => {
    setCourseId(userId)
  }

  const getCourse = () => {
    getDataId("courses", userId).then(res => {
      setCoursewithid(res.data)
      console.log(res);
    })
  }
  
  const getCourses = () => {
    getData("courses").then(res => {
      setCourse(res.data)
    })
  }
  
  useEffect(() => {
    console.log(userId);
  }, [])
  
  useEffect(() => {
    getId()
    getCourse()
    getCourses()
  }, [course_id]);

 


  return (
      <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link to={'/'}>Ta'lim yo'nalishlari</Link> {`>`} <Link to={`/talim-yonalishlari/${userId}/`}>{coursewithid.name_uz} to'garagi</Link></p> 
          </div>
          <h1>{coursewithid.name_uz}</h1>
          <img src={coursewithid.image} alt='' />
          <div className={style.newspagetext}>
            <p>
              {coursewithid.description_uz}
            </p>
          </div>
          <div className='back'>
            <Link to={'/'}>Ortga</Link>
          </div>

        </div>
        <div className={style.othernews}>
          <h2>Boshqa to’garaklar</h2>
          <div className={style.change_course}>
            {
              course.map((item, key) => 
                (
                  <div key={key} onClick={() => setCourseId(item.id)} >
                    <Link  to={`/talim-yonalishlari/${item.id}/`}>
                      <Button>{item.name_uz}</Button>
                    </Link>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
          <Links />
    </div>
  )
}

export default Course