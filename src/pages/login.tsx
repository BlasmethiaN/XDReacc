import { Content, Layout, XDlogo } from '../components/common/Layout.styled'

import React from 'react'
import Box from '../components/common/Box'
import LoginForm from '../components/index/LoginForm'
import styled from 'styled-components'
import Link from 'next/link'

const H1 = styled.h1`
  font-size: 30px;
  padding-bottom: 20px;
`

const LoginPage = () => (
  <Layout>
    <Content style={{ display: 'flex' }}>
      <Box
        flex
        justifyContent="center"
        alignItems="center"
        style={{ flexGrow: 1 }}
        flexDirection="column"
      >
        <Box flex gap="20px" flexDirection="column">
          <Link href="/">
            <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
          </Link>
          <H1>Login to XDanku</H1>
        </Box>
        <LoginForm />
        <Link href="signup">Don't have an account?</Link>
      </Box>
    </Content>
  </Layout>
)

export default LoginPage
