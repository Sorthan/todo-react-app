import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"
import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { PRIMARY_LIGHT, SECONDARY, SECONDARY_LIGHT, TEXT, WHITE } from "../../constant/colors"
import { useRouter } from "../../utils/helper"
import WindSong from "../common/WindSong"

const HeaderBox = styled(Box)`
  display: flex;
  background-color: ${PRIMARY_LIGHT};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`
const HomeBarBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
const HeaderArea = styled(Box)`
  display: flex;
  flex-direction: column;
`
const MenuBar = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
`
const CustomButton = styled(Button)`
  background-color: ${SECONDARY_LIGHT};
  margin: auto;
  :hover {
    background-color: ${SECONDARY};
  }
`

const Topbar = () => {
  const history = useHistory()
  const { pathname } = useRouter()
  const onTodoClick = useCallback(
    () => {
      history.push('/todos')
    },
    [history]
  )
  const onHomeClick = useCallback(() => {
    history.goBack()
  },[history])

  return (
    <HeaderBox>
      <HomeBarBox>
        <HeaderArea>
          <WindSong type="HeaderBold" color={WHITE}>Tanuki Gohan</WindSong>
          <WindSong type="BodyBold" color={WHITE}>たぬき ご飯</WindSong>
        </HeaderArea>
        <MenuBar>
          
          {pathname.match('/todos') ? 
              <CustomButton variant="contained" onClick={onHomeClick}>
                <WindSong type="Small" color={TEXT}>BACK TO HOME</WindSong>
              </CustomButton> 
            : 
              <CustomButton variant="contained" onClick={onTodoClick}>
                <WindSong type="Small" color={TEXT}>TODO</WindSong>
              </CustomButton>
          }
        </MenuBar>
      </HomeBarBox>
    </HeaderBox>
   
  )
}

export default Topbar