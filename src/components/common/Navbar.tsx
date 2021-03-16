import Box from './Box'
import { Button } from 'antd'
import { Header } from './Layout.styled'
import Link from 'next/link'
import React from 'react'
import Sidemenu from './Sidemenu'
import styled from 'styled-components'

const XDlogo = styled.img`
  width: 140px;
  cursor: pointer;
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
