import React from 'react';
import { InputNumber, Form, Input, Button, Card, Icon, Checkbox, Radio, Switch, Select,TimePicker,Upload, DatePicker  } from 'antd';
import './form.css'
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
const interestList = [];
for (let i = 10; i < 36; i++) {
    // console.log(i.toString(i+1))把一个 Number 对象转换为一个字符串，并返回结果。
    // toString(数字) 2 ~ 36 之间的整数 若省略该参数，则使用基数 10
    interestList.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function getBase64(img, callback) {
    // debugger
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
class Register extends React.Component {
    state = {
        loading: false,
    };
    handleChange=(info)=> {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
            getBase64(info.file.originFileObj, userImg => this.setState({
                userImg,
                loading: false,
            }));
        }
    }
    handleSubmit=()=> {
        // this.props.form.resetFields() 重置表单
        // let userInfo = this.props.form.getFieldsValue(); 获取表单的值
        // console.log(userInfo)
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
           },
           wrapperCol: {
                xs: 24,
                sm: 12
           }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form {...formItemLayout}>
                        <FormItem label="用户名"  >
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
                                    <Input placeholder="请输入用户名" autoComplete="off"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" >
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
                                    <Input placeholder="请输入密码" type="password"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" >
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" >
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" >
                            {
                                getFieldDecorator('status', {
                                    initialValue: '2'
                                })(
                                    <Select>
                                        <Option value="1">1111</Option>
                                        <Option value="2">2222</Option>
                                        <Option value="3">3333</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" >
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['a10', 'c12']
                                })(
                                    <Select mode="multiple">
                                        {interestList}
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" >
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" >
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2019-05-05 18:07:08')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" >
                            {
                                getFieldDecorator('address', {
                                    initialValue: '重庆市巫山县神女社区'
                                })(
                                   <TextArea autosize={{minRows: 2, maxRows: 3}}/>
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" >
                            {
                                getFieldDecorator('time', {
                                    initialValue:   moment('12:08:23', 'HH:mm:ss')
                                })(
                                   <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" >
                            {
                                getFieldDecorator('userImg')(
                                   <Upload
                                        className="avatar-uploader"
                                        listType="picture-card"
                                        showUploadList={false}
                                        onChange={this.handleChange}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                   >
                                   {this.state.userImg ? <img src={this.state.userImg} alt=""/>: <Icon type={this.state.loading ? 'loading' : 'plus'} />}
                                   
                                   </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator('agree', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                   <Checkbox >
                                        我同意该<a href="https://www.baidu.com/">个人规范协议</a>
                                   </Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);