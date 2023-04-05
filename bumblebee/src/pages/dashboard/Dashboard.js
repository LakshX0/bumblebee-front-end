import React,  { Component }  from 'react'
import Chart from "react-apexcharts";
import { Card, Col, Row } from 'antd'
import { UserOutlined, ShoppingOutlined,SkinOutlined } from '@ant-design/icons'
import './style.css'
import IncomeChart from './IncomeChart';


function Dashboard() {
    
    return (
        <>
            <div className="row">
                <table border="0">
                    <td>
                    <div className='col-12-sm'>
                    <div className='px-5 py-5 mb-5 bg-red text-red full-width'>
                        <center>
                        <UserOutlined className='card-icon' />
                        <div className='quantity-count'>04</div>
                        <div className='quantity-property'> Users</div>
                        </center>
                    </div>
                    <div className='px-5 mb-5 py-5 bg-blue text-blue full-width'>
                    <center>
                        <SkinOutlined className='card-icon' />
                        <div className='quantity-count'>2</div>
                        <div className='quantity-property'> Orders</div>
                        </center>
                    </div>
                    <div className='px-5 py-5 bg-green text-green full-width'>
                    <center>
                        <ShoppingOutlined className='card-icon' />
                        <div className='quantity-count'>3</div>
                        <div className='quantity-property'> Products</div>
                        </center>
                    </div>
                </div>
                    </td>
                    <td>
                    <div className='col-12-sm px-6 mx-5'>
                        <IncomeChart />
                    </div>

                    </td>
                </table>
            </div>
        </>
    )
}

export default Dashboard