import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';

const cookies = new Cookies()
const { TextArea } = Input;
const Category = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [nameUZ, setnameUZ] = useState('')
    const [nameRU, setnameRU] = useState('')
    const [nameEN, setnameEN] = useState('')
    const [descriptionUZ , setDescriptionUZ] = useState('')
    const [descriptionRU, setDescriptionRU] = useState('')
    const [descriptionEN, setDescriptionEN] = useState('')
    const [category, setCategory] = useState([])
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
    formData['nameUZ'] = nameUZ
    formData['nameRU'] = nameRU
    formData['nameEN'] = nameEN
    formData['descriptionUZ'] = descriptionUZ
    formData['descriptionRU'] = descriptionRU
    formData['descriptionEN'] = descriptionEN

      const postCategory = () => {
        axios.post(`${url}/category`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getCategory()
      })
      }

      const getCategory = async () => {
        const response = await getData('category').then((res => {
            setCategory(res.data.data)
            console.log(res.data.data)
        }))
      }
      const deleteAbout = (id) => {
        axios.delete(`${url}/category/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getCategory()
        })
      }


      const postData = () => {
        setOpen(false)
        postCategory()
        setnameUZ('')
        setnameRU('')
        setnameEN('')
        setDescriptionUZ('')
        setDescriptionRU('')
        setDescriptionEN('')
      }

      const deleteCategory = (id) => {
        axios.delete(`${url}/category/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getCategory()
        })
      }

      useEffect(() => {
        getCategory()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Kurs kategoriyasi sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Kategoriya qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Name uz</th>
                        <th>Izoh uz</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {category.length != 0 ? category.map((item, key)=> (
                        <tr key={key} style={{border: 'gray 1px solid'}}>
                            <td>{key + 1}</td>
                            <td>{item?.nameUZ}</td>
                            <td>{item?.descriptionUZ}</td>
                            <td><Button danger onClick={() => deleteCategory(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Kategoriya qo'shish"
            centered
            open={open}
            onOk={() => postData()}
            onCancel={() => setOpen(false)}
       >
        <Row >
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Name UZ</p>
                <Input placeholder="Name uz" onChange={(e) => setnameUZ(e.target.value)} value={nameUZ} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Name RU</p>
                <Input placeholder="Name ru" onChange={(e) => setnameRU(e.target.value)} value={nameRU} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Name EN</p>
                <Input placeholder="Name en" onChange={(e) => setnameEN(e.target.value)} value={nameEN} />
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
export default Category

