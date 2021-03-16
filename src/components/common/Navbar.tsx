import Box from './Box'
import { Button } from 'antd'
import { Header, XDlogo } from './Layout.styled'
import Link from 'next/link'
import React from 'react'
import Sidemenu from './Sidemenu'
import Search from 'antd/lib/input/Search'
import { SearchOutlined } from '@ant-design/icons'

const onSearch = (e: string) => {
  console.log(e)
}

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
        <Search
          placeholder="input search text"
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
        />
      </Box>
      <Link href="/testpage">
        <Button type="primary">Post</Button>
      </Link>
    </Box>
  </Header>
)

export default Navbar
