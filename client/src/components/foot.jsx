'use strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Icon_wechat from '../static/images/wechat_icon.png';
import Icon_linkedin from '../static/images/linkedin_icon.png';
import Code_qr from '../static/images/qr.jpg';

import './foot.scss';

class Foot extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="foot_frame">
            <div className="foot_body_frame">
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                    <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                        <a href="mailto:contact@learnable.ai">contact@learnable.ai</a>
                        <p>59 Brainerd Rd., Allston, MA 02134</p>
                        <div>
                            <img src={Icon_wechat} style={{ height: '25px', width: '25px' }} />
                            <img src={Icon_linkedin} style={{ height: '25px', width: '25px' }} />
                        </div>
                        <a href="#">Privacy Statement</a>
                        <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                </Row>
            </div>
            <div className="foot_body_frame_min">
                <Row>
                    <Col>

                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default Foot;