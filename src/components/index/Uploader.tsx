import { Upload, Modal, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import axios from 'axios'

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const Uploader = ({ draftId }: { draftId: string }) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [previewTitle, setPreviewTitle] = useState<string>('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleCancel = () => setPreviewVisible(false)

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
    setFileList(info.fileList)
    console.log(info.file)
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  const upload = (file: RcFile) => {
    console.log(file)
    return `${axios.defaults.baseURL}/contribution/upload?draftId=${draftId}`
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  return (
    <>
      <Upload
        name="image"
        withCredentials={true}
        action={upload}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
}
export default Uploader
