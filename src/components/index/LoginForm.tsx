import { Button, Checkbox, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Route, useCurrentUser } from '../../api/routes'

import { LoginError } from '../../api/user/types/login-user-response.dto'
import { UserService } from '../../api/user/user.service'
import { mutate } from 'swr'
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
  const [error, setError] = useState<LoginError | null>()

  useEffect(() => {
    if (currentUser) {
      router.replace('/')
    }
  }, [currentUser])

  const onFinish = async (data: any) => {
    setError(null)
    const response = await UserService.login(data)
    if (response.type == 'data') {
      mutate(Route.CURRENT_USER)
      router.replace('/')
    } else {
      setError(response.error)
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
        validateStatus={error == LoginError.WRONG_USERNAME ? 'error' : ''}
        help={error == LoginError.WRONG_USERNAME && 'Wrong username!'}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        validateStatus={error == LoginError.WRONG_PASSWORD ? 'error' : ''}
        help={error == LoginError.WRONG_PASSWORD && 'Wrong password!'}
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
