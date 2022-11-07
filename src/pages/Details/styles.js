import styled from 'styled-components/native';
import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Content = styled(SafeAreaView).attrs(() => ({
  edges: ['left', 'right', 'bottom'],
}))``;

export const Scroll = styled.ScrollView``;
export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`;
