import { makeStyles } from '@mui/styles'
import { CSSProperties } from '@mui/styles'
import { AnyObject } from 'final-form'
import { ComponentType, useMemo } from 'react'
import { FieldProps, FieldRenderProps } from 'react-final-form'
import { Field as FieldFinalForm } from 'react-final-form'
import Roboto from '../../components/common/Roboto'
import { ERROR } from '../../constant/colors'

const useModComponentStyle = makeStyles({
  root: {
    position: 'relative',
  },
  errorText: {
    position: 'absolute',
    top: '100%',
    paddingTop: '4px',
  },
})

export const modifyComponent =
  (Component: ComponentType<any>) => (props: FieldRenderProps<any>) => {
    const { input, meta, style, className, onChange, ...restProps } = props
    const { error, touched } = meta

    const isError = useMemo(() => {
      return error && touched
    }, [error, touched])
    const classes = useModComponentStyle()

    return (
      <div className={`${classes.root} ${className}`} style={style}>
        <Component
          //isError={isError}
          {...input}
          onChange={(v: any) => {
            input.onChange(v)
            if (onChange) {
              onChange(v)
            }
          }}
          {...restProps}
        />
        {isError && (
          <Roboto
            color={`${ERROR}`}
            type="Small"
            className={[classes.errorText, 'error-text'].join(' ')}
          >
            {(meta.error)}
          </Roboto>
        )}
      </div>
    )
  }

interface WithViewModeProps extends AnyObject {
  isViewMode?: boolean
  textStyle?: CSSProperties
  textClassName?: string
  viewModeSetting?: {
    type: 'text' | 'date'
    format?: string
  }
}
export const withViewMode =
  <T extends any>(Componet: ComponentType<any>) =>
  (props: { input: any; options?: any } & T & WithViewModeProps & any) => {
    // @ts-ignore
    const {
      isViewMode = false,
      textStyle,
      textClassName = '',
      options,
      viewModeSetting,
      ...restProps
    } = props
    const classes = useViewModeStyle()

    const valueLabel = useMemo(() => {
      if (options && options instanceof Array && options?.length) {
        return (
          options?.find((a: any) => {
            return a.value === props.input.value
          })?.label || '-'
        )
      } else {
        return props.input.value || '-'
      }
    }, [options, props.input.value])

    return isViewMode ? (
      <Roboto type="Body" className={`${classes.text} ${textClassName}`} style={textStyle}>
        {valueLabel}
      </Roboto>
    ) : (
      <Componet {...restProps} options={options} />
    )
  }

export const makeField = <T extends any>(component: ComponentType<any>) => {
  const newComponent = withViewMode(modifyComponent(component))
  const returnField = (
    props: FieldProps<string, FieldRenderProps<string>> & T & WithViewModeProps,
  ) => <FieldFinalForm {...props} render={newComponent} />

  return returnField
}

const useViewModeStyle = makeStyles({
  text: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
})
