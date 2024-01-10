import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Button,Col,Form,Input,  Modal, Row, Upload, Image, DatePicker, Select} from "antd"
import { getData, url } from '../../../service/api.service';

const cookies = new Cookies()

const Statistics = ()=>{
    const token = cookies.get('token');
    const [open, setOpen] = useState(false);
    const [students, setstudents] = useState(0)
    const [ratiotonumberstudents, setratiotonumberstudents] = useState(0)
    const [derictions, setderictions] = useState(0)
    const [employees , setemployees ] = useState(0)
    const [statistics, setStatistics] = useState()
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
    formData['numberOfStudents'] = students
    formData['ratioToTheNumberOfStudents'] = ratiotonumberstudents
    formData['numberOfDirections'] = derictions
    formData['numberOfEmployees'] = employees

      const postStatistics = () => {
        axios.post(`${url}/statistics`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getStatistics()
      })
      }

      const editVideos = () => {
        axios.patch(`${url}/statistics`, formData).then((res) => {
            getStatistics()
        })
      }

    //   const getStatistics = async () => {
    //     const response = await getData('statistics').then((res => {
    //         setStatistics(res.data.data)
    //     }))
    //   }
      const getStatistics = () => {
        axios(`${url}/statistics`).then((res) => {
            setStatistics(res.data.data)
        })
      }

      getStatistics()

      const postData = () => {
        setOpen(false)
        postStatistics()
        setstudents('')
        setratiotonumberstudents('')
        setderictions('')
        setemployees('')
      }

      useEffect(() => {
        getStatistics()
      }, [])
      
      

    return(
       <>
        <div>
            <div className="create-employee" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}} >
            <h1>Statistika sahifasi</h1>
                <Button type="primary" onClick={() => setOpen(true)} >Statistika qo'shish</Button>
            </div>
            <div>
            <table style={{width: '100%', border: 'gray 1px solid'}}>
                <thead style={{border: 'gray 1px solid'}}>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>N</th>
                        <th>Toshkent BABM ga jalb qilingan o’quvchilar soni</th>
                        <th>Maktabi o’quvchilari soniga nisbati</th>
                        <th>Toshkent BABM dagi xodimlar soni</th>
                        <th>Toshkent BABM dagi to’garaklar soni</th>
                    </tr>
                </thead>
                <tbody>
                        <tr style={{border: 'gray 1px solid'}}>
                            <td>1</td>
                            <td>{statistics?.numberOfStudents}</td>
                            <td>{statistics?.ratioToTheNumberOfStudents}</td>
                            <td>{statistics?.numberOfEmployees}</td>
                            <td>{statistics?.numberOfDirections}</td>
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
                <p>Toshkent BABM ga jalb qilingan o’quvchilar soni</p>
                <Input type='number' placeholder="students" onChange={(e) => setstudents(e.target.value)} value={students} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Maktabi o’quvchilari soniga nisbati</p>
                <Input type='number' placeholder="ratiotonumberstudents" onChange={(e) => setratiotonumberstudents(e.target.value)} value={ratiotonumberstudents} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Toshkent BABM dagi xodimlar soni</p>
                <Input type='number'  placeholder="derictions" onChange={(e) => setderictions(e.target.value)} value={derictions} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
                <p>Toshkent BABM dagi to’garaklar soni</p>
                <Input type='number'  placeholder="Lavozim UZ" onChange={(e) => setemployees(e.target.value)} value={employees} />
            </Col>
        </Row>
       </Modal>
       </>
    )
}
export default Statistics

