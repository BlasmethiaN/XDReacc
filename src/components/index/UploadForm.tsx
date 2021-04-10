import { Button, Checkbox, Col, Form, Input, Row, Upload } from 'antd'
import React, { useEffect } from 'react'

import Link from 'next/link'
import Uploader from './Uploader'
import { XDlogo as _XDlogo } from '../common/Layout.styled'
import axios from 'axios'
import styled from 'styled-components'

const XDlogo = styled(_XDlogo)`
  margin-top: 5%;
  margin-left: 15%;
`

const layout = {
  labelCol: { span: 4, offset: 2 },
  wrapperCol: { span: 12 },
}

const tailLayout = {
  wrapperCol: { offset: 12, span: 16 },
}

const UploadForm = ({ draftId }: { draftId: string }) => {
  useEffect(
    () => () => {
      axios.delete(`/contribution/draft/${draftId}`)
    },
    []
  )

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify="center">
      <Col span={11}>
        <Link href="/">
          <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
        </Link>

        <Form
          {...layout}
          size="large"
          layout="horizontal"
          name="uploadForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ marginTop: '20%' }}
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

          <Form.Item label="Tags" name="tags">
            <Input />
          </Form.Item>

          <Form.Item name="image" wrapperCol={{ offset: 6, span: 13 }}>
            <Uploader draftId={draftId} />
            <Upload />
          </Form.Item>

          <Form.Item name="original" valuePropName="" wrapperCol={{ offset: 6, span: 13 }}>
            <Checkbox>Original Content</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default UploadForm
