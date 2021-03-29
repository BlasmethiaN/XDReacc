import React from 'react'
import { CenteredContent, Layout } from '../components/common/Layout.styled'
import Navbar from '../components/common/Navbar'

const ProfilePage = () => (
  <Layout>
    <Navbar />
    <CenteredContent style={{ display: 'flex' }}>something</CenteredContent>
  </Layout>
)

export default ProfilePage
