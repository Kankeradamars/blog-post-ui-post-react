import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import store from 'store';
import './index.css';
import { useHistory } from 'react-router-dom';
import BlogApi from "../services/apiBlog";

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const response = await BlogApi.loginAuth(values);
    // console.log(response);
    if(!response){
      return}
    if (response.status === 201) {
      store.set("user",{token:response.data.token})
      history.push("/DashBoard")
    }

  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default SignIn;