import Box from './Box'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useCurrentUser } from '../../api/routes'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Menu from './Menu'

const ImgProfile = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const TempDiv = styled.div`
  width: 80px;
`

const IsLoggedControl = (props: any) => {
  if (props.currentUser === undefined) {
    return <TempDiv />
  } else if (props.currentUser === '') {
    return (
      <Link href="/login">
        <Button type="primary" size="large">
          Login
        </Button>
      </Link>
    )
  } else {
    return (
      <Dropdown overlay={Menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {props.currentUser.displayName} <DownOutlined />
        </a>
      </Dropdown>
    )
  }
}

const Profile = () => {
  const { data: currentUser } = useCurrentUser()

  return (
    <Box flex alignItems="center" gap="10px">
      <IsLoggedControl currentUser={currentUser} />
      <Link href="#">
        <ImgProfile src="/profile_pic.jpg" alt="avatar" />
      </Link>
    </Box>
  )
}

export default Profile
