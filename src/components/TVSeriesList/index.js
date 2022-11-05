import { Container } from '@components/Basic/Container';
import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
// import { Container } from './styles';

const TVSeriesList = ({ data }) => {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </Container>
  );
}

export default TVSeriesList;