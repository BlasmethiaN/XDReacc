import { Layout as _Layout } from 'antd'
import styled from 'styled-components'

export const Layout = styled(_Layout)`
  min-height: 100%;
`

export const Header = styled(_Layout.Header)`
  display: flex;
  border-bottom: 1px solid white;
  padding: 0px 10px;
`

export const Content = styled(_Layout.Content)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const CenteredContent = styled(Content)`
  justify-content: center;
  align-items: center;
`

export const XDlogo = styled.img`
  width: 140px;
  cursor: pointer;
`
