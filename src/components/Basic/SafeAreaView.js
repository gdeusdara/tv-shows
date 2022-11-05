import { SafeAreaView as DefaultSafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const SafeAreaView = styled(DefaultSafeAreaView).attrs(() => ({
  edges: ['top', 'left', 'right']
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
