import Box from './Box'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ImgProfile = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const H1 = styled.h1`
  margin: 0;
  cursor: pointer;
`

const Profile = () => {
  return (
    <Box flex alignItems="center" gap="10px">
      <Link href="#">
        <H1>Login</H1>
      </Link>
      <Link href="#">
        <ImgProfile src="/profile_pic.jpg" alt="avatar" />
      </Link>
    </Box>
  )
}

export default Profile
