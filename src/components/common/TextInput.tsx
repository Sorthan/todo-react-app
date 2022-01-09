import TextField, { TextFieldProps } from '@mui/material/TextField'
import styled from '@emotion/styled'
import Roboto from './Roboto'
import { ERROR, PRIMARY, SECONDARY } from '../../constant/colors'

const StyledInput = styled(TextField)<{
  disabled: boolean
  hasValue: boolean
  isMultiline: boolean
}>`
  width: 100%;
  font-family: 'Roboto-Regular';
  .MuiInputLabel-root {
    font-family: 'Roboto-Regular';
    font-size: 16px;
    font-weight: 400;
  }
  .MuiInput-underline:after {
    border-bottom: ${({ disabled }) =>
      disabled ? `1px solid ${SECONDARY}` : `1px solid ${PRIMARY}`};
  }
  .MuiInput-underline:before {
    border-bottom: ${({ disabled }) =>
      disabled ? `1px solid ${SECONDARY}` : `1px solid ${PRIMARY}`};
  }
  .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${PRIMARY};
  }
  .MuiInput-input {
    font-family: 'Roboto-Regular';
    font-size: 16px;
    padding: 4px 0px 0px 0px;
    margin-bottom: ${({ isMultiline }) => (isMultiline ? `-5px` : `2px`)};
  }
  :focus-within {
    .MuiInputLabel-root {
      transform: ${({ isMultiline }) =>
        isMultiline ? `translate(0, 0px) scale(1)` : `translate(0, -8px) scale(1)`};
    }
  }
  .MuiInputLabel-root {
    transform: ${({ hasValue, isMultiline }) =>
      isMultiline
        ? hasValue
          ? `translate(0, 0px) scale(1)`
          : `translate(0, 25px) scale(1)`
        : hasValue
        ? `translate(0, -8px) scale(1)`
        : ``};
  }
`

export type InputProps = { isRequired?: boolean; isError?: boolean } & TextFieldProps

export const TextInput = (props: InputProps) => {
  const {
    disabled = false,
    label,
    isRequired = false,
    isError = false,
    value,
    multiline,
    ...restProps
  } = props
  return (
    <StyledInput
      disabled={disabled}
      hasValue={!!value}
      isMultiline={multiline || false}
      value={value}
      error={isError}
      label={
        isRequired === false ? (
          <Roboto
            type="Body"
            color={isError ? `${ERROR}` : `${disabled ? `${SECONDARY}` : `${PRIMARY}`}`}
          >
            {label}
          </Roboto>
        ) : (
          <Roboto
            type="Body"
            color={isError ? `${ERROR}` : `${disabled ? `${SECONDARY}` : `${PRIMARY}`}`}
          >
            {label}
            <span style={{ color: `${ERROR}` }}>*</span>
          </Roboto>
        )
      }
      variant="standard"
      multiline={multiline}
      size="medium"
      {...restProps}
    />
  )
}
export default TextInput
