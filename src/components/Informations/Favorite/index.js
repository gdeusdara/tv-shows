import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites } from '@store/actions';
import {
  Container, Icon,
} from './styles';

function Favorite({ favorite, item }) {
  const dispatch = useDispatch();
  const favoritesDict = useSelector((state) => state.favorites.extraData);

  const onPress = () => {
    dispatch(onAddToFavorites(item));
  };

  return useMemo(() => (!favorite ? null : (
    <Container onPress={onPress}>
      <Icon name={favoritesDict?.[item.id] ? 'favorite' : 'favorite-border'} />
    </Container>
  )), [item.id, favorite, favoritesDict?.[item.id]]);
}

Favorite.propTypes = {
  favorite: PropTypes.bool,
  item: tvshowType.isRequired,
};

export default Favorite;
