import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, Badge, Select } from 'antd'

const { Option } = Select;

function Loan() {
    const [form] = Form.useForm();
    const [plan, setPlan] = useState('3months');
    const [amount, setAmount] = useState('15000LKR');

    const handleFormSubmit = (values) => {
        const { plan, amount } = values;
        setPlan(plan);
        setAmount(amount);
    };

    const initialValues = {
        plan: plan,
        amount: amount,
    };
    return (
        <>
            <div className='page-container'>
                <div className="breadcrumb">
                    <h3>Loan</h3>
                </div>
                <div>
                    <Card bordered={false} className='full-width-card'>
                        <Form
                            layout='vertical'
                            initialValues={initialValues}
                            onFinish={handleFormSubmit}
                        >
                            <Row gutter={48}>
                                <Col span={12}>
                                    <Form.Item label="Installment plan" name='plan'>
                                        <Select>
                                            <Option value="3months">3 Months</Option>
                                            <Option value="6months">6 Months</Option>
                                            <Option value="1year">1 Year</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button style={{backgroundColor:"#5B2C6F", color:"#fff"}} htmlType="submit">Submit</Button>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                <Form.Item label="Price" name='amount'>
                                        <Input type='text' placeholder="input placeholder"  />
                                    </Form.Item>
                                </Col>

                            </Row>

                        </Form>
                    </Card>
                    <br />
                    <Card title="Current Plan">
                    <Row>
                            <Col span={12}>
                                        <p>Installment Plan <Badge count={plan} /> </p>
                                </Col>
                                <Col span={12}>
                                <p>Price <Badge count={amount}
                                            style={{
                                                backgroundColor: '#52c41a',
                                            }} /></p>
                                    </Col>
                            </Row>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Loan