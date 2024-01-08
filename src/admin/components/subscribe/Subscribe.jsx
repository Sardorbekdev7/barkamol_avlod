import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';

const cookies = new Cookies()

const Subscribe = ()=>{
    const token = cookies.get('token');
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [subscribe, setSubscribe] = useState([])
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        id: "",
        image: "",
        name: "",
        email: ""
    })

    

      const editSubscribe = () => {
        axios.patch(`${url}/subscribe`, formData).then((res) => {
            getSubscribe()
        })
      }

      const getSubscribe = async () => {
        const response = await axios.get(`${url}/subscribe`,{ 
          headers: {
          'Authorization': `Bearer ${token}`,
        }}).then((res => {
          setSubscribe(res.data.data)
        }))
      }
      const deleteSubscribe = (id) => {
        axios.delete(`${url}/subscribe/${String(id)}`,{ 
            headers: {
            'Authorization': `Bearer ${token}`,
          }}).then(res => {
            getSubscribe()
        })
      }


      useEffect(() => {
        getSubscribe()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Bog'lanish sahifasi</h1>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Qo'shilgan sanasi</th>
                        <th>O'chirish</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribe.length != 0 ? subscribe.map((item, key)=> (
                        <tr style={{border: 'gray 1px solid'}} key={key}>
                            <td>{key + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email }</td>
                            <td>{item.createdAt}</td>
                            <td><Button danger onClick={() => deleteSubscribe(item.id)} >O'chirish</Button></td>
                        </tr>
                    )): <></>}
                </tbody>
            </table>
            </div>
       </div>
       </>
    )
}
export default Subscribe

