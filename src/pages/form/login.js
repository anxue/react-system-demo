import React from 'react';
import { Form, Input, Button, Card, message, Icon, Checkbox  } from 'antd';
import './form.css'
const  FormItem = Form.Item;
class LoginForm extends React.Component {
    handleSubmit=()=>{
        console.log(this.props.form.getFieldsValue())
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}恭喜您，通过验证，当前密码为${userInfo.userPassword}`)
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Card title="行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="水平表单">
                    <Form style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: '长度不在范围内'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPassword', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        },
                                        {
                                            pattern: /^\d+$/,
                                            message: '密码必须为数字'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock" />} placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="https://www.baidu.com/" style={{float: "right"}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm);