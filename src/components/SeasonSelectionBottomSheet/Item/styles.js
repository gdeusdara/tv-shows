import styled from 'styled-components/native';
import { Text } from '@components/Basic/Text';

export const Container = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.sizes.S}px 0px;
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.ML,
}))``;
