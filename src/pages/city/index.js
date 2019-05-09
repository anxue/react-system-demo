import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message} from 'antd'
import './index.css'
import axios from '../../axios/index'
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component{
    state = {
        list: [],
        isShowOpenCity: false
    }
    params = {
        page: 1
    }
    componentWillMount() {
        this.requestList();
    }
    // 调接口
    requestList =()=> {
        let $this = this;
        axios.ajax({
            url: '/open_city',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            console.log(res);
            this.setState({
                list: res.data,
                pagination: Utils.pagination(res, current=> {
                    $this.params.page = current;
                    this.requestList();
                })
            })
        })
    }
    // 开通城市
    handleOpenCity= ()=> {
        this.setState({
            isShowOpenCity: true
        })
    }
    // 城市开通提交
    handleSubmit =()=> {
        this.cityForm.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                message.success('开通成功');
                this.setState({
                    isShowOpenCity: false
                })
                this.requestList();
            } else {
               // 处理错误
               console.log(err);
            }
        });
    }
    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id',
                width: 80
            }, {
                title: '城市名称',
                dataIndex: 'name',
                width: 100
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                width: 100,
                render(data) {
                    let config = {
                        '1': '指定停车点模式',
                        '2': '禁停区模式'
                    }
                    return config[data]
                }
            }, {
                title: '模式营运',
                dataIndex: 'op_mode',
                width: 70,
                render(data) {
                    let config = {
                        '1': '自营',
                        '2': '加盟'
                    }
                    return config[data]
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'auth_status',
                width: 80
            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                width: 80,
                render(arr) {
                    return arr.map(item => {
                        return item.user_name
                    }).join(',')
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time',
                width: 150
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
                width: 150,
                render: Utils.formateDate
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name',
                width: 100
            }
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
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
                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onOk={this.handleSubmit}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity: false
                        })
                    }}
                >
                    <OpenCityForm wrappedComponentRef={(form) => this.cityForm = form} />
                </Modal>
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
// 弹框表单
class OpenCityForm extends React.Component{
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 5 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 15 },
            },
        };
        return (
            <Form {...formItemLayout}>
                <FormItem label="选择城市">
                    {
                        getFieldDecorator('city_id', {
                            initialValue: '1'
                        })(
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
                        getFieldDecorator('mode', {
                            initialValue: '1'
                        })(
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
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
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
            </Form>
        )
    }
}
OpenCityForm = Form.create({})(OpenCityForm)