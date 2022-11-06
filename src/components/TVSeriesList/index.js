import { Container } from '@components/Basic/Container';
import { ActivityIndicator } from '@components/Basic/ActivityIndicator';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import { Content, Message } from './styles';

function TVSeriesList({
  data,
  message,
  loading,
  onEndReached,
}) {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  if (message) {
    return (
      <Content>
        <Message>{message}</Message>
      </Content>
    );
  }

  const listFooterComponent = () => {
    if (loading) return <ActivityIndicator />;

    return null;
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
        ListFooterComponent={listFooterComponent}
      />
    </Container>
  );
}

TVSeriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  })),
  message: PropTypes.string,
  loading: PropTypes.bool,
  onEndReached: PropTypes.func,
};

TVSeriesList.defaultProps = {
  data: [],
  message: '',
  loading: false,
  onEndReached: () => {},
};

export default TVSeriesList;