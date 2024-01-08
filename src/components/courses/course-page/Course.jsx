import React, { useEffect, useRef } from 'react'
import style from './style/course.module.css'
import { Button } from 'antd'
import { useAuthStore } from '../../../store/auth.store'
import { getData, getDataId, makeTitle, url } from '../../../service/api.service'
import { Link, useParams } from 'react-router-dom'
import Links from '../../news/newspage/Links'
import Footer from '../../footer/Footer'
import Navbar from '../../../helps/navbar/Navbar'
import axios from 'axios'


const Course = () => {
  const { course, setCourse, course_id, setCourseId, coursewithid, setCoursewithid, path, setPath } = useAuthStore()

  const {userId} = useParams()
  
  const getId = () => {
    setCourseId(userId)
  }

  const getCourse = () => {
    axios.get(url + `/directions/by-id/${userId}`).then(res => {
      setCoursewithid(res.data.data)
      console.log(res);
    })
  }
  
  const getCourses = () => {
    getData("directions").then(res => {
      setCourse(res.data.data)
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
    <>
    <Navbar/>
      <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link to={'/'}>Ta'lim yo'nalishlari</Link> {`>`} <Link to={`/talim-yonalishlari/${userId}/`}>{coursewithid.nameUZ} to'garagi</Link></p> 
          </div>
          <h1>{coursewithid.nameUZ}</h1>
          <img src={coursewithid.image} alt='' />
          <div className={style.newspagetext}>
            <p>
              {coursewithid.descriptionUZ}
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
                      <Button>{item.nameUZ}</Button>
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
    <Footer />
    </>
  )
}

export default Course