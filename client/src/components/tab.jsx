'use strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import DRL from '../static/images/DRL.gif';
import Drone from '../static/images/Drone.gif';
import Explain from '../static/images/Explain.gif';
import ScrollAnim from 'rc-scroll-anim';
const Parallax = ScrollAnim.Parallax;
const OverPack = ScrollAnim.OverPack;
const Element = ScrollAnim.Element;
const Link = ScrollAnim.Link;
ScrollAnim.scrollScreen.init({});

import './tab.scss';
import '../assets/rc-queue-anim.css';
import '../assets/antd.css';

class DetailTab extends Component {
    constructor(props) {
        super(props);
        this.data = [{
            image: DRL,
            tab: 'DRL',
            title: 'Deep Reinforcement Learning',
            text: 'Deep Reinforcement Learning can learn complicated tasks through self-training. It can achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable tasks.'
        }, {
            image: Drone,
            tab: 'Drone',
            title: 'eXplainable AI Engine',
            text: 'Explainable AI Engine can explain the reason for its decision. It is more reliable compared to general “blackbox” AI and is more suitable for industry applications.'
        }, {
            image: Explain,
            tab: 'Explain',
            title: 'Teachable AI Engine',
            text: 'Teachable AI Engine can learn to do any task through natural language feedback from the general lay population. It supports multiple human-computer interactions, i.e., reward and feedback, voice control, end-user programming, etc.'
        }]
        this.state = {
            tab_num: "0"
        }
        this.switchTab = this.switchTab.bind(this);
        this.switchText = this.switchText.bind(this);
        this.sectionv1 = this.sectionv1.bind(this);

        this.sectionv2 = this.sectionv2.bind(this);

        this.generateTab = this.generateTab.bind(this);
        this.generateDetail = this.generateDetail.bind(this);
        this.sectionv3 = this.sectionv3.bind(this);
    }

    switchTab(index) {
        this.setState({
            tab_num: index
        })
    }

