'use strict';

import React, { Component } from 'react';
// associate with redux
import { connect } from 'react-redux';
import { } from '../actions';
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
// import component;
import Nav from '../components/nav.jsx';
import BannerV2 from '../components/banner.jsx';
import DetailTab from '../components/tab.jsx';
import Foot from '../components/foot.jsx';

import './technology.scss';

class TechPage extends Component {
    constructor(props) {
        super(props);
    }

    content() {
        let list = [];
        for (let i = 0; i < 200; i++) {
            list.push(<p>{`tech page ${i}`}</p>)
        }
        return list;
    }

    render() {
        return <div>
            <Nav selectedKey="technology" isDark={true} />
            <BannerV2 title="Technology" subTitle="Customize artificial intelligence for industry localization with the human touch." />
            <DetailTab />
            <Foot />
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechPage);