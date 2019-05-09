import React from 'react'
import {Row, Col,Button} from 'antd'
import './index.css'
import Util from '../../utils/utils'
import { Link} from 'react-router-dom'
// import axios from '../../axios/index'
export default class Header extends React.Component {
    state = {

    }
    componentWillMount() {
        this.setState({
            userName: '安鱼ooooo'
        })
        setInterval(() => {
            let systemTime = Util.formateDate(new Date().getTime())
            this.setState({
                systemTime
            })
        }, 1000)
        // this.getWeatherAPIData();
    }
    getWeatherAPIData() {
        // let city = '北京'
        // axios.jsonp({
        //     url: '请求接口'
        // }).then(res=> {
        //     if (res.status === 'success'){
                
        //     } 
        // })
    }
    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">     
                <Row className="header-top">
                    <Col span={24}>
                        <span style={{paddingRight: 10}}>欢迎, {this.state.userName}</span>
                        {/* <a href="#">退出</a> */}
                        <Link to="/">
                            <Button type="primary" ghost >退出</Button>
                        </Link>
                    </Col>
                </Row>
                {
                    menuType ? '': 
                    <Row className="header-breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                            首页
                        </Col>
                        <Col span={20} className="weather">
                            <span className="system-time">{this.state.systemTime}</span>
                            <span className="weather-detail">晴转多云</span>
                        </Col>
                    </Row>
                }

            </div>
        )
    }
}