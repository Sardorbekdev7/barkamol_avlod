import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Image,Input,  Modal, Row} from "antd"
import { getData, url } from '../../../service/api.service';
import { ca } from 'date-fns/locale';
import Item from 'antd/es/list/Item';

const cookies = new Cookies()
const { TextArea } = Input;
const Courses = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [nameUZ, setnameUZ] = useState('')
    const [nameRU, setnameRU] = useState('')
    const [nameEN, setnameEN] = useState('')
    const [descriptionUZ , setDescriptionUZ] = useState('')
    const [descriptionRU, setDescriptionRU] = useState('')
    const [descriptionEN, setDescriptionEN] = useState('')
    const [category, setCategory] = useState([])
    const [categor, setCategor] = useState('')
    const [course, setCourse] = useState([])
    const [fileIn,setFileIn] = useState([])
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        students: "",
        ratiotonumberstudents: "",
        derictions: "",
        url: ""
    })

    const handleChange = (e)=>{
        if(!e.target.files){
            return
        }
        setFileIn(e.target.files[0])
    }

    const formData = new FormData()
    formData.append('nameUZ', nameUZ)
    formData.append('nameRU', nameRU)
    formData.append('nameEN', nameEN)
    formData.append('descriptionUZ', descriptionUZ)
    formData.append('descriptionRU', descriptionRU)
    formData.append('descriptionEN', descriptionEN)
    formData.append('category', categor)
    formData.append('image', fileIn)

      const postCourse = () => {
        axios.post(`${url}/directions`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getCategory()
        getCourse()
      })
      }

      const getCourse = async () => {
        const response = await getData('directions').then((res => {
            setCourse(res.data.data)
        }))
      }

      const getCategory = async () => {
        const response = await getData('category').then((res => {
            setCategory(res.data.data)
        }))
      }


      const postData = () => {
        setOpen(false)
        postCourse()
        setnameUZ('')
        setnameRU('')
        setnameEN('')
        setDescriptionUZ('')
        setDescriptionRU('')
        setDescriptionEN('')
      }

      const deleteCategory = (id) => {
        axios.delete(`${url}/directions/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getCategory()
            getCourse()
        })
      }

      useEffect(() => {
        getCategory()
        getCourse()
      }, [])

      



    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Kurs sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Kurs qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Name uz</th>
                        <th>Kategoriyasi uz</th>
                        <th>Izoh uz</th>
                        <th>Rasm</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {course.length != 0 ? course.map((item, key)=> (
                        <tr key={key} style={{border: 'gray 1px solid'}}>
                            <td>{key + 1}</td>
                            <td>{item?.nameUZ}</td>
                            <td>{item?.category.nameUZ}</td>
                            <td>{item?.descriptionUZ}</td>
                            <td><Image src={item?.image} width={100} height={100} /></td>
                            <td><Button danger onClick={() => deleteCategory(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Kurs qo'shish"
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
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Kategoriyalar</p>
                <select onChange={(e) => setCategor(e.target.value)}>
                    {category.length != 0 ? category.map((i, key) => (
                        <option key={key} value={i.id}>{i.nameUZ}</option>
                    )): <></>}
                </select>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Rasm</p>
                <input type="file" name="" id="" onChange={handleChange} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default Courses

