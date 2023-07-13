import style from './style/otherstuffs.module.css'
import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useAuthStore } from '../../store/auth.store'
import { Link } from 'react-router-dom'
import { getData } from '../../service/api.service'
import noimage from '../../assets/noimage.png'

const OtherStuffs = () => {
  const {stuffLeader, setStuffLeader} = useAuthStore()

  const getStuffLeader = () => {
    getData('leaders').then(res => {
      setStuffLeader(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getStuffLeader()
  }, []);

  const boshqa = []

  stuffLeader.map((item) => {
    if (item.type == 'Boshqa xodimlar') {
        boshqa.push(item)
    }
  })
  
  return (
    <div className={style.container}>
      <div className={style.stuffs}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} to={'/faoliyat/boshqa-xodimlar/'}>Boshqa xodimlar</Link>
        </div>
        <div>
          <div className={style.title}>
            <h1>Toshkent shahar “Barkamol Avlod” bolalar maktabining xodimlari</h1>
          </div>
          <div>
            <Row>
              {boshqa.map((item, key) => (
                <Col style={{margin: '0 auto'}} key={key} lg={6} md={12} sm={24} >
                  <div className={style.stuffCard}>
                    {item.image == null ? <img src={noimage} alt='' style={{width: '250px', height: '333px'}}/> : <img src={item.image} alt='' style={{width: '250px', height: '333px'}}/>}
                      <div className={style.stuffCardText} >
                      <h1>{item.name_uz}</h1>
                      <p>{item.description_uz}</p>
                      <a href={`tel:${item.phone}`}>Telefon raqami: {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>E-mail: {item.email}</a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      <div className='back'>
          <Link href={'/'}>Ortga</Link>
      </div>
      </div>
    </div>
  )
}

export default OtherStuffs