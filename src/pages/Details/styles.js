import styled from 'styled-components/native';
import { SafeAreaView } from '@components/Basic/SafeAreaView';

export const Content = styled(SafeAreaView).attrs(() => ({
  edges: ['left', 'right', 'bottom'],
}))``;

export const Scroll = styled.ScrollView``;
