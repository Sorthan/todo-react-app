import { CSSProperties, forwardRef, MouseEventHandler, ReactNode, useMemo } from 'react'
import styled from '@emotion/styled'
import { RobotoType } from '../../services/text-typed'
import { TEXT } from '../../constant/colors'

// import { BLACK_000000 } from '../../constant/colors'

const StyledText = styled.div<{
  family: string
  size: number
  weight: number
  color: string
  style?: CSSProperties
}>`
  font-family: ${({ family }) => `Roboto${family}`};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  word-break: break-word;
`

export interface TextProps {
  onClick?: MouseEventHandler
  className?: string
  children: ReactNode
  size?: number
  type?: RobotoType
  color?: string
  style?: CSSProperties
  maxLine?: number
  width?: number
  useEllipsis?: boolean
}
const Roboto = forwardRef((props: TextProps, ref: any) => {
  const {
    children,
    type,
    size,
    color = `${TEXT}`,
    style,
    className,
    ...restProps
  } = props
  const family = useMemo(() => {
    switch (type) {
      case 'BodyBold':
        return '-Bold'
      case 'Body':
        return '-Regular'
      case 'SmallBold':
        return '-Bold'
      case 'Small':
        return '-Regular'
      default:
        return '-Regular'
    }
  }, [type])
  const textSize = useMemo(() => {
    switch (type) {
      case 'BodyBold':
        return 16
      case 'Body':
        return 16
      case 'SmallBold':
        return 12
      case 'Small':
        return 12
      default:
        return 16
    }
  }, [type])

  const textWeight = useMemo(() => {
    switch (type) {
      case 'BodyBold':
        return 700
      case 'Body':
        return 400
      case 'SmallBold':
        return 700
      case 'Small':
        return 400
      default:
        return 400
    }
  }, [type])

  return (
    <StyledText
      ref={ref}
      family={family}
      size={textSize}
      weight={textWeight}
      color={color}
      style={style}
      className={className}
      {...restProps}
    >
      
        <>{children}</>

    </StyledText>
  )
})

export default Roboto
