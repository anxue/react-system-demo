import React from 'react';
import { Card, Alert, Icon, Spin  } from 'antd';
import './ui.css'
export default class Loading extends React.Component{

    render() {
        const icon = <Icon type="loading" />
        return (
            <div>
                <Card title="spin加载中">
                    <Spin size="small"></Spin>
                    <Spin></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon} size="large"></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="安鱼"
                        description="oooooooooooooooo"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="安鱼"
                            description="ooooooooooooooo"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert
                            message="安鱼"
                            description="ooooooooooooooo"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}