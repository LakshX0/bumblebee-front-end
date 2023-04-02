import React from 'react'
import './HeaderNav.css'
import { Layout, Avatar, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { Header } = Layout;

function HeaderNav() {
  return (
    <>
    <Header className="dashboard-header">
      <div className="logo">
        <Avatar size="large" src="./logo.svg" />
        <span className="company-name">Company Name</span>
      </div>
      <div className="header-right">
        <Badge count={5}>
          <BellOutlined className="notification-icon" />
        </Badge>
      </div>
    </Header>
    </>
  )
}

export default HeaderNav