'use strict';

import React, { Component } from 'react';
// associate with redux
import { connect } from 'react-redux';
import { } from '../actions';
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
// import component;
import Nav from '../components/nav.jsx';
import Foot from '../components/foot.jsx';
import { Row, Col } from 'antd';
import Image_face from '../static/images/face_large.png';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import { Divider } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import { Card } from 'antd';
const Meta = Card.Meta;
import DRL from '../static/images/DRL.gif';
import Drone from '../static/images/Drone.gif';
import Explain from '../static/images/Explain.gif';
import Lightbulb from '../static/images/lightbulb.png';
import NewRetail from '../static/images/newRetail_large.png';
import Brain from '../static/images/brain_large.png';
import Edit from '../components/logo.jsx';

import './home.scss';
import '../assets/rc-texty.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.sectionOne = this.sectionOne.bind(this);
        this.textyEnter = this.textyEnter.bind(this);
        this.textySplit = this.textySplit.bind(this);
        this.sectionTwo = this.sectionTwo.bind(this);
        this.sectionThree = this.sectionThree.bind(this);
    }

    sectionOne() {
        return <div className="section_frame">
            <div className="section_body_frame" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Row>
                    <Col xs={24} sm={12} md={14} lg={14} xl={16}>
                        <Row>
                            <Col xs={0} sm={0} md={2} lg={4} xl={4}></Col>
                            <Col xs={20} sm={20} md={18} lg={16} xl={16}>
                                <div style={{ textAlign: 'center', margin: '20px', paddingTop: '240px' }}>
                                    <div style={{ fontSize: '24px' }}>
                                        <Texty enter={this.textyEnter} leave={this.textyEnter} split={this.textySplit}>
                                            For every cherished experience enabled by personalized eXplainable artificial intelligence
                                        </Texty>
                                    </div>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 100, duration: 800 }}>
                                        <p style={{ fontSize: '14px', paddingTop: '30px' }}>Learnable develops human-centered AI that can streamline production process, maximize business value and optimize user experience.</p>
                                    </TweenOne>
                                </div>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                        <img src={Image_face} style={{ height: '600px', float: 'right' }} />
                    </Col>
                </Row>
            </div>
        </div>
    }

    textySplit(e) {
        const t = e.split(' ');
        const c = [];
        t.forEach((str, i) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }

    textyEnter(e) {
        let rdm = Math.floor(Math.random() * 10);
        // switch (e.index) {
        switch (rdm) {
            case 0:
                return {
                    rotate: 90,
                    opacity: 0,
                    y: -60,
                };
            case 10:
            case 1:
                return {
                    y: -60,
                    x: -10,
                    opacity: 0,
                };
            case 9:
            case 2:
                return {
                    y: -60,
                    x: 20,
                    opacity: 0,
                };
            case 3:
                return {
                    y: 60,
                    opacity: 0,
                };
            case 8:
            case 4:
                return {
                    x: 30,
                    opacity: 0,
                };
            case 5:
                return {
                    enter: [
                        {
                            scale: 2,
                            opacity: 0,
                            type: 'set',
                        },
                        { scale: 1.2, opacity: 1, duration: 300 },
                        { scale: 0.9, duration: 200 },
                        { scale: 1.05, duration: 150 },
                        { scale: 1, duration: 100 },
                    ],
                    leave: {
                        opacity: 0, scale: 0,
                    },
                };
            case 6:
                return {
                    scale: 0.8,
                    x: 30,
                    y: -10,
                    opacity: 0,
                };
            case 7:
                return {
                    scale: 0.8,
                    x: 30,
                    y: 10,
                    opacity: 0,
                };
            default:
                return {
                    opacity: 0,
                };
        }
    }

    sectionTwo() {
        return <div className="section_frame">
            <div className="section_frame_bg" style={{ width: '100%', backgroundColor: '#f6f7f8' }}>
                <OverPack className="section_body_frame" style={{ marginTop: '30px', marginBottom: '30px', height: '500px' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div style={{ textAlign: 'center', margin: '40px 60px' }}>
                                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', duration: 800 }}>
                                    <Divider style={{ fontSize: '24px' }}>Technology</Divider>
                                </TweenOne>
                                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200, duration: 800 }}>
                                    <p>Learnable has customized artificial intelligence with the human touch. We have developed a constellation of technologies that can be taught, trusted and operated by all generations.</p>
                                </TweenOne>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} sm={1} md={2} lg={3} xl={4}></Col>
                        <Col xs={22} sm={22} md={20} lg={18} xl={16}>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 400, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={DRL} />}>
                                            <Meta
                                                title="Deep Reinforcement Learning"
                                                description="Learn complicated tasks through self-training." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 600, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={Explain} />}>
                                            <Meta
                                                title="eXplainable AI Engine"
                                                description="Open up the black-box of deep learning." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 500, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={Drone} />}>
                                            <Meta
                                                title="Teachable AI Engine"
                                                description="Teach AI through natural language feedback." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} sm={1} md={2} lg={3} xl={4}></Col>
                    </Row>
                </OverPack>
            </div>
        </div>
    }

    sectionThree() {
        return <div className="section_frame">
            <div className="section_frame_bg" style={{ width: '100%', backgroundColor: 'white' }}>
                <OverPack className="section_body_frame" style={{ marginTop: '30px', marginBottom: '30px', height: '500px' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div style={{ textAlign: 'center', margin: '40px 60px' }}>
                                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', duration: 800 }}>
                                    <Divider style={{ fontSize: '24px' }}>Product</Divider>
                                </TweenOne>
                                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200, duration: 800 }}>
                                    <p>Learnable is providing piercing, practical, and personalized solutions depending on your demand. Our advanced AI technologies have been applied to three major domains. Education, Retail, and Others.</p>
                                </TweenOne>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} sm={1} md={2} lg={3} xl={4}></Col>
                        <Col xs={22} sm={22} md={20} lg={18} xl={16}>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 400, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={Lightbulb} />}>
                                            <Meta
                                                title="Education"
                                                description="AI empowers streamlined teaching & personalized Learning. Star Products: Automatic Grading AI, Educational Content Recognition." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 600, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={NewRetail} />}>
                                            <Meta
                                                title="New Retail"
                                                description="AI unlocks Offline-to-Online solutions. Star Products: Intention Recognition, Personalized Recommendation." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 500, duration: 800 }}>
                                        <Card
                                            hoverable
                                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                                            cover={<img src={Brain} />}>
                                            <Meta
                                                title="Other"
                                                description="AI promises a better future for many industries. Star Products: Duckietown AI course, TCM Robot." />
                                        </Card>
                                    </TweenOne>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} sm={1} md={2} lg={3} xl={4}></Col>
                    </Row>
                </OverPack>
            </div>
        </div>
    }

    render() {
        return <div>
            <Nav selectedKey="home" />
            {this.sectionOne()}
            {this.sectionTwo()}
            {this.sectionThree()}
            <Foot />
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);