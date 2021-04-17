import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Uploader from './Uploader'
import { XDlogo as _XDlogo } from '../common/Layout.styled'
import axios from 'axios'
import { useBeforeunload } from 'react-beforeunload'
import styled from 'styled-components'
import { ContributionService } from '../../api/contribution/contribution.service'
import { mutate } from 'swr'
import { Route } from '../../api/routes'
import { useRouter } from 'next/router'
import { CreateContributionError } from '../../api/contribution/types/create-contribution-response.dto'

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
  const router = useRouter()
  const [error, setError] = useState<CreateContributionError | null>()

  const deleteDraft = () => {
    if (draftId !== null) {
      axios.delete(`/contribution/draft/${draftId}`)
    }
  }
  useBeforeunload(deleteDraft)

  useEffect(() => deleteDraft, [])

  const onFinish = async (data: any) => {
    const response = await ContributionService.createContribution(data, draftId)
    if (response.type === 'data') {
      mutate(Route.CONTRIBUTION)
      console.log(response.data.id)
      router.replace(`/contribution/${response.data.id}`)
    } else if (response.type === 'error') {
      setError(CreateContributionError.NO_IMAGE)
    }
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

          <div>
            <Uploader draftId={draftId} />
            {error == CreateContributionError.NO_IMAGE && 'Please select an image.'}
          </div>

          <Form.Item name="original" valuePropName="" wrapperCol={{ offset: 6, span: 13 }}>
            <Checkbox>Original Content</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout} name="upload">
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
