import React from 'react';
import styled from 'styled-components/native';
import { Text } from '@components/Basic/Text';
import { HTMLView } from '@components/Basic/HTMLView';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.sizes.S}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.M};
  margin: ${({ theme }) => theme.sizes.SS}px 0px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.sizes.S}px;
`;

export const Title = styled(Text).attrs(() => ({
  numberOfLines: 1,
}))`
  padding-bottom: ${({ theme }) => theme.sizes.S}px;
`;

export const DescText = styled(Text).attrs(({ theme }) => ({
  numberOfLines: 2,
  color: theme.colors.secondaryText,
}))``;

export const Desc = styled(HTMLView).attrs(() => ({
  renderNode: (node, index, siblings, parent, defaultRenderer) => {
    if (node.name === 'p') {
      return <DescText key={`${node.name}${index}`}>{node.children[0].data}</DescText>;
    }

    return defaultRenderer;
  },
}))``;

export const Poster = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  border-radius: ${({ theme }) => theme.sizes.S}px;
  width: 70px;
  height: 70px;
`;
