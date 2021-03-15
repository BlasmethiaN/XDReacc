import { Button, Layout } from 'antd'

import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  color: white;
`

const Header = styled(Layout.Header)`
  background-color: #3f3f3f;
`

const IndexPage = () => (
  <Layout>
    <Header>
      <Logo>nextJSin</Logo>
    </Header>
    <Layout.Content>
      <h5>Hello World xd</h5>
      <Button type="primary">Bruhtton</Button>
    </Layout.Content>
  </Layout>
)

export default IndexPage
