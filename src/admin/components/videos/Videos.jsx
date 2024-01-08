import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';

const cookies = new Cookies()

const Videos = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [titleUZ, setTitleUZ] = useState('')
    const [titleRU, setTitleRU] = useState('')
    const [titleEN, setTitleEN] = useState('')
    const [urls , setUrls ] = useState('')
    const [videos, setVideos] = useState([])
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        titleUZ: "",
        titleRU: "",
        titleEN: "",
        url: ""
    })

    const formData = {}
    formData['titleUZ'] = titleUZ
    formData['titleRU'] = titleRU
    formData['titleEN'] = titleEN
    formData['url'] = urls

      const postVideos = () => {
        axios.post(`${url}/videos`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getVideos()
      })
      }

      const editVideos = () => {
        axios.patch(`${url}/videos`, formData).then((res) => {
            getVideos()
        })
      }

      const getVideos = async () => {
        const response = await getData('videos').then((res => {
            setVideos(res.data.data)
        }))
      }
      const deleteVideos = (id) => {
        axios.delete(`${url}/videos/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getVideos()
        })
      }


      const postData = () => {
        setOpen(false)
        postVideos()
        setTitleUZ('')
        setTitleRU('')
        setTitleEN('')
        setUrls('')
      }

      useEffect(() => {
        getVideos()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Videolar sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Video qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Qo'shilgan sanasi</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.length != 0 ? videos.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.titleUZ}</td>
                            <td>{item.url }</td>
                            <td>{item.createdAt}</td>
                            <td><Button danger onClick={() => deleteVideos(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Video qo'shish"
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
                <p>Youtube link</p>
                <Input placeholder="Lavozim UZ" onChange={(e) => setUrls(e.target.value)} value={urls} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default Videos

