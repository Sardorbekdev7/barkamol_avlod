import { Dropdown, Space } from 'antd'

import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    key: '1',
    label: (
      <Link to={'/axborot-xizmati/fotogalereya'}>Galereya</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link to={'/axborot-xizmati/videogalereya'}>Videogaleya</Link>
    )
  }
]


const Axborot = () => {

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Axborot xizmatlari
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Axborot