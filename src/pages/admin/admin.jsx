import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/admin.less'
import { Layout, Menu, Avatar } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import logo from './images/logo3.png'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Admin extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<UserOutlined />} title="设备在线">
                            <Menu.Item key="1">地图总览</Menu.Item>
                            <Menu.Item key="2">地图总览</Menu.Item>
                            <Menu.Item key="3">地图总览</Menu.Item>
                            <Menu.Item key="4">地图总览</Menu.Item>
                            <Menu.Item key="5">地图总览</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined />} title="设备在线">
                            <Menu.Item key="6">地图总览</Menu.Item>
                            <Menu.Item key="7">地图总览</Menu.Item>
                            <Menu.Item key="8">地图总览</Menu.Item>
                            <Menu.Item key="9">地图总览</Menu.Item>
                            <Menu.Item key="10">地图总览</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header" style={{ padding: 0, background: 'white' }} >
                        <img src={logo} alt="logo" className='logo' />
                        <ul>
                            <li>消息提醒</li>
                            <li><Avatar style={{
                                margin: '11px 6px',
                                verticalAlign: 'middle',
                            }}>USER</Avatar>系统管理员</li>
                            <li><Link to="/login">退出</Link></li>
                        </ul>
                    </Header>
                    <Content >
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
