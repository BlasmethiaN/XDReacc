import { Button, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Sidemenu from './Sidemenu'

const XDlogo = styled.img`
  width: 140px;
  cursor: pointer;
`

const Header = styled(Layout.Header)`
  display: flex;
  background-color: #181818;
  border-bottom: 1px solid white;
`

const Navbar = () => (
  <Header>
    <Box flex fullWidth justifyContent="space-between" alignItems="center">
      <Sidemenu />
      <Link href="#">
        <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
      </Link>
      <Link href="/testpage">
        <Button type="primary">Post</Button>
      </Link>
    </Box>
  </Header>
)

export default Navbar
