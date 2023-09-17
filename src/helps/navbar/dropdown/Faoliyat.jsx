import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';


const Faoliyat = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const items = [
    {
      key: '1',
      label: (
        <Link to={'/faoliyat/togarak-rahbarlari/'}>{t("To'garak boshliqlari")}</Link>
      )
    },
    {
      key: '2',
      label: (
        <Link to={'/faoliyat/boshqa-xodimlar/'}>{t("Boshqa xodimlar")}</Link>
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
             {t("Faoliyat")}
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Faoliyat