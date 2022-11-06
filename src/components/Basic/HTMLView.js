import DefaultHTMLView from 'react-native-htmlview';
import styled from 'styled-components/native';

export const HTMLView = styled(DefaultHTMLView).attrs(({ theme }) => ({
  stylesheet: {
    p: {
      color: theme.colors.secondaryText,
      fontSize: theme.sizes.M,
    },
  },
}))``;
