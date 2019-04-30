import React from 'react';
import { Form, Input, Button, Card, message, Icon, Checkbox, Radio, Switch, Select,TimePicker,Upload  } from 'antd';
import './form.css'

const FormItem = Form.Item;
class Register extends React.Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="inline">
                        <FormItem label="用户名">
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码">
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);