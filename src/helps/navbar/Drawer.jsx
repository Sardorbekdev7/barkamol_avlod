import React, { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';
import { getData } from '../../service/api.service';
import { category } from '../../data/data';

const DrawerBarkamol = () => {
  const [open, setOpen] = useState(false);
  // const {category, setCategory} = useAuthStore()
  const [placement, setPlacement] = useState('left');
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


  // const getCat = () => {
  //   getData('categories').then(res => {
  //     setCategory(res.data)
  //   })
  // }

  // useEffect(() => {
  //   getCat()
  // }, []);


  const talim = []

  category.map((item, key) => {
    talim.push(
        getItem(<Link to="/talim-yonalishlari/"><p>{item.name_uz}</p></Link>, key + 20)
      )
  })

  const items = [
    getItem(<p>Maktab</p>, 'sub1', <></>, [
      getItem(<Link to="/maktab/maktab-haqida/"><p>Maktab haqida</p></Link>, '1'),
      getItem(<Link to="/maktab/rahbariyat/"><p>Rahbariyat</p></Link>, '2'),
      getItem(<Link to="/maktab/maktab-tuzilmasi/"><p>Maktab tuzilmasi</p></Link>, '3'),
    ]),
    getItem(<p>Hujjatlar</p>, 'sub2', <></>, [
      getItem(<Link to="/hujjatlar/331-qaror/"><p>331-qaror</p></Link>, '15'),
      getItem(<Link to="/hujjatlar/4467-qaror/"><p>4467-qaror</p></Link>, '4')
    ]),
    getItem(<p>Ta{`'`}lim yo{`'`}nalishlari</p>, 'sub3', <></>, 
      talim
    ),
    getItem(<p>Faoliyat</p>, 'sub4', <></>, [
      getItem(<Link to="/faoliyat/togarak-rahbarlari/"><p>To{`'`}garak boshliqlari</p></Link>, '16'),
      getItem(<Link to="/faoliyat/boshqa-xodimlar/"><p>Boshqa xodimlar</p></Link>, '12')
    ]),
    getItem(<p>Axborot xizmati</p>, 'sub5', <></>, [
      getItem(<Link to="/axborot-xizmati/fotogalereya/"><p>Galereya</p></Link>, '13'),
      getItem(<Link to="/axborot-xizmati/videogalereya/"><p>Videogaleya</p></Link>, '14')
    ])
  ]
  return (
 
      <React.Fragment>
        <div>
          <div  onClick={showDrawer}>
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