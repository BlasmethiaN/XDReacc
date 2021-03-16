import { Button, Layout } from 'antd'

import Box from './Box'
import Link from 'next/link'
import React from 'react'
import Sidemenu from './Sidemenu'
import styled from 'styled-components'

const XDlogo = styled.img`
  width: 140px;
  cursor: pointer;
`

const Header = styled(Layout.Header)`
  display: flex;
  border-bottom: 1px solid white;
  padding: 0px 10px;
`

const Navbar = () => (
  <Header>
    <Box flex fullWidth justifyContent="space-between" alignItems="center">
      <Box flex gap="20px" alignItems="center">
        <Sidemenu />
        <Link href="#">
          <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
        </Link>
      </Box>
      <Link href="/testpage">
        <Button type="primary">Post</Button>
      </Link>
    </Box>
  </Header>
)

export default Navbar
