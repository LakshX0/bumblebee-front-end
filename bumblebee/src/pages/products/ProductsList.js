import React from 'react'
import '../style.css'

import { Card, Breadcrumb, Button, Space, Table, Tag, Drawer, Form, Input } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Item } = Breadcrumb;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Deactive') {
            color = 'volcano';
          }
          else
          {
            color='green';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    contact: 322345,
    address: 'New York No. 1 Lake Park',
    tags: ['Active'],
  },
  {
    key: '2',
    name: 'Jim Green',
    contact: 42322345,
    address: 'London No. 1 Lake Park',
    tags: ['Deactive'],
  },
  {
    key: '3',
    name: 'Joe Black',
    contact: 32234532,
    address: 'Sydney No. 1 Lake Park',
    tags: ['Active'],
  },
];

function ProductsList() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [form] = Form.useForm();

  return (
    <div className='page-container'>
      <div className="breadcrumb">
      <h3>Product List</h3>
      <Button type="primary" onClick={showDrawer}>Add Product</Button>
    </div>
    <Drawer 
    title="Add User" 
    placement="right" 
    onClose={onClose} 
    open={open}
    >

      <Form layout='vertical'>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <center>
        <Button type="primary">Submit</Button>
        </center>
      </Form.Item>

      </Form>
      
      </Drawer>
    <div>
    <Table 
    columns={columns} 
    dataSource={data} 
    style={{marginTop:10}}
    bordered
    pagination={{
      position: ['bottomRight'],
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30'],
  }}
   />
    </div>
    </div>
  )
}

export default ProductsList