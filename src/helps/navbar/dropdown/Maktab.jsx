import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';

const Maktab = () => {
  const { t } = useTranslation();
  const items = [
    {
      key: '1',
      label: (
        <Link to="/maktab/maktab-haqida/">{t("Maktabhaqida")}</Link>
      )
    },
    {
      key: '2',
      label: (
        <Link to="/maktab/rahbariyat/">{t("Rahbariyat")}</Link>
      )
    },
    {
      key: '3',
      label: (
        <Link to="/maktab/maktab-tuzilmasi/">{t("Maktab tuzilmasi")}</Link>
      )
    }
  ]
  
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
              {t("maktab")}
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Maktab