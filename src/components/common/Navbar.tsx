import { Button } from 'antd'
import { Header, XDlogo } from './Layout.styled'
import Box from './Box'
import Link from 'next/link'
import React from 'react'
import Sidemenu from './Sidemenu'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Header>
    <Box flex fullWidth justifyContent="space-between" alignItems="center" gap="30px">
      <Box flex gap="20px" alignItems="center">
        <Sidemenu />
        <Link href="#">
          <XDlogo src="/xdanku_logo.png" alt="XDanku logo" />
        </Link>
      </Box>
      <Box flex alignItems="center" flexGrow={2} style={{ maxWidth: '500px' }}>
        <SearchBar />
      </Box>
      <Link href="/testpage">
        <Button type="primary">Post</Button>
      </Link>
    </Box>
  </Header>
)

export default Navbar
