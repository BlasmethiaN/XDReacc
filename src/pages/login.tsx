import { CenteredContent, Layout, XDlogo } from '../components/common/Layout.styled'

import Box from '../components/common/Box'
import Link from 'next/link'
import LoginForm from '../components/index/LoginForm'
import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 30px;
  padding-bottom: 20px;
`

const LoginPage = () => (
  <Layout>
    <CenteredContent>
      <Box flex gap="20px" flexDirection="column">
        <Link href="/">
          <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
        </Link>
        <H1>Login to XDanku</H1>
      </Box>
      <LoginForm />
      <Link href="/signup">Don't have an account?</Link>
    </CenteredContent>
  </Layout>
)

export default LoginPage
