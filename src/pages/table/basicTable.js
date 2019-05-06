import React from 'react'
import {Card, Table} from 'antd'
import axios from 'axios'
export default class BasicTable extends React.Component{
    state = {
        data: [],
        data2: []
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
        let baseUrl = 'https://www.easy-mock.com/mock/5ccfa806eab89e35d7a45852/api';
        axios.get( baseUrl + '/table/list').then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({
                    data2: res.data.data
                })
            }
        })
    }
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
            key: 'sex'
        }, {
            title: '健康状态',
            dataIndex: 'status',
            key: 'status'
        }, {
            title: '爱好',
            dataIndex: 'interest',
            key: 'interest'
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
            </div>
        );
    }
}