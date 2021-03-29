import React, { useState } from 'react'
import { Drawer, Button } from 'antd'
import { UserService } from '../api/user/user.service'
import { Menu as AntMenu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const Menu = () => {
    const router = useRouter()
    const onClick = () => {
      const result = UserService.logout()
      if (result) {
        router.replace('login')
      }
    }

    return (
      <AntMenu>
        <AntMenu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item>
          <a onClick={onClick}>Logout</a>
        </AntMenu.Item>
      </AntMenu>
    )
  }
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Menu />
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
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

export default App
