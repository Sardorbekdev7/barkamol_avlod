import axios from 'axios'
import Cookies from 'universal-cookie'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { url } from '../../service/api.service'
import './style/style.css'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const cookies = new Cookies()

  const LoginAdmin = () => {
    axios.post(`${url}/admin/login`, {username, password}).then((res) => {
      const  data  = res.data.data
      console.log(res.data);
                if (data) {
                    cookies.set('token', res.data.data)
                    navigate('/admin')
                } 
    }).catch((err) => {
      message.error("Bunday foydalanuvchi topilmadi!")
    })
  }

  return (
    <div className='login'>
      <h1>Kirish</h1>
      <div className='login-inputs'>
        <div>
          <p>Login</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='login-button'>
        <button onClick={LoginAdmin} type='submit'>
            Kirish
        </button>
      </div>
    </div>
  )
}

export default AdminLogin;