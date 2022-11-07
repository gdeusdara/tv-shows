import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors.text,
  size: theme.sizes.X,
}))``;
