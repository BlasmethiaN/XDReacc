import React from 'react'
import { CenteredBorderContent, CenteredContent, Layout } from '../components/common/Layout.styled'
import UploadForm from '../components/index/UploadForm'

const UploadPage = () => (
  <Layout>
    <CenteredContent>
      <CenteredBorderContent>
        <UploadForm />
      </CenteredBorderContent>
    </CenteredContent>
  </Layout>
)
export default UploadPage
