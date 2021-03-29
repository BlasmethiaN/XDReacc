import React from 'react'
import { CenteredContent, Layout } from '../components/common/Layout.styled'
import Navbar from '../components/common/Navbar'
import { useRedirectIfLoggedOut } from '../hooks/hooks'

const ProfilePage = () => {
  useRedirectIfLoggedOut()

  return (
    <Layout>
      <Navbar />
      <CenteredContent>something</CenteredContent>
    </Layout>
  )
}

export default ProfilePage
