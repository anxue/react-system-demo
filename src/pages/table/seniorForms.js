import React from 'react'
import {Card, Table, Badge, Modal, message, Button} from 'antd'
import axios from './../../axios/index'
import Utils from '../../utils/utils';
export default class SeniorForms extends React.Component{
    state = {
        data2: [],
        selectedRowKeys: []
    }
    params = {
        page: 1
    }
    componentWillMount() {
        this.request();
    }
    // 动态获取mock数据
    request = ()=> {
        let $this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: $this.params.page
                }
            }
        }).then(res => {
            this.setState({
                data2: res.data,
                selectedRowKeys: [],
                selectedRows: null,
                pagination: Utils.pagination(res, (current) => {
                    // console.log(res, current)
                    $this.params.page = current;
                    this.request();
                })
            })
        })
    }
    // 排序
    handleChange = (pagination, filters, sorter)=> {
        console.log(pagination, filters, sorter)
        this.setState({
            sortOrder: sorter.order
        })
    }
    // 删除操作
    handleDelete=(item)=> {
        console.log(item)
        // let id = item.id;
        Modal.confirm({
            title: '确定',
            content: '你确定要删除这条数据吗？',
            onOk: ()=> {
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns3 = [{
            title: 'id',
            dataIndex: 'id',
            width: 50,
            align: 'center',
            key: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName',
            align: 'center',
            width: 80,
            key: 'userName'
        }, {
            title: '年龄',
            dataIndex: 'age',
            align: 'center',
            width: 80,
            sorter: (a, b)=> {
                return a.age - b.age
            },
            sortOrder: this.state.sortOrder,
            key: 'age'
        }, {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 80,
            key: 'sex'
        }, {
            title: '健康状态',
            dataIndex: 'status',
            align: 'center',
            width: 80,
            key: 'status'
        }, {
            title: '爱好',
            dataIndex: 'interest',
            align: 'center',
            width: 80,
            key: 'interest',
            render(param) {
                let config = {
                    '1':  <span><Badge status="success" text="唱歌"/></span>,
                    '2': <span><Badge status="error" text="爬山" /></span>,
                    '3': <span><Badge status="processing" text="打游戏"/></span>,
                }
                return config[param]
            }
        }, {
            title: '操作',
            dataIndex: 'time',
            align: 'center',
            width: 80,
            key: 'time',
            render:(text, item)=>{
                return <Button type="primary" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
            }
        }]
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            width: 50,
            align: 'center',
            key: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName',
            align: 'center',
            width: 80,
            key: 'userName'
        }, {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 80,
            key: 'sex'
        }, {
            title: '健康状态',
            dataIndex: 'status',
            align: 'center',
            width: 80,
            key: 'status'
        }, {
            title: '爱好',
            dataIndex: 'interest',
            align: 'center',
            width: 80,
            key: 'interest'
        }, {
            title: '早起时间',
            dataIndex: 'time',
            align: 'center',
            width: 80,
            key: 'time'
        }]
        const columns2 = [{
            title: 'id',
            dataIndex: 'id',
            width: 80,
            fixed: 'left',
            align: 'center',
            key: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName',
            align: 'center',
            width: 80,
            fixed: 'left',
            key: 'userName'
        }, {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 80,
            key: 'sex'
        }, {
            title: '健康状态',
            dataIndex: 'status',
            align: 'center',
            width: 80,
            key: 'status'
        }, {
            title: '爱好',
            dataIndex: 'interest',
            align: 'center',
            width: 80,
            key: 'interest'
        }, {
            title: '生日',
            dataIndex: 'birthday',
            align: 'center',
            width: 120,
            key: 'birthday'
        }, {
            title: '地址',
            dataIndex: 'address',
            align: 'center',
            width: 120,
            key: 'address'
        }, {
            title: '早起时间',
            dataIndex: 'time1',
            align: 'center',
            width: 80,
            key: 'time1'
        }, {
            title: '用户名',
            dataIndex: 'userName1',
            align: 'center',
            width: 80,
            key: 'userName1'
        }, {
            title: '性别',
            dataIndex: 'sex1',
            align: 'center',
            width: 80,
            key: 'sex1'
        }, {
            title: '健康状态',
            dataIndex: 'status1',
            align: 'center',
            width: 80,
            key: 'status1'
        }, {
            title: '爱好',
            dataIndex: 'interest2',
            align: 'center',
            width: 80,
            key: 'interest2'
        }, {
            title: '用户名',
            dataIndex: 'userName2',
            align: 'center',
            width: 80,
            key: 'userName2'
        }, {
            title: '性别',
            dataIndex: 'sex2',
            align: 'center',
            width: 80,
            key: 'sex2'
        }, {
            title: '健康状态',
            dataIndex: 'status2',
            align: 'center',
            width: 80,
            key: 'status2'
        }, {
            title: '爱好',
            dataIndex: 'interest3',
            align: 'center',
            width: 80,
            fixed: 'right',
            key: 'interest3'
        }]
        
        return (
            <div>
                <Card title="头部固定">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={this.state.pagination}
                        columns={columns}
                        dataSource={this.state.data2}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧右侧固定">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={this.state.pagination}
                        columns={columns2}
                        dataSource={this.state.data2}
                        scroll={{x:1300, y:240}}
                    />
                </Card>
                <Card title="排序">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={this.state.pagination}
                        columns={columns3}
                        dataSource={this.state.data2}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        );
    }
}