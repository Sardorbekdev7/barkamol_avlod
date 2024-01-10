import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';

const cookies = new Cookies()
const { TextArea } = Input;
const About = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [titleUZ, setTitleUZ] = useState('')
    const [titleRU, setTitleRU] = useState('')
    const [titleEN, setTitleEN] = useState('')
    const [descriptionUZ , setDescriptionUZ] = useState('')
    const [descriptionRU, setDescriptionRU] = useState('')
    const [descriptionEN, setDescriptionEN] = useState('')
    const [about, setAbout] = useState()
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        students: "",
        ratiotonumberstudents: "",
        derictions: "",
        url: ""
    })

    const formData = {}
    formData['titleUZ'] = titleUZ
    formData['titleRU'] = titleRU
    formData['titleEN'] = titleEN
    formData['descriptionUZ'] = descriptionUZ
    formData['descriptionRU'] = descriptionRU
    formData['descriptionEN'] = descriptionEN

      const postAbout = () => {
        axios.post(`${url}/about`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getAbout()
      })
      }

      const getAbout = async () => {
        const response = await getData('about').then((res => {
            setAbout(res.data.data)
        }))
      }
      const deleteAbout = (id) => {
        axios.delete(`${url}/aboout/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getAbout()
        })
      }


      const postData = () => {
        setOpen(false)
        postAbout()
        setTitleUZ('')
        setTitleRU('')
        setTitleEN('')
        setDescriptionUZ('')
        setDescriptionRU('')
        setDescriptionEN('')
      }

      useEffect(() => {
        getAbout()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Haqida sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Haqida qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Title uz</th>
                        <th>Title Ru</th>
                        <th>Izoh uz</th>
                        <th>Izoh ru</th>
                    </tr>
                </thead>
                <tbody>
                        <tr style={{border: 'gray 1px solid'}}>
                            <td>1</td>
                            <td>{about?.titleUZ}</td>
                            <td>{about?.titleRU}</td>
                            <td>{about?.descriptionUZ}</td>
                            <td>{about?.descriptionRU}</td>
                        </tr>
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Statistika qo'shish"
            centered
            open={open}
            onOk={() => postData()}
            onCancel={() => setOpen(false)}
       >
        <Row >
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title UZ</p>
                <Input placeholder="Title uz" onChange={(e) => setTitleUZ(e.target.value)} value={titleUZ} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title RU</p>
                <Input placeholder="Title ru" onChange={(e) => setTitleRU(e.target.value)} value={titleRU} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Title EN</p>
                <Input placeholder="Title en" onChange={(e) => setTitleEN(e.target.value)} value={titleEN} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Izoh uz</p>
                <TextArea  placeholder="Izoh UZ" onChange={(e) => setDescriptionUZ(e.target.value)} value={descriptionUZ} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Izoh ru</p>
                <TextArea  placeholder="Izoh RU" onChange={(e) => setDescriptionRU(e.target.value)} value={descriptionRU} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Izoh en</p>
                <TextArea  placeholder="Izoh EN" onChange={(e) => setDescriptionEN(e.target.value)} value={descriptionEN} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default About

