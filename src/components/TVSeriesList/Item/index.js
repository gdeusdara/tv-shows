import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { noImage } from '@assets/index';
import { Container, Title, Poster } from './styles';

function Item({ item }) {
  return useMemo(() => (
    <Container>
      <Poster source={item.image ? { uri: item.image.medium } : noImage} />
      <Title>{item.name}</Title>
    </Container>
  ), [item.id]);
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }).isRequired,
};

export default Item;
