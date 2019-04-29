import React from 'react';
import { Card, message, Button  } from 'antd';
import './ui.css'

export default class Message extends React.Component{
    showMessage = (type) => {
        message[type]('再点一下');
    };
    render() {
        return (
            <div>
                <Card title="全局提示框">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}