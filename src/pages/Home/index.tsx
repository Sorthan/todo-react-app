import styled from "@emotion/styled"
import { Box } from "@mui/material"
import Roboto from "../../components/common/Roboto"
import Layout from "../../components/layout"
import JapanImage from '../../assets/images/japan3.jpeg'
import { PRIMARY, PRIMARY_LIGHT, SECONDARY_LIGHT, WHITE } from "../../constant/colors"
import WindSong from "../../components/common/WindSong"

const BodyArea = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const JapanImg = styled.img`
  width: 60%;
  height: 500px;
  border: 16px dashed ${SECONDARY_LIGHT};
  border-radius: 15px;
`
const MenuBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(-45deg, ${PRIMARY_LIGHT}, ${SECONDARY_LIGHT});
  height: 520px;
`
const MenuLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
`

const Home = () => {
  return (
    <Layout>
      <BodyArea>
        <Roboto>Welcome to my Homepage</Roboto>
        <Box height={30} />
        <JapanImg src={JapanImage} alt="jpimage"/>
        <Box height={30} />
        <MenuBox>
          <MenuLayout>
            <Roboto color={WHITE}>RAMEN</Roboto>
            <Roboto color={WHITE}>89 THB</Roboto>
            <Roboto color={WHITE}>KARAKE</Roboto>
            <Roboto color={WHITE}>69 THB</Roboto>
            <Roboto color={WHITE}>MISO SOUP</Roboto>
            <Roboto color={WHITE}>39 THB</Roboto>
            <Roboto color={WHITE}>MUSTROOM SOUP</Roboto>
            <Roboto color={WHITE}>59 THB</Roboto>
            <Roboto color={WHITE}>SALMON STEAK</Roboto>
            <Roboto color={WHITE}>179 THB</Roboto>
            <Roboto color={WHITE}>MISO RAMEN</Roboto>
            <Roboto color={WHITE}>89 THB</Roboto>
            <Roboto color={WHITE}>CHICKEN CURRY</Roboto>
            <Roboto color={WHITE}>169 THB</Roboto>
            <Roboto color={WHITE}>SALMON CURRY</Roboto>
            <Roboto color={WHITE}>189 THB</Roboto>
            <Roboto color={WHITE}>TEMPURA</Roboto>
            <Roboto color={WHITE}>99 THB</Roboto>
            <Roboto color={WHITE}>SOBA</Roboto>
            <Roboto color={WHITE}>79 THB</Roboto>
          </MenuLayout>
        </MenuBox>
        <Box height={30} />
        <WindSong type="HeaderBold" color={PRIMARY}>About us</WindSong>
        <Box height={16} />
        <Roboto>No longer to see this please contact web creater.</Roboto>
        <Box height={30} />
      </BodyArea>
    </Layout>
  )
}

export default Home
