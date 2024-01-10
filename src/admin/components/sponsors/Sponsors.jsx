import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker} from "antd"
import { getData, url } from '../../../service/api.service';
const { TextArea } = Input;
const cookies = new Cookies()

const Sponsors = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [nameUZ, setnameUZ] = useState('')
    const [nameRU, setnameRU] = useState('')
    const [nameEN, setnameEN] = useState('')
    const [partners, setPartners] = useState([])
    const [fileIn,setFileIn] = useState()
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        nameUZ: "",
        nameRU: "",
        titleEN: "",
    })
    const handleChange = (e)=>{
        if(!e.target.files){
            return
        }
        setFileIn(e.target.files[0])
    }

    const formData = new FormData()

    formData.append('image', fileIn)
    formData.append('nameUZ', nameUZ)
    formData.append('nameRU', nameRU)
    formData.append('titleEN', nameEN)


      const postPartners = () => {
        axios.post(`${url}/partners`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getPartners()
      })
      }

      const editNews = () => {
        axios.patch(`${url}/partners`, formData).then((res) => {
            getPartners()
        })
      }

      const getPartners = async () => {
        const response = await getData('partners').then((res => {
            setPartners(res.data.data)
        }))
      }
      const deletePartners = (id) => {
        axios.delete(`${url}/partners/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getPartners()
        })
      }


      const postData = () => {
        setOpen(false)
        postPartners()
        setnameUZ('')
        setnameRU('')
        setnameEN('')
        setFileIn('')
      }

      useEffect(() => {
        getPartners()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-news" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Hamkorlar sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Hamkor qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Nomi</th>
                        <th>Rasm</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {partners.length != 0 ? partners.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nameUZ}</td>
                            <td><Image src={item.image} width={100} height={100} /></td>
                            <td><Button danger onClick={() => deletePartners(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       <Modal
       title="Hamkor qo'shish"
       centered
       open={open}
       onOk={() => postData()}
       onCancel={() => setOpen(false)}
       width={1000}
       >
        <Row>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Nomi Uz</p>
                <Input placeholder="nameUZ" onChange={(e) => setnameUZ(e.target.value)} value={nameUZ} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Nomi Ru</p>
                <Input placeholder="nameRU" onChange={(e) => setnameRU(e.target.value)} value={nameRU} />
            </Col>
            <Col g={12} md={24} sm={24} xs={24}>
                <p>Nomi Eng</p>
                <Input placeholder="nameEN" onChange={(e) => setnameEN(e.target.value)} value={nameEN} />
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
export default Sponsors

