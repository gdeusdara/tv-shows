import styled from 'styled-components/native';
import { Text } from '@components/Basic/Text';
import { Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const win = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.SS}px;
  flex: 1;
`;

export const Title = styled(Text).attrs(() => ({
  numberOfLines: 1,
}))`
  padding-top: ${({ theme }) => theme.sizes.SS}px;
  padding-bottom: ${({ theme }) => theme.sizes.S}px;
`;

export const Poster = styled(AutoHeightImage).attrs(({ theme }) => ({
  width: ((win.width / 2) - (theme.sizes.M * 2)),
}))`
  border-radius: ${({ theme }) => theme.sizes.M}px;
`;
