import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';

const Yangiliklar = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  return (
    <div>
        <Link to={'/yangiliklar'}>
            <p>
             {t("Yangiliklar")}
            </p>
        </Link>
    </div>
  )
}

export default Yangiliklar