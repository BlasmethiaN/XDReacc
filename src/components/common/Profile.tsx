import Box from './Box'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useCurrentUser } from '../../api/routes'

const ImgProfile = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const Profile = () => {
  const { data: currentUser } = useCurrentUser()

  return (
    <Box flex alignItems="center" gap="10px">
      {currentUser ? (
        <div>{currentUser.displayName}</div>
      ) : (
        <Link href="login">
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
