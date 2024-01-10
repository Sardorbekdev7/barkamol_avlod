

import { Dropdown, Space } from 'antd'


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/auth.store'
import { getData } from '../../../service/api.service'

import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';




const Talim  = () => {
  const { t } = useTranslation();
  const {category, setCategory} = useAuthStore()
  const [lang, setLang] = useState();

  const getCat = () => {
    getData('category').then(res => {
      setCategory(res.data.data)
    })
  }

  useEffect(() => {
    getCat()
  }, []);

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const items = []

  category.map((item, key) => {
    items.push(
      {
        key: key,
        label: (
        <Link to={'/talim-yonalishlari/'}>{
          lang == "uz" 
          ? item.nameUZ 
          : lang == "ru" 
          ? item.nameRU 
          : item.nameEN
        }</Link>
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
             {t("Ta'lim yo'nalishlari")}
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Talim 