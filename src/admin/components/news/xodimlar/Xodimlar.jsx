import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../../service/api.service';

const cookies = new Cookies()

const Xodimlar = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [nameUz, setNameUz] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [nameEng, setNameEng] = useState('')
    const [positionUZ , setpositionUZ ] = useState('')
    const [positionRU , setpositionRU ] = useState('')
    const [positionEN , setpositionEN ] = useState('')
    const [phonenumber , setPhoneNumber ] = useState('')
    const [email , setEmail ] = useState('')
    const [telegram , setTelegram ] = useState('')
    const [instagram , setInstagram ] = useState('')
    const [facebook , setFacebook ] = useState('')
    const [role , setRole ] = useState('')
    const [employee, setEmployee] = useState([])
    const [fileIn,setFileIn] = useState()
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        titleUZ: "",
        titleRU: "",
        titleEN: "",
        positionUZ: "",
        positionRU: "",
        positionEN: "",
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
    formData.append('nameUZ', nameUz)
    formData.append('nameRU', nameRu)
    formData.append('nameEN', nameEng)
    formData.append('positionUZ', positionUZ)
    formData.append('positionRU', positionRU)
    formData.append('positionEN', positionEN)
    formData.append('phoneNumber', phonenumber)
    formData.append('email', email)
    formData.append('telegram', telegram)
    formData.append('instagram', instagram)
    formData.append('facebook', facebook)
    formData.append('role', role)

      const postEmployee = () => {
        axios.post(`${url}/employee`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getEmployee()
      })
      }

      const editemployee = () => {
        axios.patch(`${url}/employee`, formData).then((res) => {
            getEmployee()
        })
      }

      const getEmployee = async () => {
        const response = await getData('employee').then((res => {
            setEmployee(res.data.data)
        }))
      }
      const deleteEmployee = (id) => {
        axios.delete(`${url}/employee/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getEmployee()
        })
      }


      const postData = () => {
        setOpen(false)
        postEmployee()
        setNameUz('')
        setNameRu('')
        setNameEng('')
        setpositionUZ('')
        setpositionRU('')
        setpositionEN('')
        setPhoneNumber('')
        setEmail('')
        setTelegram('')
        setInstagram('')
        setFacebook('')
        setRole('')
        setFileIn('')
      }

      useEffect(() => {
        getEmployee()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Yangiliklar sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Yangilik qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Name</th>
                        <th>Rasm</th>
                        <th>Lavozim</th>
                        <th>Tel</th>
                        <th>Email</th>
                        <th>Telegram</th>
                        <th>Instagram</th>
                        <th>Facebook</th>
                        <th>Role</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.length != 0 ? employee.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nameUZ}</td>
                            <td><Image src={item.image} width={100} height={100} /></td>
                            <td>{item.positionUZ }</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>{item.telegram}</td>
                            <td>{item.instagram}</td>
                            <td>{item.facebook}</td>
                            <td>{item.role}</td>
                            <td><Button danger onClick={() => deleteEmployee(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
            title="Xodim qo'shish"
            centered
            open={open}
            onOk={() => postData()}
            onCancel={() => setOpen(false)}
            width={1000}
       >
        <Row >
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Name Uz</p>
                <Input placeholder="NameUZ" onChange={(e) => setNameUz(e.target.value)} value={nameUz} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Name Ru</p>
                <Input placeholder="NameRU" onChange={(e) => setNameRu(e.target.value)} value={nameRu} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Name Eng</p>
                <Input placeholder="NameENG" onChange={(e) => setNameEng(e.target.value)} value={nameEng} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Lavozim Uz</p>
                <Input placeholder="Lavozim UZ" onChange={(e) => setpositionUZ(e.target.value)} value={positionUZ} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Lavozim Ru</p>
                <Input placeholder="Lavozim Ru" onChange={(e) => setpositionRU(e.target.value)} value={positionRU} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Lavozim Eng</p>
                <Input placeholder="Lavozim Eng" onChange={(e) => setpositionEN(e.target.value)} value={positionEN} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Telfon number</p>
                <Input placeholder="Tel" onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Email</p>
                <Input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Telegram</p>
                <Input placeholder="Telegram" onChange={(e) => setTelegram(e.target.value)} value={telegram} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Instagram</p>
                <Input placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)} value={instagram} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Facebook</p>
                <Input  placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)} value={facebook} />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Role</p>
                <Select
                    onChange={(e) => setRole(e)}
                    style={{
                        width: 200,
                    }}
                    options={
                        [
                            {
                                value: 'rahbariyat',
                                label: 'Rahbariyat'
                            },
                            {
                                value: 'boshqaxodimlar',
                                label: 'Boshqa xodimlar'
                            },
                            {
                                value: 'boshliqlar',
                                label: 'Rahbarlar'
                            }
                        ]
                    }
                />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
                <p>Rasm</p>
                <input type="file" name="" id="" onChange={handleChange} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default Xodimlar

