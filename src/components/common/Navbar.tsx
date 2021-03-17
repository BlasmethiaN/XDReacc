import { Button } from 'antd'
import { Header, XDlogo } from './Layout.styled'
import Box from './Box'
import Link from 'next/link'
import React from 'react'
import Sidemenu from './Sidemenu'
import SearchBar from './SearchBar'
import Profile from './Profile'

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
      <Box flex alignItems="center" flexDirection="row" gap="10px">
        <Link href="/testpage">
          <Button type="ghost" size="large">
            Post
          </Button>
        </Link>
        <Profile />
      </Box>
    </Box>
  </Header>
)

export default Navbar
