import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'
import { WHITE } from '../../constant/colors'
import Topbar from './Topbar'
import Footer from './Footer'

const BodyContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 32px;
  width: 100%;
`

const Body = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  min-height: 100vh;
  background-color: ${WHITE};
`

type LayoutProps = {}


const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { children } = props

  return (
    <Body>
      <Topbar />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </Body>
  )
}

export default Layout