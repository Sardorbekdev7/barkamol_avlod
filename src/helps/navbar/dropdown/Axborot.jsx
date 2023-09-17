import { Dropdown, Space } from 'antd'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';



const Axborot = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);
  
  const items = [
    {
      key: '1',
      label: (
        <Link to={'/axborot-xizmati/fotogalereya'}>{t("Galereya")}</Link>
      )
    },
    {
      key: '2',
      label: (
        <Link to={'/axborot-xizmati/videogalereya'}>{t("Videogalereya")}</Link>
      )
    }
  ]
  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             {t("Axborot xizmatlari")}
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Axborot