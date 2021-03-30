import { Form as _Form, Input, Button, Upload } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Uploader from './Uploader'

const Form = styled(_Form)`
  width: 400px;
`

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const UploadForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      size="large"
      layout="horizontal"
      wrapperCol={{ span: 100, offset: 0 }}
      name="uploadForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Tags" name="Tags">
        <Input />
      </Form.Item>
      <Form.Item label="Upload image" name="image">
        <Uploader />
        <Upload />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Post
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UploadForm
