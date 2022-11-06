import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { tvshowType } from '@constants/types';
import getImageUrl from '@utils/getImageUrl';
import { Container, Title, Poster } from './styles';

function Item({ item }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Details', { show: item });
  };

  return useMemo(() => (
    <Container onPress={onPress}>
      <Poster source={getImageUrl(item.image)} />
      <Title>{item.name}</Title>
    </Container>
  ), [item.id]);
}

Item.propTypes = {
  item: tvshowType.isRequired,
};

export default Item;
