import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function app() {
  return <h1 style={{ color: colors.ignite300 }}>Hello World!!!</h1>
}
