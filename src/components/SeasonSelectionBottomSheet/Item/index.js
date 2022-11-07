import React, { useMemo } from 'react';
import { tvshowType } from '@constants/types';
import {
  Container, Title,
} from './styles';

function Item({ item, onPress }) {
  return useMemo(() => (
    <Container onPress={onPress}>
      <Title>{`Season ${item.season}`}</Title>
    </Container>
  ), [item.id]);
}

Item.propTypes = {
  item: tvshowType.isRequired,
};

export default Item;
