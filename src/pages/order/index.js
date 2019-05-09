import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message} from 'antd'
import './index.css'
import axios from '../../axios/index'
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component{
    state = {
        list: []
    }
    params = {
        page: 1
    }

    componentWillMount() {
        this.request();
    }
    request =()=> {
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            console.log(res)
        })
    }
    // 订单详情
    handleOrderDetail=()=> {

    }
    // 结束订单
    handleCloseOrder=()=> {

    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'orderNo'
            }, {
                title: '车辆编号',
                dataIndex: 'carNo'
            }, {
                title: '用户名',
                dataIndex: 'userName'
            }, {
                title: '手机号',
                dataIndex: 'tel'
            }, {
                title: '里程',
                dataIndex: 'distance'
            }, {
                title: '行驶时长',
                dataIndex: 'total_time'
            }, {
                title: '状态',
                dataIndex: 'status'
            }, {
                title: '开始时间',
                dataIndex: 'start_time'
            }, {
                title: '结束时间',
                dataIndex: 'end_time'
            }, {
                title: '订单金额',
                dataIndex: 'total_fee'
            }, {
                title: '实付金额',
                dataIndex: 'user_fee'
            }
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOrderDetail}>订单详情</Button>
                    <Button type="primary" onClick={this.handleCloseOrder}>结束订单</Button>
                    < Table
                        style={{marginTop: 10}}
                        rowKey="key"
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        scroll={{y: 350}}
                    />
                </Card>
            </div>
        )
    }
}
// 搜索区域表单
class FilterForm extends React.Component{
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" className="search-area">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>  
                                <Option value="1">重庆</Option>  
                                <Option value="2">武汉</Option>  
                                <Option value="3">北京</Option>  
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>  
                                <Option value="2">禁停区模式</Option> 
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>  
                                <Option value="2">加盟</Option> 
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">已授权</Option>  
                                <Option value="2">未授权</Option> 
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary">查询</Button>
                    <Button >重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm)