import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useCurrentUser } from '../api/routes'
import { CenteredContent, Layout } from '../components/common/Layout.styled'
import Navbar from '../components/common/Navbar'

const ProfilePage = () => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  useEffect(() => {
    if (!currentUser) {
      router.replace('/')
    }
  }, [currentUser])

  return (
    <Layout>
      <Navbar />
      <CenteredContent style={{ display: 'flex' }}>something</CenteredContent>
    </Layout>
  )
}

export default ProfilePage
