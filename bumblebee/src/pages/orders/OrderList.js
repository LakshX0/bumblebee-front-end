import React, {useEffect} from 'react'
import '../style.css'

import { Card, Breadcrumb, Button, Space, Table, Tag, Drawer, Form, Input } from 'antd';
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import axios from 'axios';

const { Item } = Breadcrumb;


const data = [
  {
    id: '1',
    date: '2023-03-01',
    product: 1,
    quantity: 1,
    price: 10000,
    c_id: 2,
    tags: ['Active'],
  },
  {
    id: '2',
    date: '2023-03-16',
    product: 3,
    quantity: 1,
    price: 37500,
    c_id: 2,
    tags: ['Deactive'],
  },
  {
    id: '3',
    date: '2022-12-15',
    product: 322345,
    quantity: 10,
    price: 100.12,
    c_id: 123,
    tags: ['Active'],
  }
];

function OrderList() {
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'product',
      dataIndex: 'product',
      key: 'product',
      ...getColumnSearchProps('product'),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Customer ID',
      dataIndex: 'c_id',
      key: 'c_id',
      ...getColumnSearchProps('c_id'),
    },
    {
      title: 'Loan Status',
      dataIndex: 'loan_status',
      key: 'loan_status',
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
  ];
  const [order,setOrder] = useState([])
  useEffect(()=>{
      loadProducts();
  },[]);

  const loadProducts= async()=>{
      const result = await axios.get("http://localhost:8080/products");
      setOrder(result.data);
      console.log(result);
      
  };

  return (
    <div className='page-container'>
      <div className="breadcrumb">
      <h3>Order List</h3>
    </div>
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

export default OrderList