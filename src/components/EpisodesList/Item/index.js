import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { tvshowType } from '@constants/types';
import getImageUrl from '@utils/getImageUrl';
import {
  Container, Title, Poster, Desc, Info,
} from './styles';

function Item({ item }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.push('Episode', { show: item });
  };

  return useMemo(() => (
    <Container onPress={onPress}>
      <Poster source={getImageUrl(item.image)} />
      <Info>
        <Title>{item.name}</Title>
        <Desc value={item.summary} />
      </Info>
    </Container>
  ), [item.id]);
}

Item.propTypes = {
  item: tvshowType.isRequired,
};

export default Item;
