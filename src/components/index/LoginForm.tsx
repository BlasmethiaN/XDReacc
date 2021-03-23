import { Button, Checkbox, Form, Input } from 'antd'
import React, { useEffect } from 'react'

import { UserService } from '../../api/user/user.service'
import { mutate } from 'swr'
import { useCurrentUser } from '../../api/routes'
import { useRouter } from 'next/router'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const LoginForm = () => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  useEffect(() => {
    if (currentUser) {
      router.replace('/')
    }
  }, [currentUser])

  const onFinish = async (data: any) => {
    const response = await UserService.login(data)
    if (response.type == 'data') {
      mutate('/user')
      router.replace('/')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" size="large">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
