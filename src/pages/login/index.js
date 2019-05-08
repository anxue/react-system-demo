import React from 'react'
import './index.css'
import {Form, Input, Button} from 'antd'
const  FormItem = Form.Item;
// import {Route, Redirect} from 'react-router-dom'
export default class Login extends React.Component{
    handleOnClick=()=>{
        // this.props.history.location.pathname = '/admin/home'
        this.props.history.push({ pathname : '/admin/home' })
        // this.setState({redirect: true})
        // return <Route   to="/admin/home" />
    }

    render() {
        return (
            <div className="login">
                <div className="login-main">
                    <div className="login-title">登陆/注册</div>
                    <div>
                        <Form>
                            <FormItem>
                                <Input placeholder="请输入用户名"/>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请输入密码"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary"  onClick={this.handleOnClick}>登陆</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}