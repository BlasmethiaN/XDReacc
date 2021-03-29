import Link from 'next/link'
import React from 'react'
import { mutate } from 'swr'
import { Route } from '../../api/routes'
import { UserService } from '../../api/user/user.service'
import { Menu as AntMenu } from 'antd'

const Menu = () => {
  const onClick = async () => {
    const result = await UserService.logout()
    if (result) {
      mutate(Route.CURRENT_USER)
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

export default Menu
