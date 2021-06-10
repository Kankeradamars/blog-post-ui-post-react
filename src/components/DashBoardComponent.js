import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Card, Button, Upload, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const DashboardComponent = () => {
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 10,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Card className='card-dashboard'>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    remember: true,
                }}>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Blog Title!',
                        },
                    ]}
                >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                    name="content"
                    label="Content"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Your Content!',
                        },
                    ]}
                >
                    <Input placeholder="Content" />
                </Form.Item>
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Button type="primary" htmlType="submit" className="button">
                    Add
        </Button>
            </Form>
        </Card>
    )
}
export default DashboardComponent;