import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import './css/login.less'
import qr from './images/QR_code_new3.png'
class LoginUI extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
        this.props.history.push('/admin')
    }
    render() {
        return (
            <section className='login'>
                <img src={qr} alt="qr" className='qr' />
                <div className="login_container">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                                {
                                    max: 12,
                                    message: '用户名必须不大于12位',
                                },
                                {
                                    min: 4,
                                    message: '用户名必须不小于4位',
                                },
                                {
                                    pattern: /^\w+$/,
                                    message: '用户名必须由字母数字下划线组成',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: (_, value) => {
                                        if (!value) {
                                            return Promise.reject('请输入密码!')
                                        } else if (value.length > 12) {
                                            return Promise.reject('密码必须不大于12位')
                                        } else if (value.length < 4) {
                                            return Promise.reject('密码必须不小于4位')
                                        } else if (!(/^\w+$/).test(value)) {
                                            return Promise.reject('密码必须由字母数字组成')

                                        } else {
                                            return Promise.resolve()
                                        }
                                    }
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="">
                                忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button shape="round" type="primary" htmlType="submit" className="login-form-button" block >登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </section >
        )
    }
}
export default connect(
    state => {

    }, {

}
)(LoginUI)