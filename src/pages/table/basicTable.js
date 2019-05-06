import React from 'react'
import {Card, Table, Modal, Button, message} from 'antd'
import axios from './../../axios/index'
export default class BasicTable extends React.Component{
    state = {
        data: [],
        data2: [],
        selectedRowKeys: []
    }

    componentWillMount() {
        const data = [{
            id: '0',
            userName: '安可',
            sex: '女',
            status: '良好',
            interest: '唱歌打游戏',
            birthday: '正月初七',
            address: '重庆市渝中区',
            time: '07:30'
        }, {
            id: '1',
            userName: '安鱼',
            sex: '女',
            status: '良好',
            interest: '唱歌打游戏',
            birthday: '正月初七',
            address: '重庆市渝中区',
            time: '07:30'
        }]
        this.setState({
            data
        })
        this.request();
    }
    // 动态获取mock数据
    request = ()=> {
        axios.ajax({
            url: '/table/list',
            data: {
                params: ''
            }
        }).then(res => {
            this.setState({
                data2: res,
                selectedRowKeys: [],
                selectedRows: null
            })
        })
    }
    // 点击行选中单选按钮
    onRowClick=(record, index)=> {
        console.log('点击单行', record, index)
        Modal.info({
            title: '选中的信息',
            content: JSON.stringify(record)
        })
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    // 多选框删除
    handleDelete= (()=> {
        let rows = this.state.selectedRowKeys;
        console.log(rows)
        let ids = [];
        rows.forEach(item => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除',
            content: '您确定要删除这些数据吗？',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    })
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName'
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render(sex) {
                return sex === 1? '男' : '女'
            }
        }, {
            title: '健康状态',
            dataIndex: 'status',
            key: 'status'
        }, {
            title: '爱好',
            dataIndex: 'interest',
            key: 'interest',
            render(interest) {
                return interest === 1 ? '唱歌' : (interest === 2) ? '运动' : '打游戏'
            }
        }, {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday'
        }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: '早起时间',
            dataIndex: 'time',
            key: 'time'
        }]
        const { selectedRowKeys } =  this.state;
        const rowSelection = {
           type: 'radio',
           selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows)=> {
                console.log(selectedRowKeys, selectedRows)
                let ids = [];
                selectedRows.forEach((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                    selectedIds: ids
                })
            }
        }
        return (
            <div> 
                <Card title="基础表格">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.data}
                    />
                </Card>
                <Card title="动态数据渲染表格">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.data2}
                    />
                </Card>
                <Card title="点击行单选表格">
                    <Table 
                        rowKey="id"
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                              onClick: (event) => {
                                  this.onRowClick(record, index);
                              }, // 点击行
                            };
                        }}
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.data2}
                    />
                </Card>
                <Card title="点击行多选表格">
                    <div style={{marginBottom: 10}}>
                        <Button type="primary" onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        rowKey="id"
                        bordered
                        rowSelection={rowCheckSelection}
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.data2}
                    />
                </Card>
                <Card title="表格分页">
                    <Table 
                        rowKey="id"
                        bordered
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.data2}
                    />
                </Card>
            </div>
        );
    }
}