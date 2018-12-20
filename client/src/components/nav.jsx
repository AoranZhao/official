'use strict';

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const Item = Menu.Item;
const SubMenu = Menu.SubMenu;
import { Row, Col } from 'antd';
import { Drawer, Button } from 'antd';
import logo_lg_pp from '../static/images/logo_large_purple.png';
import logo_lg_wt from '../static/images/logo_large_white.png';

import './nav.scss';
import '../assets/antd.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.selectedKey = props.selectedKey || "";
        this.is_dark = props.isDark || false;
        this.state = {
            show_drawer: false,
            show_menu: false,
            is_fixed: false
        };
        this.generateDefaultVersion = this.generateDefaultVersion.bind(this);
        this.generateDarkVersion = this.generateDarkVersion.bind(this);
        this.switchDrawer = this.switchDrawer.bind(this);
        this.switchMenu = this.switchMenu.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', (e) => {
            this.setState({
                is_fixed: document.documentElement.scrollTop > 120
            });
        })
    }

    switchMenu() {
        this.setState({
            show_menu: !this.state.show_menu
        })
    }

    switchDrawer() {
        this.setState({
            show_drawer: !this.state.show_drawer
        })
    }

    generateDefaultVersion() {
        return <div className="nav_frame_bg">
            <div className="nav_frame" style={this.state.is_fixed ? { position: 'fixed', top: 0, backgroundColor: 'white', boxShadow: '0 0 5px grey' } : { backgroundColor: 'white' }}>
                <div className="nav_bg" style={this.state.is_fixed ? { paddingTop: '0px' } : { paddingTop: '40px' }}>
                    <div className="nav_body_frame">
                        <Row>
                            <Col xs={16} sm={8} md={8} lg={8} xl={8}>
                                <div className="logo_frame">
                                    <img src={logo_lg_pp} />
                                </div>
                            </Col>
                            <Col xs={8} sm={16} md={16} lg={16} xl={16}>
                                <div className="menu_frame">
                                    <div className="menu_bg" style={{
                                        width: '441px'
                                    }}>
                                        <Menu
                                            selectedKeys={[this.selectedKey]}
                                            mode="horizontal"
                                        >
                                            <Item key="home">
                                                <a href="/">Home</a>
                                            </Item>
                                            <Item key="technology">
                                                <a href="/technology">Technology</a>
                                            </Item>
                                            <SubMenu title={<span>Product</span>}>
                                                <Item key="product:education">
                                                    Education
                                                </Item>
                                                <Item key="product:retail">
                                                    New Retail
                                                </Item>
                                            </SubMenu>
                                            <Item key="about">
                                                About
                                            </Item>
                                            <Item>
                                                <a onClick={this.switchDrawer}>Demo</a>
                                            </Item>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="menu_frame_min">
                                    <a onClick={this.switchMenu} style={{ float: 'right', marginRight: '20px', marginTop: '14px' }}><Icon type="menu-fold" style={{ fontSize: '32px', color: 'rgba(100, 100, 100, 0.9)' }} /></a>
                                    <Drawer
                                        title="Menu"
                                        placement="right"
                                        closable={false}
                                        onClose={this.switchMenu}
                                        visible={this.state.show_menu}
                                        style={{
                                            padding: 0
                                        }}>
                                        <Menu
                                            selectedKeys={[this.selectedKey]}
                                            mode="inline"
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            <Item key="home">
                                                <a href="/">Home</a>
                                            </Item>
                                            <Item key="technology">
                                                <a href="/technology">Technology</a>
                                            </Item>
                                            <SubMenu title={<span>Product</span>}>
                                                <Item key="product:education">
                                                    Education
                                            </Item>
                                                <Item key="product:retail">
                                                    New Retail
                                            </Item>
                                            </SubMenu>
                                            <Item key="about">
                                                About
                                            </Item>
                                            <Item>
                                                <a onClick={this.switchDrawer}>Demo</a>
                                            </Item>
                                        </Menu>
                                    </Drawer>
                                </div>
                                <Drawer
                                    title="Basic Drawer"
                                    placement="right"
                                    closable={false}
                                    onClose={this.switchDrawer}
                                    visible={this.state.show_drawer}
                                    style={{
                                        padding: 0
                                    }}
                                >
                                    some contents
                            </Drawer>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </div>
    }

    generateDarkVersion() {
        return <div className="nav_frame_bg">
            <div className="nav_frame" style={this.state.is_fixed ? { position: 'fixed', top: 0, backgroundColor: 'white', boxShadow: '0 0 5px grey' } : { backgroundColor: 'white' }}>
                <div className="nav_bg" style={this.state.is_fixed ? { paddingTop: '0px', background: 'rgba(30, 67, 118, 0.83)', color: 'white' } : { paddingTop: '40px', background: 'rgba(30, 67, 118, 0.83)', color: 'white' }}>
                    <div className="nav_body_frame">
                        <Row>
                            <Col xs={16} sm={8} md={8} lg={8} xl={8}>
                                <div className="logo_frame">
                                    <img src={logo_lg_wt} />
                                </div>
                            </Col>
                            <Col xs={8} sm={16} md={16} lg={16} xl={16}>
                                <div className="menu_frame">
                                    <div className="menu_bg" style={{
                                        width: '441px'
                                    }}>
                                        <Menu
                                            selectedKeys={[this.selectedKey]}
                                            mode="horizontal"
                                            style={{
                                                color: 'white',
                                                background: 'rgba(30, 67, 118, 0.83)'
                                            }}
                                        >
                                            <Item key="home">
                                                <a href="/" style={{ color: 'white' }}>Home</a>
                                            </Item>
                                            <Item key="technology">
                                                <a href="/technology" style={{ color: 'white' }}>Technology</a>
                                            </Item>
                                            <SubMenu title={<span>Product</span>}>
                                                <Item key="product:education">
                                                    Education
                                            </Item>
                                                <Item key="product:retail">
                                                    New Retail
                                            </Item>
                                            </SubMenu>
                                            <Item key="about">
                                                About
                                            </Item>
                                            <Item>
                                                <a style={{ color: 'white' }} onClick={this.switchDrawer}>Demo</a>
                                            </Item>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="menu_frame_min">
                                    <a onClick={this.switchMenu} style={{ float: 'right', marginRight: '20px', marginTop: '14px' }}><Icon type="menu-fold" style={{ fontSize: '32px', color: 'white' }} /></a>
                                    <Drawer
                                        title="Menu"
                                        placement="right"
                                        closable={false}
                                        onClose={this.switchMenu}
                                        visible={this.state.show_menu}
                                        style={{
                                            padding: 0
                                        }}>
                                        <Menu
                                            selectedKeys={[this.selectedKey]}
                                            mode="inline"
                                            style={{
                                                width: '100%'
                                                // color: 'white',
                                                // background: 'rgba(30, 67, 118, 0.83)'
                                            }}
                                        >
                                            <Item key="home">
                                                <a href="/">Home</a>
                                            </Item>
                                            <Item key="technology">
                                                <a href="/technology">Technology</a>
                                            </Item>
                                            <SubMenu title={<span>Product</span>}>
                                                <Item key="product:education">
                                                    Education
                                                </Item>
                                                <Item key="product:retail">
                                                    New Retail
                                                </Item>
                                            </SubMenu>
                                            <Item key="about">
                                                About
                                            </Item>
                                            <Item>
                                                <a onClick={this.switchDrawer}>Demo</a>
                                            </Item>
                                        </Menu>
                                    </Drawer>
                                </div>
                                <Drawer
                                    title="Basic Drawer"
                                    placement="right"
                                    closable={false}
                                    onClose={this.switchDrawer}
                                    visible={this.state.show_drawer}
                                    style={{
                                        padding: 0
                                    }}
                                >
                                    some contents
                                </Drawer>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </div>
    }

    render() {
        return this.is_dark ? this.generateDarkVersion() : this.generateDefaultVersion();
    }
}

export default Nav;