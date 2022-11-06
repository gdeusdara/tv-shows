import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px ${({ theme, noPadding }) => (noPadding ? 0 : theme.sizes.M)}px;
`;
