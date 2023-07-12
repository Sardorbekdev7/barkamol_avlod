import { Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    key: '1',
    label: (
      <Link to="/maktab/maktab-haqida/">Maktab haqida</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link to="/maktab/rahbariyat/">Rahbariyat</Link>
    )
  },
  {
    key: '3',
    label: (
      <Link to="/maktab/maktab-tuzilmasi/">Maktab tuzilmasi</Link>
    )
  }
]


const Maktab = () => {

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Maktab
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Maktab