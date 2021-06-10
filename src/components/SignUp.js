import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import BlogApi from '../services/apiBlog';
import {useHistory} from 'react-router-dom';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SignUp = () => {
  const history = useHistory(); 
  const onFinish = async(values) => {
  const response = await BlogApi.signupAuth(values);
  if(!response){
    return 
  }
if(response.status === 201){
  return history.push('/signin')
}
  };
  const [form] = Form.useForm();
  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  return (
    <Card className="card-register">
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      initialValues={{
        residence: ['kigali', 'Rwanda'],
      }}
      onFinish={onFinish}
    >
<Form.Item
        name="firstName"
        label="FirstName"
        rules={[
          {
            required: true,
            message: 'Please Enter your FirstName!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="LastName"
        rules={[
          {
            required: true,
            message: 'Please Enter your LastName!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input 
         style={{
          width: '80%',
        }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password 
        style={{
          width: '80%',
        }}
        />
      </Form.Item>
      {/* <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        
        <Input.Password 
        
        style={{
          width: '70%',
        }}
        />
        
      </Form.Item>  */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please Enter your Gender!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="jobRole"
        label="JobRole"
        rules={[
          {
            required: true,
            message: 'Please Enter your Role!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="department"
        label="Department"
        rules={[
          {
            required: true,
            message: 'Please Enter your Department!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please Enter your Address!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
            message: 'Please Enter your Country!',
          },
        ]}
      >
        <Input
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox style={{
            margin: '0% 0% 0% 30%'
          }}>
          I have read the <a href="">Agreement</a>
        </Checkbox>
      </Form.Item>  
      <Form.Item  {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>
      </Form>
</Card>
  );
};
export default SignUp;