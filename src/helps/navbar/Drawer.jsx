import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Drawer, Menu } from 'antd';
import { Link } from 'react-router-dom';

const DrawerBarkamol = () => {
  const [open, setOpen] = useState(false);
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
    getItem(<p>Ta{`'`}lim yo{`'`}nalishlari</p>, 'sub3', <></>, [
      getItem(<Link to="/talim-yonalishlari/"><p>Madaniyat va san{`'`}at</p></Link>, '5'),
      getItem(<Link to="/talim-yonalishlari/"><p>Texnika konstruktorlik va modellashtirish</p></Link>, '6'),
      getItem(<Link to="/talim-yonalishlari/"><p>Jismoniy tarbiya va sport</p></Link>, '7'),
      getItem(<Link to="/talim-yonalishlari/"><p>Hunarmandchilik va qo{`'`}l mehnati</p></Link>, '8'),
      getItem(<Link to="/talim-yonalishlari/"><p>Ekologiya va turizm</p></Link>, '9'),
      getItem(<Link to="/talim-yonalishlari/"><p>Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</p></Link>, '10'),
      getItem(<Link to="/talim-yonalishlari/"><p>Xorijiy tillar</p></Link>, '11')
    ]),
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