import theme from '@constants/theme'
import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.text};
  size: ${({ theme, size }) => size || theme.sizes.M};
`
