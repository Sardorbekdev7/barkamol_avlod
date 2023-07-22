

import { Dropdown, Space } from 'antd'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/auth.store'
import { getData } from '../../../service/api.service'
import { category } from '../../../data/data'






const Talim  = () => {

  // const {category, setCategory} = useAuthStore()

  // const getCat = () => {
  //   getData('categories').then(res => {
  //     setCategory(res.data)
  //   })
  // }

  // useEffect(() => {
  //   getCat()
  // }, []);

  const items = []

  category.map((item, key) => {
    items.push(
      {
        key: key,
        label: (
        <Link to={'/talim-yonalishlari/'}>{item.name_uz}</Link>
        )
      }
    )
  })

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Talim 
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Talim 