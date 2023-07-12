import { Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    key: '1',
    label: (
      <Link to={'/faoliyat/togarak-rahbarlari/'}>To{`'`}garak boshliqlari</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link to={'/faoliyat/boshqa-xodimlar'}>Boshqa xodimlar</Link>
    )
  }
]


const Faoliyat = () => {

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Faoliyat
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Faoliyat