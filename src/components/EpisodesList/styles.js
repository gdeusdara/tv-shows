import { Text } from '@components/Basic/Text';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TouchableTitle = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.sizes.SS}px;
`;

export const SectionTitle = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.L,
}))``;
