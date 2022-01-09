import styled from '@emotion/styled'
import { PRIMARY, WHITE } from '../../constant/colors'
import { useLocation } from 'react-router-dom'
import WindSong from '../common/WindSong'

const FooterContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  const location = useLocation()
  return (
    <FooterContainer style={{ backgroundColor: location.pathname === '/' ? WHITE : PRIMARY }}>
      <WindSong type="Body" color={location.pathname === '/' ? PRIMARY : WHITE}>@2022 Cr.Sorathan</WindSong>
    </FooterContainer>
  )
}

export default Footer
