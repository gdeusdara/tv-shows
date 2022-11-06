import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-size: ${({ theme, size }) => size || theme.sizes.M}px;
`;
