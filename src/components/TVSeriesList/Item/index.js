import React from 'react';
import { View } from 'react-native';

import { Container, Title, Poster } from './styles';

const Item = ({ item }) => {
  return (
    <Container>
      <Poster source={{ uri: item.image.medium }} />
      <Title>{item.name}</Title>
    </Container>
  );
}

export default Item;