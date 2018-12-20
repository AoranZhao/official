'use strict';

import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
const BgElement = Element.BgElement;

import './banner.scss';
import '../assets/rc-banner-anim.css';

class BannerV2 extends Component {
    constructor(props) {
        super(props);
        this.title = props.title || "[unknown]";
        this.sub_title = props.subTitle || "[unknown]";
        this.state = {
            loadBanner: false
        }
    }

    componentDidMount() {
        this.setState({ loadBanner: true });
    }

    render() {
        return <div className="banner_frame_bg">
            <div className="banner_frame" style={this.state.loadBanner ? { height: '300px', transitionDuration: '0.5s' } : { height: '0' }}>
                <div className="banner_body_frame">
                    <TweenOne className="banner-title" animation={{ y: 30, opacity: 0, type: 'from', delay: 500, duration: 800 }}>
                        {this.title}
                    </TweenOne>
                    <TweenOne className="banner-subtitle" animation={{ y: 30, opacity: 0, type: 'from', delay: 600, duration: 800 }}>
                        {this.sub_title}
                    </TweenOne>
                </div>
            </div>
        </div>
    }
}

export default BannerV2;