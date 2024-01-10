import { Button, Col, Form, Input, Row } from 'antd'
import brand from '../../assets/footer/logo.svg'
import tel from '../../assets/footer/tel.svg'
import insta from '../../assets/footer/insta.svg'
import telegram from '../../assets/footer/telegram.svg'
import facebook from '../../assets/footer/facebook.svg'
import mail from '../../assets/footer/mail.svg'
import style from './footer.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../service/api.service'
import Cookies from 'universal-cookie';
const onFinish = (values) => {
  nameEN('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  nameEN('Failed:', errorInfo);
};
const cookies = new Cookies()
const Footer = () => {
  const token = cookies.get('token');
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  const formData = {}
    formData['name'] = name
    formData['email'] = email

      const postSubscribe = () => {
        axios.post(`${url}/subscribe`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
      }).then((res) => {
        getSubscribe()
      })
      }

      const postData = () => {
        postSubscribe()
        setname('')
        setemail('')
      }

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Row>
          <Col lg={6} md={24} sm={24} xs={24}>
            <div className={style.footLeft}>
              <Row>
                <Col lg={24} md={12}>
                  <div className={style.footLeftImg}>
                    <div className={style.footBrand}>
                      <img src={brand} alt='brand' />
                    </div>
                    <div>
                      <h2 style={{color: 'white'}}>{t("Toshkent shahar")}</h2>
                      <h1 style={{color: 'white'}}>{`"`}{t("Barkamol avlod")}{`"`} <br /> {t("bolalar maktabi")}</h1>
                    </div>
                  </div>
                </Col>
                <Col lg={24} md={12}>
                  <div className={style.footLeftText}>
                    <span>{t("10011, O’zbekiston, Toshkent,")} <br />
                    {t("Shayxontoxur tumani, ")}<br />
                    {t("Navoiy ko’chasi, 2A uy ")}
                    </span>
                    <div className={style.aloqa}>
                      <a href='tel:+998712020909'><img src={tel} alt='tel'/><p>(71) 202 09 09</p></a>
                      <a href="mailto:info@tbabm.uz"><img src={mail} alt='mail' /><p>info@tbabm.uz</p></a>
                      <a href="https://www.facebook.com/@toshbabm" target='blank'><img src={facebook} alt='facebook' /><p>@toshbabm</p></a>
                      <a href="https://www.instagram.com/@tosh_babm" target='blank'><img src={insta} alt='instagram' /><p>@tosh_babm</p></a>
                      <a href="https://t.me/@toshbabm" target='blank'><img src={telegram} alt='telegram' /><p>@toshbabm</p></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={18} md={24} sm={24}>
            <div className={style.footRight}>
              <div className={style.footRightForm}>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Input label='Ism Familya' placeholder={`${t("Ismingiz...")}`} onChange={(e) => setname(e.target.value)} value={name} />
                  <Input placeholder={`${t("Elektron pochta...")}`} onChange={(e) => setemail(e.target.value)} value={email}  />
                  <Button onClick={() => postData()}>
                    {t("Obuna bo'lish")}
                  </Button>
                </Form>
              </div>
              <div className={style.footLeftItems}>
                <Row>
                  <Col>
                    <ul>
                      <li className={style.listactive}>{t("Maktab")}</li>
                      <li><Link to={'/maktab/maktab-haqida/'}>{t("Maktabhaqida")}</Link></li>
                      <li><Link to={'/maktab/rahbariyat/'}>{t("Rahbariyat")}</Link></li>
                      <li><Link to={'/maktab/maktab-tuzilmasi/'}>{t("Maktab tuzilmasi")}</Link></li>
                    </ul>
                    <ul>
                      <li className={style.listactive}>{t("Hujjatlar")}</li>
                      <li><a href='https://lex.uz/docs/-6129618' target='_blank'>{t("331-qaror")}</a></li>
                      <li><a href='https://lex.uz/docs/4532156' target='_blank'>{t("4467-qaror")}</a></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li className={style.listactive}>{t("Ta'lim yo'nalishlari")}</li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Madaniyat ba san`at")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Texnika konstruktorlik va modellashtirish")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Jismoniy tarbiya va sport")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Hunarmandchilik va qo’l mehnati")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Ekologiya va turizm")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Oliy ta'lim muassasalari va maktabga tayyorlov")}</Link></li>
                      <li><Link to={'/talim-yonalishlari/'}>{t("Xorijiy Tillar")}</Link></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li className={style.listactive}>{t("Faoliyat")}</li>
                      <li><Link to={'/faoliyat/togarak-rahbarlari/'}>{t("To'garak boshliqlari")}</Link></li>
                      <li><Link to={'/faoliyat/boshqa-xodimlar'}>{t("Boshqa xodimlar")}</Link></li>
                      <li><br /></li>
                    </ul>
                    <ul>
                      <li className={style.listactive}>{t("Axborot xizmatlari")}</li>
                      <li><Link to={'/axborot-xizmati/fotogalereya'}>{t("Galereya")}</Link></li>
                      <li><Link to={'/axborot-xizmati/videogalereya'}>{t("Videogalereya")}</Link></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer