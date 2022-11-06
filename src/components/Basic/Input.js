import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.inactive,
}))`
  padding: ${({ theme }) => theme.sizes.M}px;
  margin: ${({ theme }) => theme.sizes.M}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.XX}px;
  color:  ${({ theme }) => theme.colors.text};
`;
