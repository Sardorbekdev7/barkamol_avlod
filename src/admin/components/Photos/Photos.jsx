import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';
import { createElement } from 'react';

const cookies = new Cookies()

const Photos = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [titleUZ, setTitleUZ] = useState('')
    const [titleRU, setTitleRU] = useState('')
    const [titleEN, setTitleEN] = useState('')
    const [photos, setPhotos] = useState([])
    const [fileIn,setFileIn] = useState([])
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        titleUZ: "",
        titleRU: "",
        titleEN: "",
        images: ""
    })
    const handleChange = (e)=>{
        for(let imageFile of e.target.files){
            formData.append('images', imageFile)
        }
    }
    let element = []
    const addElement = () => {
        element.push(createElement('input', {type: 'file'}))
        
    }

    const formData = new FormData()
    formData.append('titleUZ', titleUZ)
    formData.append('titleRU', titleRU)
    formData.append('titleEN', titleEN)
    

      const postPhotos = () => {
        axios.post(`${url}/photo`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getPhotos()
      })
      }

      const editPhotos = () => {
        axios.patch(`${url}/photo`, formData).then((res) => {
            getPhotos()
        })
      }

      const getPhotos = async () => {
        const response = await getData('photo').then((res => {
            setPhotos(res.data.data)
        }))
      }
      const deletePhotos = (id) => {
        axios.delete(`${url}/photo/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getPhotos()
        })
      }


      const postData = () => {
        setOpen(false)
        postPhotos()
        setTitleUZ('')
        setTitleRU('')
        setTitleEN('')
        setFileIn('')
      }

      useEffect(() => {
        getPhotos()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Rasmlar sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Rasmlar qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Title</th>
                        <th>Rasmlar</th>
                        <th>Qo'shilgan sanasi</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.length != 0 ? photos.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.titleUZ}</td>
                            <td style={{textAlign: 'center'}}>
                                {item.images.map((item, key) => (
                                    <Image width={40} src={item.url} key={key} />
                                ))}
                            </td>
                            <td>{item.createdAt}</td>
                            <td><Button danger onClick={() => deletePhotos(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Rasm qo'shish"
            centered
            open={open}
            onOk={() => postData()}
            onCancel={() => setOpen(false)}
       >
        <Row >
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title Uz</p>
                <Input placeholder="titleUZ" onChange={(e) => setTitleUZ(e.target.value)} value={titleUZ} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title Ru</p>
                <Input placeholder="titleRU" onChange={(e) => setTitleRU(e.target.value)} value={titleRU} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title Eng</p>
                <Input placeholder="titleEN" onChange={(e) => setTitleEN(e.target.value)} value={titleEN} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Rasm</p>
                <input type="file" multiple name="" id="" onChange={handleChange} />
                {element.map((item, key) => ReactDOM.render(item))}
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default Photos

