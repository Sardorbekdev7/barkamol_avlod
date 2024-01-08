import { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from '@ant-design/icons'; 
// import {GiBookshelf} from 'react-icons/gi'
// import {FaHome} from 'react-icons/fa'
// import {BiNews} from 'react-icons/bi'
// import { Layout, Menu, Button, theme } from 'antd';
// import {Link, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

// const Admin = () => {
//   const token = cookies.get('token');
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const menuLinks={
//     default:'1',
//     teachers:'2',
//     category:'3',
//     subcategory:'4',
//     course:'5',
//     faq:"6",
//     coursedes: '7',
//     about:"8",
//   }
//   var location = useLocation();
//     var path=location.pathname.slice(location.pathname.indexOf('/admin')+7)
//     if(path.length===0){
//       path="default"
//     }


//   const pathId=menuLinks[path]

//   if (token) {
//     return (
//       <Layout style={{height: '100vh'}}>
//         <Sider trigger={null} collapsible collapsed={collapsed}>
//           <div className="demo-logo-vertical">
//             <h1 style={{color: 'white', textAlign: 'center', margin: '15px 0', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Perfekt - RTK</h1>
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={[pathId]}
//           >
//               <Menu.Item key="1">
//                   <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
//                     <BiNews />
//                     <Link to="">Yangiliklar</Link>
//                   </div>
//               </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header
//             style={{
//               padding: 0,
//               background: colorBgContainer,
//             }}
//           >
//             <Button
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 fontSize: '16px',
//                 width: 64,
//                 height: 64,
//               }}
//             />
//           </Header>
//           <Content
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               minHeight: 280,
//               background: colorBgContainer,
//               overflowY: 'auto'
//             }}
//           >
//              <Routes>
//                   <Route path={''} element={<News />} />
//               </Routes>                                          
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
//   else {
//     return (
//       <Navigate to={'/login'} replace={true} />
//     )
//   }
// };
// export default Admin;



import React from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './styles/App.css'
import AdminNavbar from '../components/news/adminnavbar/AdminNavbar';
import News from '../components/news/News';
import Xodimlar from '../components/news/xodimlar/Xodimlar';
import Videos from '../components/videos/Videos';
import Photos from '../components/Photos/Photos';
import Subscribe from '../components/subscribe/Subscribe';
import Statistics from '../components/statistics/Statistics';
import About from '../components/about/About';
import Category from '../components/category/Category';
import Courses from '../components/course/Course';

const Admin = () => {
  const token = cookies.get('token');
  var location = useLocation();
    var path=location.pathname.slice(location.pathname.indexOf('/admin')+7)
    if(path.length===0){
      path="default"
    }
  if(token){
    return (
    <div className='container'>
      <AdminNavbar />
      <div className='news'>
        <Routes>
             <Route path={''} element={<News />} />
             <Route path={'xodimlar/'} element={<Xodimlar />} />
             <Route path={'videos/'} element={<Videos />} />
             <Route path={'photos/'} element={<Photos />} />
             <Route path={'subscribe/'} element={<Subscribe />} />
             <Route path={'statistics/'} element={<Statistics />} />
             <Route path={'about/'} element={<About />} />
             <Route path={'category/'} element={<Category />} />
             <Route path={'courses/'} element={<Courses />} />
        </Routes>  
      </div>
    </div>
  )}else {
      return (
        <Navigate to={'/login'} replace={true} />
      )
    }
}

export default Admin