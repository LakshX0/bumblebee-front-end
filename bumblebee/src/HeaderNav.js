import React from 'react'
import './HeaderNav.css'
import { Layout, Avatar, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import logo from './logo.svg'

const { Header } = Layout;

function HeaderNav() {
  return (
    <>
    <Header className="dashboard-header">
      <div className="logo">
        <Avatar size="large" src={<img src={logo} alt="avatar" />}/>
        <span className="company-name">Bumblebee</span>
      </div>
      <div className="header-right">
        <Badge count={0}>
          <BellOutlined className="notification-icon" />
        </Badge>
      </div>
    </Header>
    </>
  )
}

export default HeaderNav