import React from 'react'
import {Card, Table} from 'antd'
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
    render() {
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
            dataIndex: 'time',
            align: 'center',
            width: 80,
            key: 'time'
        }]
        const columns2 = [{
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
            dataIndex: 'time',
            align: 'center',
            width: 80,
            key: 'time'
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
                {/* <Card title="左侧固定">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={this.state.pagination}
                        columns={columns2}
                        dataSource={this.state.data2}
                        scroll={{x:240}}
                    />
                </Card> */}
            </div>
        );
    }
}