import Box from './Box'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from 'antd'

const ImgProfile = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const Profile = () => {
  return (
    <Box flex alignItems="center" gap="10px">
      <Link href="login">
        <Button type="primary" size="large">
          Login
        </Button>
      </Link>
      <Link href="#">
        <ImgProfile src="/profile_pic.jpg" alt="avatar" />
      </Link>
    </Box>
  )
}

export default Profile
