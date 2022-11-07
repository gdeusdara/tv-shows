import { Text } from '@components/Basic/Text';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.inactive,
  size: theme.sizes.XX,
}))`
  text-align: center;
`;
