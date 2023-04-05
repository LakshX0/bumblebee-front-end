import logo from './logo.svg';
import './App.css';
import './Grid.css';
import {Menu} from "antd"
import { MailOutlined, SettingOutlined, AppstoreOutlined, UserOutlined, ShoppingOutlined, SkinOutlined, DollarCircleOutlined  } from '@ant-design/icons';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UsersList from './pages/users/UsersList'
import ProductsList from './pages/products/ProductsList'
import OrderList from './pages/orders/OrderList';
import Loan from './pages/loan/Loan';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/auth/LoginPage';
import Register from './pages/auth/Register';
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
  getItem('Dashboard', 'dashboard', <AppstoreOutlined />),
  getItem('Users', 'user', <UserOutlined  />),
  getItem('Products', 'product', <SkinOutlined />),
  getItem('Orders', 'order', <ShoppingOutlined />),
  getItem('Loans', 'loan', <DollarCircleOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  // ]),
];

function App() {
  return (
    <>
    <HeaderNav/>
        <div style={{display:"flex", flexDirection:"row"}}>
      <SideMenu/>
      <Content/>
    </div>
    </>
  );
}

function SideMenu(){
  const navigate =useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };
  return(
    <Menu
        onClick={onClick}
        style={{
          width: 256,
          height:"90vh",
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
  );

}

function Content(){

  return(
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/user' element={<UsersList/>}></Route>
        <Route path='/product' element={<ProductsList/>}></Route>
        <Route path='/order' element={<OrderList/>}></Route>
        {/* <Route path='/loan' element={<div>Home</div>}></Route> */}
        <Route path='/loan' element={<Loan/>}></Route>
        {/* <Route path='/login' element={<LoginPage/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
