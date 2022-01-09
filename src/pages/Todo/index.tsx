import Layout from "../../components/layout"
import { Form } from 'react-final-form'
import styled from "@emotion/styled"
import { Box , Button} from "@mui/material"
import { useCallback } from "react"
import { TextInputField } from "../../components/fields"

const BodyArea = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex: 1;
`
const BoxArea = styled(Box)`
  width: auto;
  display: grid;
  grid-template-columns: auto 180px;
  grid-column-gap: 40px;
  flex: 1;
`
const InputArea = styled(Box)`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const CustomButton = styled(Button)`
  height: 50px;
  justify-content: baseline;
`

export type TodoType = {
  todoName: string
}
const Todo = () => {
  const onTodoSubmit = useCallback(
    (values : TodoType) => {
      console.log(values)
    },
    []
  )

  return (
    <Layout>
      <BodyArea>
        <Form<TodoType> onSubmit={onTodoSubmit}>
          {({handleSubmit}) => {
            return (
              <form onSubmit={handleSubmit}>
                <BoxArea>
                  <InputArea>
                    <TextInputField label="TODO NAME" name="todoName" />
                    <Box width={10}/>
                    <CustomButton onClick={handleSubmit}>ADD</CustomButton>
                  </InputArea>
                </BoxArea>
              </form>
            )
          }}
        </Form>
      </BodyArea>
    </Layout>
  )
}

export default Todo
