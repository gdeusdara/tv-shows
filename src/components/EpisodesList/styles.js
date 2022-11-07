import { Text } from '@components/Basic/Text';
import styled from 'styled-components/native';
import DefaultBottomSheet from '@gorhom/bottom-sheet';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TouchableTitle = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.S}px;
  padding: ${({ theme }) => theme.sizes.SS}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.L,
}))``;

export const BottomSheet = styled(DefaultBottomSheet)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.S}px;
`;
