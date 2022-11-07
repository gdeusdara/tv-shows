import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '@components/Basic/Text';
import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { HTMLView } from '@components/Basic/HTMLView';

const win = Dimensions.get('window');

export const Content = styled(SafeAreaView).attrs(() => ({
  edges: ['left', 'right', 'bottom'],
}))``;

export const Poster = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 100%;
  height: ${({ theme }) => (win.height / 2) - theme.sizes.L};
`;

export const TitleView = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [`${theme.colors.background}00`, theme.colors.background],
  locations: [0, 1],
}))`
  margin-top: -200px;
  justify-content: flex-end;
  align-items: center;
  height: 200px;
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.XX,
  numberOfLines: 2,
}))``;

export const SectionTitle = styled(Text).attrs(({ theme }) => ({
  size: theme.sizes.L,
}))``;

export const Description = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.secondaryText,
}))``;

export const Info = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.primary,
}))``;

export const Summary = styled(HTMLView)`
  margin-top: ${({ theme }) => theme.sizes.M}px;
`;

export const Section = styled.View`
  margin: ${({ theme }) => theme.sizes.SS}px 0px;
`;
