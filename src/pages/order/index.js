import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message, DatePicker} from 'antd'
import './index.css'
import axios from '../../axios/index'
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component{
    state = {
        orderInfo: {},
        list: [],
        orderConfirmVisble: false,
        selectedRowKeys: []
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
            console.log(res);
            if (res.code === 0) {
                this.setState({
                    list: res.data,
                    pagination: Utils.pagination(res, current=> {
                        this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    // 结束订单
    finishOrder=()=> {
        let item = this.state.selectedItem
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    page: item.id
                }
            }
        }).then(res => {
            console.log(res);
            if (res.code === 0) {
                message.success('订单结束成功');
                this.setState({
                    orderConfirmVisble: false
                })
                this.request();
            }
        })
    }
    // 订单详情
    handleOrderDetail=()=> {
        let item = this.state.selectedItem
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请先选择一条订单查看详情'
            })
            return;
        }
        window.location.href = '/#/common/order/detail/' + item.id
    }
    // 点击行选中单选按钮
    onRowClick=(record, index)=> {
        console.log('点击单行', record, index)
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    // 结束订单
    handleCloseOrder=()=> {
        axios.ajax({
            url: '/order/ebike_info',
        }).then(res => {
            if (res.code === 0) {
                this.setState({
                    orderInfo: res.data,
                    orderConfirmVisble: true
                })
            }
        }) 
    }
    render() {
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
        }
        const { selectedRowKeys } =  this.state;
        const rowSelection = {
           type: 'radio',
           selectedRowKeys
        }
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
                dataIndex: 'distance',
                render(distance) {
                    return distance/1000 + 'Km';
                }
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
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                              onClick: (event) => {
                                  this.onRowClick(record, index);
                              }, // 点击行
                            };
                        }}
                    />
                    <Modal
                        title="结束订单"
                        visible={this.state.orderConfirmVisble}
                        onCancel={()=> {
                            this.setState({
                                orderConfirmVisble: false
                            })
                        }}
                        onOk={this.finishOrder}
                    >
                        <Form  {...formItemLayout}>
                            <FormItem label="车辆编号">
                                {this.state.orderInfo.carNo}
                            </FormItem>
                            <FormItem label="剩余电量">
                                {this.state.orderInfo.battery + '%'}
                            </FormItem>
                            <FormItem label="行程开始时间">
                                {this.state.orderInfo.startTime}
                            </FormItem>
                            <FormItem label="当前位置">
                                {this.state.orderInfo.location}
                            </FormItem>
                        </Form>
                    </Modal>
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
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                showTime
                                placeholder="开始时间"
                             />
                        )
                    }
                    <span style={{padding: '0 10px'}}>一</span>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                showTime
                                placeholder="结束时间"
                             />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">进行中</Option>  
                                <Option value="2">进行中（临时锁车）</Option> 
                                <Option value="3">结束行程</Option> 
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