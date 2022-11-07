import { Text } from '@components/Basic/Text';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import DefaultBottomSheet from '@gorhom/bottom-sheet';

export const BottomSheet = styled(DefaultBottomSheet).attrs(({ theme }) => ({
  backgroundStyle: {
    backgroundColor: theme.colors.background,
  },
}))`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.S}px;
`;

export const TouchableTitle = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius-top-left: ${({ theme }) => theme.sizes.XX}px;
  border-radius-top-right: ${({ theme }) => theme.sizes.XX}px;
  padding: ${({ theme }) => theme.sizes.SS}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.L,
}))``;

export const Arrow = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'keyboard-arrow-down',
  color: theme.colors.text,
  size: theme.colors.XX,
}))`
  margin-left: ${({ theme }) => theme.sizes.S}px;
`;

