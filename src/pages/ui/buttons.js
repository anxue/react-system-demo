import React from 'react';
import { Button, Card, Radio } from 'antd';
import './ui.css'
const ButtonGroup = Button.Group;
export default class Buttons extends React.Component{
    
    state = {
        loading: true,
        size: 'default'
    }
    handleCloseLoading=()=> {
        this.setState({
            loading: !this.state.loading
        })
    }
    handleChange=(e)=> {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card title="图形按钮">
                    <Button type="primary" icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button type="dashed" icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <ButtonGroup>
                        <Button type="primary" icon="left" style={{marginRight: 0}}>返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小 </Radio>
                        <Radio value="default">中 </Radio>
                        <Radio value="large">大 </Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>前进</Button>
                    <Button size={this.state.size}>前进</Button>
                    <Button type="dashed" size={this.state.size}>前进</Button>
                    <Button type="danger" size={this.state.size}>前进</Button>
                </Card>
          </div>
        )
    }
}