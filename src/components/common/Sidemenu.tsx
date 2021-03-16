import React, { useState } from 'react'
import { Drawer } from 'antd'
import { FiAlignJustify } from 'react-icons/fi'
import styled from 'styled-components'

const OpenSide = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 30px;
  cursor: pointer;
  outline: none;
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
      <OpenSide onClick={showDrawer}>
        <FiAlignJustify />
      </OpenSide>
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
