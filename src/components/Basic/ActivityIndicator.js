import styled from 'styled-components/native';

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.text,
}))`
  padding: ${({ theme }) => theme.sizes.M}px;
  align-self: center;
`;
