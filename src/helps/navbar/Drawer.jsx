import React, { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';
import { getData } from '../../service/api.service';
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next';

const DrawerBarkamol = () => {
  const [open, setOpen] = useState(false);
  const {category, setCategory} = useAuthStore()
  const [placement, setPlacement] = useState('left');
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


  const getCat = () => {
    getData('category').then(res => {
      setCategory(res.data.data)
    })
  }

  useEffect(() => {
    getCat()
  }, []);


  const talim = []

  category.map((item, key) => {
    talim.push(
        getItem(<Link to="/talim-yonalishlari/"><p>{
          lang == "uz" 
          ? item.nameUZ 
          : lang == "ru" 
          ? item.nameRU 
          : item.nameEN
        }</p></Link>, key + 20)
      )
  })

  const items = [
    getItem(<p>{t("maktab")}</p>, 'sub1', <></>, [
      getItem(<Link to="/maktab/maktab-haqida/"><p>{t("Maktabhaqida")}</p></Link>, '1'),
      getItem(<Link to="/maktab/rahbariyat/"><p>{t("Rahbariyat")}</p></Link>, '2'),
      getItem(<Link to="/maktab/maktab-tuzilmasi/"><p>{t("Maktab tuzilmasi")}</p></Link>, '3'),
    ]),
    getItem(<p>{t("Hujjatlar")}</p>, 'sub2', <></>, [
      getItem(<Link to="/hujjatlar/331-qaror/"><p>{t("331-qaror")}</p></Link>, '15'),
      getItem(<Link to="/hujjatlar/4467-qaror/"><p>{t("4467-qaror")}</p></Link>, '4')
    ]),
    getItem(<p>{t("Ta'lim yo'nalishlari")}</p>, 'sub3', <></>, 
      talim
    ),
    getItem(<p>{t("Faoliyat")}</p>, 'sub4', <></>, [
      getItem(<Link to="/faoliyat/togarak-rahbarlari/"><p>{t("To'garak boshliqlari")}</p></Link>, '16'),
      getItem(<Link to="/faoliyat/boshqa-xodimlar/"><p>{t("Boshqa xodimlar")}</p></Link>, '12')
    ]),
    getItem(<Link to='/yangiliklar'><p>{t("Yangiliklar")}</p></Link>, '20'),
    getItem(<p>{t("Axborot xizmatlari")}</p>, 'sub5', <></>, [
      getItem(<Link to="/axborot-xizmati/fotogalereya/"><p>{t("Galereya")}</p></Link>, '13'),
      getItem(<Link to="/axborot-xizmati/videogalereya/"><p>{t("Videogalereya")}</p></Link>, '14')
    ])
  ]
  return (
 
      <React.Fragment>
        <div>
          <div  onClick={showDrawer} style={{cursor: 'pointer'}}>
            <GiHamburgerMenu />
          </div>
          <Drawer
            title={<><AiOutlineClose style={{justifyContent: 'flex-end'}} type="primary" onClick={onClose} /></>}
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            style={{paddingTop: '20px'}}
          >
            <Menu 
              style={{
                width: '100%',
                marginBottom: '10px'
              }}
              mode='inline'
              items={items}
            />
          </Drawer>
        </div>
      </React.Fragment>
  );
};
export default DrawerBarkamol;