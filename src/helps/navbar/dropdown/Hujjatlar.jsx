import { Dropdown, Space } from 'antd'
import React from 'react'


const items = [
  {
    key: '1',
    label: (
      <a href='https://lex.uz/docs/-6129618' target='_blank'>331-qaror</a>
    )
  },
  {
    key: '2',
    label: (
      <a href='https://lex.uz/docs/4532156' target='_blank'>4467-qaror</a>
    )
  }
]
const HujjatlarNavbar = () => {

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Hujjatlar
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default HujjatlarNavbar