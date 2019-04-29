import React from 'react';
import { Button, notification, Card  } from 'antd';
import './ui.css'
export default class Notification extends React.Component{

    openNotifaction=(type, position)=> {
        if (position) {
            notification.config({
                placement: position,
                bottom: 50,
                duration: 3
            });
        }
        notification[type]({
            message: '哼',
            description: '不要点我啊'
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.openNotifaction('success')}>不要点我</Button>
                    <Button type="danger" onClick={()=>this.openNotifaction('error')}>不要点我</Button>
                    <Button type="info" onClick={()=>this.openNotifaction('info')}>不要点我</Button>
                    <Button type="info" onClick={()=>this.openNotifaction('warning')}>不要点我</Button>
                </Card>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.openNotifaction('success', 'topLeft')}>topLeft</Button>
                    <Button type="danger" onClick={()=>this.openNotifaction('error', 'topRight')}>topRight</Button>
                    <Button type="info" onClick={()=>this.openNotifaction('info', 'bottomLeft')}>bottomLeft</Button>
                    <Button type="info" onClick={()=>this.openNotifaction('warning', 'bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}