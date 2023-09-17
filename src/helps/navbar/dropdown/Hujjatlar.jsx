import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import i18n from '../../../locale/i18next';
import { useTranslation } from "react-i18next";

const HujjatlarNavbar = () => {
  const { t } = useTranslation();

  
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const items = [
    {
      key: '1',
      label: (
        <a href='https://lex.uz/docs/-6129618' target='_blank'>{t("331-qaror")}</a>
      )
    },
    {
      key: '2',
      label: (
        <a href='https://lex.uz/docs/4532156' target='_blank'>{t("4467-qaror")}</a>
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
             {t("Hujjatlar")}
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default HujjatlarNavbar