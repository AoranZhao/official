'use strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import QueueAnim from 'rc-queue-anim';
import DRL from '../static/images/DRL.gif';
import Drone from '../static/images/Drone.gif';
import Explain from '../static/images/Explain.gif';

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

    render() {
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
}

export default DetailTab;