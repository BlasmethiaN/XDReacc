import Box from './Box'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Route, useCurrentUser } from '../../api/routes'
import { Menu as AntMenu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { UserService } from '../../api/user/user.service'
import { mutate } from 'swr'

const ImgProfile = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const Menu = () => {
  const onClick = async () => {
    const result = await UserService.logout()
    if (result) {
      mutate(Route.CURRENT_USER)
    }
  }

  return (
    <AntMenu>
      <AntMenu.Item>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </AntMenu.Item>
      <AntMenu.Item>
        <a onClick={onClick}>Logout</a>
      </AntMenu.Item>
    </AntMenu>
  )
}

const Profile = () => {
  const { data: currentUser } = useCurrentUser()

  return (
    <Box flex alignItems="center" gap="10px">
      {currentUser ? (
        <Dropdown overlay={Menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {currentUser.displayName} <DownOutlined />
          </a>
        </Dropdown>
      ) : (
        <Link href="/login">
          <Button type="primary" size="large">
            Login
          </Button>
        </Link>
      )}
      <Link href="#">
        <ImgProfile src="/profile_pic.jpg" alt="avatar" />
      </Link>
    </Box>
  )
}

export default Profile
