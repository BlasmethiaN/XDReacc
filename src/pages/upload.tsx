import React, { useEffect, useState } from 'react'

import { Layout } from '../components/common/Layout.styled'
import { Spin } from 'antd'
import UploadForm from '../components/index/UploadForm'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useCurrentUser } from '../api/routes'

const UploadPage = () => {
  const [draftId, setDraftId] = useState<string>()
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  useEffect(() => {
    if (!currentUser) {
      router.replace('/')
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser)
      if (draftId) {
        const deleteDraft = async () => {
          await axios.delete(`/draft/${draftId}`)
        }
        deleteDraft()
      } else {
        const createDraft = async () => {
          setDraftId((await axios('/contribution/new-draft')).data)
        }
        createDraft()
      }
  }, [])

  return <Layout>{draftId ? <UploadForm draftId={draftId} /> : <Spin tip="Loading..." />}</Layout>
}
export default UploadPage
