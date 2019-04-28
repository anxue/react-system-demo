import React from 'react';
import { Button, Card, Modal } from 'antd';
import './ui.css'
export default class Modals extends React.Component{
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen = (type)=> {
        this.setState({
            [type]: true
        })
    }
    handleConfirm = (type)=> {
        Modal[type]({
            title: '确认?',
            content: 'biubiubiu爱你哟',
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('onCancel')
            }

        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-type">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-type">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>这里是内容。。。。</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>这里是内容。。。。</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    style={{top:20}}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>这里是内容。。。。</p>
                </Modal>
                <Modal
                    title="React"
                    centered
                    visible={this.state.showModal4}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>这里是内容。。。。</p>
                </Modal>
            </div>
        )
    }
}