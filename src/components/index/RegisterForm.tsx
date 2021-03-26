import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useRouter } from 'next/router'
import { Route, useCurrentUser } from '../../api/routes'
import { UserService } from '../../api/user/user.service'
import { mutate } from 'swr'
import { RegisterError } from '../../api/user/types/register-user-response.dto'

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const RegisterForm = () => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()
  const [error, setError] = useState<RegisterError | null>()

  useEffect(() => {
    if (currentUser) {
      router.replace('/')
    }
  }, [currentUser])

  const onFinish = async (data: any) => {
    const { password, passwordAgain } = data
    if (password == passwordAgain) {
      setError(null)
      const response = await UserService.register(data)
      if (response.type === 'data') {
        mutate(Route.CURRENT_USER)
        router.replace('/')
      } else {
        setError(response.error)
      }
    } else {
      setError(RegisterError.PASSWORDS_DONT_MATCH)
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
        validateStatus={error == RegisterError.USERNAME_EXISTS ? 'error' : ''}
        help={error == RegisterError.USERNAME_EXISTS && 'This username is already taken.'}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Display Name"
        name="displayName"
        rules={[{ required: true, message: 'Please input your Display Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        validateStatus={error == RegisterError.EMAIL_EXISTS ? 'error' : ''}
        help={error == RegisterError.EMAIL_EXISTS && 'This email is already taken.'}
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

      <Form.Item
        label="Repeat Password"
        name="passwordAgain"
        rules={[{ required: true, message: 'Please input your password again!' }]}
        validateStatus={error == RegisterError.PASSWORDS_DONT_MATCH ? 'error' : ''}
        help={error == RegisterError.PASSWORDS_DONT_MATCH && 'Passwords do not match.'}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" size="large">
          Signup
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
