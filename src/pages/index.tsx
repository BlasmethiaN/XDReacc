import { Button, Layout } from 'antd'

import Box from '../components/common/Box'
import React from 'react'
import styled from 'styled-components'

const XDlogo = styled.img`
  width: 150px;
`

const Header = styled(Layout.Header)`
  display: flex;
  background-color: #3f3f3f;
`

const Navbar = () => (
  <Header>
    <Box flex fullWidth justifyContent="space-between" alignItems="center">
      <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
      <Button type="primary">Post</Button>
    </Box>
  </Header>
)

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Layout.Content>
      <h5>Hello World xd</h5>
      <Button type="primary">Bruhtton</Button>
    </Layout.Content>
  </Layout>
)

export default IndexPage
