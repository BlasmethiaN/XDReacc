import React, { useState } from 'react'

import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const OpenSide = styled(MenuOutlined)`
  font-size: 30px;
  cursor: pointer;
`

const Sidemenu: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <OpenSide onClick={showDrawer} />
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default Sidemenu
