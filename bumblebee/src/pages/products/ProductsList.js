import React, {useEffect} from 'react'
import '../style.css'
import axios from 'axios';

import { Card, Breadcrumb, Button, Space, Table, Tag, Drawer, Form, Input } from 'antd';
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';
import Highlighter from 'react-highlight-words';

const { Item } = Breadcrumb;


const data = [
  {
    id: '1',
    price: 50.95,
    name: '',
    quantity: 2,
    brand:"Nokia",
    category:"Mobile"
  },
  {
    id: 2,
    price: 100,
    name: '',
    quantity: 2,
    brand:"Nokia",
    category:"Mobile"
  },
  {
    id: 3,
    price: 5199,
    name: '',
    quantity: 2,
    brand:"Nokia",
    category:"Mobile"
  },
  {
    id: 4,
    price: 1000,
    name: '',
    quantity: 2,
    brand:"Nokia",
    category:"Mobile"
  },
  {
    id: 5,
    price: 872.50,
    name: '',
    quantity: 2,
    brand:"Nokia",
    category:"Mobile"
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

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      ...getColumnSearchProps('price'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      ...getColumnSearchProps('brand'),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps('category'),
    },
  ];

  const [product,setProduct] = useState([])
  useEffect(()=>{
      loadProducts();
  },[]);

  const loadProducts= async()=>{
      const result = await axios.get("http://localhost:8080/products");
      setProduct(result.data);
      console.log(result);
      
  };


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
      <Form.Item label="Name" name='name'>
        <Input placeholder="Input Name" />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input placeholder="Input Price" />
      </Form.Item>
      <Form.Item label="Quantity" name="quantity">
        <Input placeholder="Input Quantity" />
      </Form.Item>
      <Form.Item label="Brand" name="brand">
        <Input placeholder="Input Brand" />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Input placeholder="Input Category" />
      </Form.Item>
      <Form.Item>
        <center>
        <Button type="primary" htmlType="submit">Submit</Button>
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