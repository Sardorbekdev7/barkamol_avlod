
import React, { useEffect, useState } from 'react'
import img from '../../../assets/about/img.svg'

import style from './style/about.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../../locale/i18next';
import Footer from '../../footer/Footer';
import Navbar from '../../../helps/navbar/Navbar';
import { getData } from '../../../service/api.service';

export const About = () => {
  const [lang, setLang] = useState();
  const [about, setAbout] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const getAbout = async () => {
    const response = await getData('about').then(res => {
      setAbout(res.data.data)
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAbout()
  }, [])

  console.log(about);

  return (
    <>
      <Navbar />
      <div className={style.about}>
        <div className={style.aboutlink}>
          <p>{t("maktab")} {'>'}</p>
          <Link to={'/maktab/maktab-haqida/'}> {t("Maktabhaqida")}</Link>
        </div>
        <div className={style.abouttext}>
          <img src={img} alt='' />
          <div className={style.abouttexts}>
            <h1>{lang == "uz"
              ? about?.titleUZ
              : lang == "ru"
                ? about?.titleRU
                : about?.titleEN}</h1>
            <p>{about?.descriptionUZ}</p>
          </div>
        </div>
        <div className='back'>
          <Link to={'/'}>{t("Ortga")}</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
