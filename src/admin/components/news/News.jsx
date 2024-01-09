import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker} from "antd"
import { getData, url } from '../../../service/api.service';
const { TextArea } = Input;
const cookies = new Cookies()

const News = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [titleUz, setTitleUz] = useState('')
    const [titleRu, setTitleRu] = useState('')
    const [titleEng, setTitleEng] = useState('')
    const [subTitleUZ , setSubTitleUZ ] = useState('')
    const [subTitleRu , setSubTitleRu ] = useState('')
    const [subTitleEn , setSubTitleEn ] = useState('')
    const [descriptionUZ , setDescriptionUZ ] = useState('')
    const [descriptionRu , setDescriptionRu ] = useState('')
    const [descriptionEn , setDescriptionEn ] = useState('')
    const [news, setNews] = useState([])
    const [fileIn,setFileIn] = useState()
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        titleUZ: "",
        titleRU: "",
        titleEN: "",
        subTitleUZ: "",
        subTitleRU: "",
        subTitleEN: "",
        descriptionUZ: "",
        descriptionRU: "",
        descriptionEN: "",
    })
    const handleChange = (e)=>{
        if(!e.target.files){
            return
        }
        setFileIn(e.target.files[0])
    }

    const formData = new FormData()

    formData.append('image', fileIn)
    formData.append('titleUZ', titleUz)
    formData.append('titleRU', titleRu)
    formData.append('titleEN', titleEng)
    formData.append('subTitleUZ', subTitleUZ)
    formData.append('subTitleRU', subTitleRu)
    formData.append('subTitleEN', subTitleEn)
    formData.append('descriptionUZ', descriptionUZ)
    formData.append('descriptionRU', descriptionRu)
    formData.append('descriptionEN', descriptionEn)

    console.log(titleUz, subTitleUZ, descriptionUZ);

      const postNews = () => {
        axios.post(`${url}/news`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getNews()
      })
      }

      const editNews = () => {
        axios.patch(`${url}/news`, formData).then((res) => {
            getNews()
        })
      }

      const getNews = async () => {
        const response = await getData('news').then((res => {
            setNews(res.data.data)
        }))
      }
      const deleteNews = (id) => {
        axios.delete(`${url}/news/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getNews()
        })
      }


      const postData = () => {
        setOpen(false)
        postNews()
        setTitleUz('')
        setTitleRu('')
        setTitleEng('')
        setSubTitleUZ('')
        setSubTitleRu('')
        setSubTitleEn('')
        setDescriptionUZ('')
        setDescriptionRu('')
        setDescriptionEn('')
        setFileIn('')
      }

      useEffect(() => {
        getNews()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-news" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Yangiliklar sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Yangilik qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Title</th>
                        <th>Rasm</th>
                        <th>Qisqa izoh</th>
                        <th>Izoh</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {news.length != 0 ? news.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.titleUZ}</td>
                            <td><Image src={item.image} width={100} height={100} /></td>
                            <td>{item.subTitleUZ }</td>
                            <td>{item.descriptionUZ}</td>=
                            <td><Button danger onClick={() => deleteNews(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
       title="Yangiliklar qo'shish"
       centered
       open={open}
       onOk={() => postData()}
       onCancel={() => setOpen(false)}
       width={1000}
       >
        <Row>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Title Uz</p>
                <Input placeholder="TitleUZ" onChange={(e) => setTitleUz(e.target.value)} value={titleUz} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Title Ru</p>
                <Input placeholder="TitleRU" onChange={(e) => setTitleRu(e.target.value)} value={titleRu} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Title Eng</p>
                <Input placeholder="TitleENG" onChange={(e) => setTitleEng(e.target.value)} value={titleEng} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Qisqa Izoh Uz</p>
                <TextArea type='textarea' placeholder="Qisqa Izoh Uz" onChange={(e) => setSubTitleUZ(e.target.value)} value={subTitleUZ} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Qisqa Izoh Ru</p>
                <TextArea placeholder="Qisqa Izoh Ru" onChange={(e) => setSubTitleRu(e.target.value)} value={subTitleRu} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Qisqa Izoh Eng</p>
                <TextArea placeholder="Qisqa Izoh Eng" onChange={(e) => setSubTitleEn(e.target.value)} value={subTitleEn} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Izoh Uz</p>
                <TextArea placeholder="Izoh Ru" onChange={(e) => setDescriptionUZ(e.target.value)} value={descriptionUZ} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Izoh Ru</p>
                <TextArea placeholder="Izoh Ru" onChange={(e) => setDescriptionRu(e.target.value)} value={descriptionRu} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Izoh Eng</p>
                <TextArea placeholder="Izoh Eng" onChange={(e) => setDescriptionEn(e.target.value)} value={descriptionEn} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Rasm</p>
                <input type="file" name="" id="" onChange={handleChange} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default News

