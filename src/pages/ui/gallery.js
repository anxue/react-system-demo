import React from 'react';
import { Card, Row, Col, Modal  } from 'antd';
import './ui.css'
// import imgUrl from '../../assets/cat1'
const { Meta } = Card;
export default class Gallery extends React.Component{
    state = {
        visible: false
    }
    openGallery=(imgSrc)=> {
        this.setState({
            currentImg: "../../assets/" + imgSrc,
            visible: true
        })
    }
    render() {
        const imgs = [
            ['png1.png', 'png2.png', 'png3.png', 'png4.png', 'png5.png'],
            ['png6.png', 'png7.png', 'png8.png', 'png9.png', 'png10.png'],
            ['png11.png', 'png12.png', 'png13.png', 'png14.png', 'png15.png'],
            ['png16.png', 'png17.png', 'png18.png', 'png19.png', 'png20.png'],
            ['png21.png', 'png22.png', 'png23.png', 'png24.png', 'png25.png']
        ]
        const imgList = imgs.map((list, i) => list.map((item, index) => 
                <Card
                key={index}
                    cover = {<img src={require('../../assets/' + item)}
                      onClick={()=>this.openGallery(item)}
                    alt="..."/>}
                >
                    <Meta
                        title="时尚街头"
                        description="年轻人的热情"
                    />
                </Card>
            ))
        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal
                    width={300}
                    title="图片画廊"
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    <img
                    src={this.state.currentImg}
                    style={{width:'100%'}}
                      alt=""
                      />
                </Modal>
            </div>
        )
    }
}