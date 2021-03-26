import { Content, Layout, XDlogo } from '../components/common/Layout.styled'

import React from 'react'
import Box from '../components/common/Box'
import styled from 'styled-components'
import Link from 'next/link'
import RegisterForm from '../components/index/RegisterForm'

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
          <H1>Signup to XDanku</H1>
        </Box>
        <RegisterForm />
        <Link href="login">Already have an account?</Link>
      </Box>
    </Content>
  </Layout>
)

export default LoginPage
