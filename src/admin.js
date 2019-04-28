import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.css'
import Home from './pages/home/index'
export default class Admin extends React.Component {

    render() {
        return ( 
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={21} className="main">
                    <Header></Header>
                    <Row className="content">
                        <Home />
                        {/* content */}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}