    switchText(index) {
        try {
            index = parseInt(index);
        } catch (e) {
            index = 0
        }
        return <div style={{ width: '100%', margin: '5px' }}>
            <div style={{ height: '440px', paddingTop: '70px' }}>
                <QueueAnim
                    type='right'
                    ease='easeInOutQuart'
                    duration={[450, 0]}
                >
                    <h2 key={`h${index}`} style={{ textAlign: 'center', fontSize: '28px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>{this.data[index].title}</h2>
                    <QueueAnim
                        type='bottom'
                        ease='easeInOutQuart'
                        duration={[450, 0]}
                        delay={250}
                    >
                        <p key={`p${index}`} style={{ fontSize: '16px', margin: '0 5px', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>{this.data[index].text}</p>
                    </QueueAnim>
                </QueueAnim>
            </div>
        </div>
    }

    sectionv1() {
        return <div className="detailtab_frame_bg">
            <div className="detailtab_frame">
                <Row>
                    <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                        <Tabs
                            defaultActiveKey={this.state.tab_num}
                            onChange={this.switchTab}
                            tabPosition='left'
                            style={{
                                height: 440
                            }}>
                            {this.data.map((tab_data, index) => {
                                return <TabPane tab={<img style={{ height: '100px', marginTop: '10px', marginBottom: '10px' }} src={tab_data.image} />} key={`${index}`}>
                                    <div style={{ width: '100%', height: '440px' }}>
                                        <span style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle' }}></span>
                                        <img style={{ width: '100%', verticalAlign: 'middle' }} src={tab_data.image} />
                                    </div>
                                </TabPane>
                            })}
                        </Tabs>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        {this.switchText(this.state.tab_num)}
                    </Col>
                </Row>
            </div>
        </div>
    }

    generateTab(index, image) {
        return <Row key={index}>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <Link
                    to={`section${index}`}
                    showHeightActive="300"
                    onFocus={e => { console.log(e); }}
                    style={{ cursor: 'pointer', margitargetIdp: '5px', marginBottom: '5px' }}
                >
                    <img style={{ width: '100%' }} src={image} />
                </Link>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
        </Row>
    }

    generateDetail(index, title, text, image) {
        return <div key={index} style={{ height: '440px' }}>
            <OverPack
                id={`section${index}`}
                // targetId={`section${index}`}
                style={{ height: '100%' }}
                playScale={0.3}
            >
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                    <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                        <TweenOne>
                            <img style={{ height: '100%', width: '100%' }} src={image} />
                        </TweenOne>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <QueueAnim
                            type={['right', 'right']}
                            ease={['easeInOutQuart', 'easeInOutQuart']}
                            duration={[450, 450]}
                        >
                            <h2 key={`h${index}`} style={{ textAlign: 'center', fontSize: '28px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>{title}</h2>
                            <QueueAnim
                                type={['bottom', 'bottom']}
                                ease={['easeInOutQuart', 'easeInOutQuart']}
                                duration={[450, 450]}
                                delay={250}
                            >
                                <p key={`p${index}`} style={{ fontSize: '16px', margin: '0 5px', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>{text}</p>
                            </QueueAnim>
                        </QueueAnim>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                </Row>
            </OverPack>
        </div>
    }

    sectionv3() {
        return <div className="detailtab_frame_bg">
            <div className="detailtab_frame">
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        {this.data.map((entity, index) => {
                            return this.generateTab(index, entity.image);
                        })}
                    </Col>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        {this.data.map((entity, index) => {
                            return this.generateDetail(index, entity.title, entity.text, entity.image);
                        })}
                    </Col>
                </Row>
            </div>
        </div>
    }

    sectionv2() {
        return <div className="detailtab_frame_bg">
            <div className="detailtab_frame">
                <div style={{ marginBottom: '30px' }}>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3}></Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Link to="section1" style={{ cursor: 'pointer' }}><img src={DRL} style={{ width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} /></Link>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Link to="section2" style={{ cursor: 'pointer' }}><img src={Drone} style={{ width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} /></Link>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Link to="section3" style={{ cursor: 'pointer' }}><img src={Explain} style={{ width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} /></Link>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3}></Col>
                    </Row>
                </div>
                <div style={{ height: '100vh', width: '100%', backgroundColor: '#f6f7f8' }}>
                    <Element id="section1">
                        <OverPack
                            style={{ paddingTop: '130px' }}
                        >
                            <Row>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                                <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                                    {/* <Parallax
                                        animation={[{ playScale: [0, 0.3], y: 0, opacity: 1 }, { playScale: [0.4, 0.7], y: 300, opacity: 0 }]}
                                    >
                                        <img src={DRL} style={{ width: '100%', y: -300, opacity: 0 }} />
                                    </Parallax> */}
                                    <QueueAnim
                                        type="top"
                                        ease="easeInOutQuart"
                                        duration={[450, 0]}
                                    >
                                        <img src={DRL} style={{ width: '100%' }} />
                                    </QueueAnim>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <QueueAnim
                                        type='right'
                                        ease='easeInOutQuart'
                                        duration={[450, 0]}
                                    >
                                        <h2 key={`h0`} style={{ textAlign: 'center', fontSize: '28px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                            Deep Reinforcement Learning
                                        </h2>
                                        <QueueAnim
                                            type='bottom'
                                            ease='easeInOutQuart'
                                            duration={[450, 0]}
                                            delay={250}
                                        >
                                            <p key={`p0`} style={{ fontSize: '16px', margin: '0 5px', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                                Deep Reinforcement Learning can learn complicated tasks through self-training. It can achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable tasks.
                                                </p>
                                        </QueueAnim>
                                    </QueueAnim>
                                </Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                            </Row>
                        </OverPack>
                    </Element>
                </div>
                <div style={{ height: '100vh', width: '100%', backgroundColor: 'white' }}>
                    <Element id="section2">
                        <OverPack
                            style={{ paddingTop: '130px' }}
                        >
                            <Row>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                                <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                                    <QueueAnim
                                        type="top"
                                        ease="easeInOutQuart"
                                        duration={[450, 0]}
                                    >
                                        <img src={Drone} style={{ width: '100%' }} />
                                    </QueueAnim>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <QueueAnim
                                        type='right'
                                        ease='easeInOutQuart'
                                        duration={[450, 0]}
                                    >
                                        <h2 key={`h1`} style={{ textAlign: 'center', fontSize: '28px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                            eXplainable AI Engine
                                            </h2>
                                        <QueueAnim
                                            type='bottom'
                                            ease='easeInOutQuart'
                                            duration={[450, 0]}
                                            delay={250}
                                        >
                                            <p key={`p1`} style={{ fontSize: '16px', margin: '0 5px', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                                Explainable AI Engine can explain the reason for its decision. It is more reliable compared to general “blackbox” AI and is more suitable for industry applications.
                                                </p>
                                        </QueueAnim>
                                    </QueueAnim>
                                </Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                            </Row>
                        </OverPack>
                    </Element>
                </div>
                <div style={{ height: '100vh', width: '100%', backgroundColor: '#f6f7f8' }}>
                    <Element id="section3">
                        <OverPack
                            style={{ paddingTop: '130px' }}
                        >
                            <Row>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                                <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                                    <QueueAnim
                                        type="top"
                                        ease="easeInOutQuart"
                                        duration={[450, 0]}
                                    >
                                        <img src={Explain} style={{ width: '100%' }} />
                                    </QueueAnim>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <QueueAnim
                                        type='right'
                                        ease='easeInOutQuart'
                                        duration={[450, 0]}
                                    >
                                        <h2 key={`h0`} style={{ textAlign: 'center', fontSize: '28px', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                            Teachable AI Engine
                                        </h2>
                                        <QueueAnim
                                            type='bottom'
                                            ease='easeInOutQuart'
                                            duration={[450, 0]}
                                            delay={250}
                                        >
                                            <p key={`p0`} style={{ fontSize: '16px', margin: '0 5px', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                                Teachable AI Engine can learn to do any task through natural language feedback from the general lay population. It supports multiple human-computer interactions, i.e., reward and feedback, voice control, end-user programming, etc.
                                                </p>
                                        </QueueAnim>
                                    </QueueAnim>
                                </Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                            </Row>
                        </OverPack>
                    </Element>
                </div>
            </div>
        </div>
    }

    render() {
        // return this.sectionv1();
        // return this.sectionv2();
        // return [this.sectionv2(), this.sectionv1()];
        return this.sectionv3();
    }
}

export default DetailTab;